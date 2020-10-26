import { PrismaClient } from '@prisma/client';
import { UserController } from './user.controller';

export const generateControllers = () => {
	const prisma = new PrismaClient();

	return {
		user: new UserController(prisma),
	};
};
