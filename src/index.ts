import express, { Request, Response } from 'express';
import { generateRoutes } from './routes';

const port = 3000;
const app = express();

app.use(express.json());

const routes = generateRoutes();

for (const { method, path, controller, func } of routes) {
	app[method](
		path,
		(req: Request, res: Response) => controller[func](req, res),
	);
}

app.listen(port, () => console.log(`Listening on localhost:${port}`));
