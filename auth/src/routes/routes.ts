import {Request, Response} from "express";
import { request } from "https";

export class Routes {

    constructor() {
        // SET UP DB
    }

    public routes(app: any): void{
        app.route('/auth').post((req: Request, res: Response) => {
            res.status(200).json({})
        });

        app.route('/auth/registration').post((req: Request, res:Response) => {
            res.status(res.statusCode).json({});
        });

        app.route('/auth/login').post((req: Request, res:Response) => {
            res.status(res.statusCode).json(req.body);
        });
        app.route('/auth/logout').post((req: Request, res:Response) => {
            res.status(res.statusCode).json({});
        });
    }
}

