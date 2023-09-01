import { Request, Response } from 'express';

import { UserUseCase } from '../../application/userUseCase';

export class UserController {
  constructor(private userUseCase: UserUseCase) {
    this.addCtrl = this.addCtrl.bind(this);
    this.readCtrl = this.readCtrl.bind(this);
  }

  public async browseCtrl(req: Request, res: Response) {
    const users = await this.userUseCase.browseUser();
    res.send({ users });
  }

  public async readCtrl({ query }: Request, res: Response) {
    const { uuid = '' } = query;
    const user = await this.userUseCase.readUser(`${uuid}`);
    res.send({ user });
  }

  public async editCtrl({ body }: Request, res: Response) {
    const user = await this.userUseCase.editUser(body);
    res.send({ user });
  }

  public async addCtrl({ body }: Request, res: Response) {
    const user = await this.userUseCase.addUser(body);
    res.send({ user });
  }

  public async deleteCtrl({ body }: Request, res: Response) {
    const { uuid } = body;
    const response = await this.userUseCase.deleteUser(uuid);
    res.send({ response });
  }
}
