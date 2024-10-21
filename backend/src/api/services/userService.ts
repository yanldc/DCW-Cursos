import bcrypt from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import User from '../models/User';
import UserRepository from '../repositories/userRepository';
import AppError from '../middlewares/AppError';
import { instanceToInstance } from 'class-transformer';

interface IRequest {
  name: string;
  birth: Date;
  email: string;
  password: string;
}

class UserService {
  public async create({
    name,
    birth,
    email,
    password,
  }: IRequest): Promise<User> {
    const userRepository = getCustomRepository(UserRepository);

    const emailExists = await userRepository.findByMail(email);
    if (emailExists) {
      throw new AppError(
        'The email has already been registered.',
        'bad request',
        400,
      );
    }

    const hashedPassword = await bcrypt.hash(password, 8);
    const user = userRepository.create({
      name,
      birth,
      email,
      password: hashedPassword,
    });

    await userRepository.save(user);
    return instanceToInstance(user);
  }
}

export default UserService;
