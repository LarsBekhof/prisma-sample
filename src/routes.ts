import { generateControllers } from './controllers';

export const generateRoutes = (): Route[] => {
	const controllers = generateControllers();

	return [
		{
			method: 'get',
			path: '/users',
			controller: controllers.user,
			func: 'index',
		},
		{
			method: 'post',
			path: '/users',
			controller: controllers.user,
			func: 'create',
		},
	];
};

interface Route {
	method: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'options' | 'head';
	path: string;
	controller: Object,
	func: string
};
