import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { Sequelize } from 'sequelize';


dotenv.config();
const app: Express = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('*', (req: Request, res: Response) =>
{
  res.status(404).send('404 Not Found');
});

app.get('/', (req: Request, res: Response) =>
{
  res.send('Express + TypeScript Server');
});

const port = process.env.PORT || 3000;
app.listen(port, () =>
{
  console.log(`[server]: Server is running at \x1b[32mhttp://localhost:${port}\x1b[0m`);
});