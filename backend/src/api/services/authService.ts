import { getCustomRepository } from 'typeorm';
import UserRepository from '../repositories/userRepository';
import AppError from '../middlewares/AppError';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import User from '../models/User';
import { instanceToInstance } from 'class-transformer';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

class AuthService {
  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const userRepository = getCustomRepository(UserRepository);
    const user = await userRepository.findByMail(email);

    if (!user) {
      throw new AppError('Incorrect email or password', 'bad request', 400);
    }

    const passwordMatched = await compare(password, user.password);
    if (!passwordMatched) {
      throw new AppError('Incorrect email or password', 'bad request', 400);
    }

    const token = sign({}, 'secret', {
      subject: String(user.id),
      expiresIn: '12h',
    });

    const userClean = instanceToInstance(user);
    return { user: userClean, token };
  }
}

export default AuthService;
