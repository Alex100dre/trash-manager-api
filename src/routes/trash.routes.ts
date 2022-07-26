import { Router, Request, Response } from 'express';
import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
});

const router = Router();

router.get('/list', (req: Request, res: Response) => {
    return getTrashes(req, res)
})

const getTrashes = (req: Request, response: Response) => {
    const query = `
        SELECT
            trash.id,
            array_agg(distinct day.id) as removal_days,
            last_removal
        FROM trash
            LEFT JOIN trash_day AS TD
                ON TD.trash_id = trash.id
            LEFT JOIN day
                ON day.id = TD.day_id
        GROUP BY trash.id
        ;
    `;

    pool.query(query, (error, results) => {
        if(error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

export default router;