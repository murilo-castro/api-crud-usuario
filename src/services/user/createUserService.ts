import prismaClient from "../../prisma";

type UserRequest = {
  name: string;
  sex: string;
  date_of_birth: string;
  marital_status: string;
};

class CreateUserService {
  async execute({ name, sex, date_of_birth, marital_status }: UserRequest) {
    const user = prismaClient.user.create({
      data: {
        name,
        sex,
        date_of_birth,
        marital_status,
      },
    });
    return { ok: true };
  }
}

export { CreateUserService };
