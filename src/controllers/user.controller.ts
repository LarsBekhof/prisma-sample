import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

export class UserController {
	private prisma: PrismaClient;

	public constructor(prisma: PrismaClient) {
		this.prisma = prisma;
	}

	public async index(req: Request, res: Response) {
		const users = await this.prisma.user.findMany({
			include: {
				messages: true,
			},
		});

		res.send(users);
	}

	public async create(req: Request, res: Response) {
		await this.prisma.user.create({ data: req.body });

		res.sendStatus(204);
	}
}
