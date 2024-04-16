import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/createUserService";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, sex, date_of_birth, marital_status } = req.body;

    const createUserService = new CreateUserService();
    const user = createUserService.execute({
      name,
      sex,
      date_of_birth,
      marital_status,
    });

    return res.json({ ok: true });
  }
}

export { CreateUserController };
