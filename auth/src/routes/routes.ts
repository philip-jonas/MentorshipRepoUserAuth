import {Request, Response} from "express";
import { request } from "https";

export class Routes {

    constructor() {
        // SET UP DB
    }

    public routes(app: any): void{
        app.route('/auth').post((req: Request, res: Response) => {
            res.status(200).send({})
        });
        app.route('/auth/registration').post((req: Request, res:Response) => {
            res.status(res.statusCode).send({});
        });
        app.route('/auth/login').post((req: Request, res:Response) => {
            res.status(res.statusCode).send(req.body);
        });
        app.route('/auth/logout').post((req: Request, res:Response) => {
            res.status(res.statusCode).send({});
        });
    }
}

