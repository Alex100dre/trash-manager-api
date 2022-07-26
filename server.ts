import express, { Express, Request, Response } from 'express';
import trashRoutes from "./src/routes/trash.routes";
const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use('/trash', trashRoutes);

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});