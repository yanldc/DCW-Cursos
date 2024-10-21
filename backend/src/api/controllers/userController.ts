import { Request, Response } from 'express';
import UserService from '../services/userService';
import { instanceToInstance } from 'class-transformer';

export default class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, birth, email, password } = request.body;

    const userService = new UserService();
    const user = await userService.create({
      name,
      birth,
      email,
      password,
    });

    return response.status(201).json(instanceToInstance(user));
  }
}
