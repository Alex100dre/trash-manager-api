import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import trashRoutes from "./src/routes/trash.routes";

const app: Express = express();
const port = process.env.PORT;
// const allowedOrigins = [process.env.APP_URL] as string[];
// const options: cors.CorsOptions = {
//     origin: allowedOrigins
// };

app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use('/trash', trashRoutes);

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});