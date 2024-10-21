import { Request, Response } from 'express';
import AuthService from '../services/authService';

export default class AuthController {
  public async login(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    const authService = new AuthService();

    try {
      const { user, token } = await authService.execute({ email, password });
      return response.status(200).json({ user, token });
    } catch (error) {
      return response.status(error.statusCode || 500).json({
        message: error.message,
      });
    }
  }
}
