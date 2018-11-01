import {Request, Response} from "express";

export class Routes {
    public routes(app: any): void{
        app.route('/auth').post((req: Request, res: Response) => {
            res.status(200).send({
                message: "How are you doing"
            })
        });
    }
}