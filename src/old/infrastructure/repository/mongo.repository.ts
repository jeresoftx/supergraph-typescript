/**
 * Infra! Mongo 🙌
 */
import { UserEntity } from '../../domain/entities/user.entity';
import { UserRepository } from '../../domain/repositories/user.repository';
import UserModel from '../model/user.schema';
/**
 * Mongo!
 */
export class MongoRepository implements UserRepository {
  async browseUser(): Promise<any> {
    const user = await UserModel.find();
    return user;
  }

  async readUser(uuid: string): Promise<any> {
    const user = await UserModel.findOne({ uuid });
    return user;
  }

  async editUser(userIn: UserEntity): Promise<any> {
    const user = await UserModel.create(userIn);
    return user;
  }

  async addUser(userIn: UserEntity): Promise<any> {
    const user = await UserModel.create(userIn);
    return user;
  }

  async deleteUser(uuid: string): Promise<any> {
    const user = await UserModel.delete({ uuid });
    return user;
  }
}
