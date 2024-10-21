import { EntityRepository, Repository } from 'typeorm';
import User from '../models/User';

@EntityRepository(User)
class UserRepository extends Repository<User> {
  public async findByMail(email: string): Promise<User | undefined> {
    return this.findOne({ where: { email } });
  }

  public async findById(id: number): Promise<User | undefined> {
    return this.findOne({ where: { id } });
  }
}

export default UserRepository;
