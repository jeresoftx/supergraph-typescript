import { UserRepository } from '@/old/domain/repositories/user.repository';

export class UserAdd {
  constructor(private readonly userRepository: UserRepository) {}

  async create(data: User): Promise<{ success: boolean; data: User }> {
    const user = this.userRepository.create(data);
    return {
      success: true,
      data: user,
    };
  }
}
