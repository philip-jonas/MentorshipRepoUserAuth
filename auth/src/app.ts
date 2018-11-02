import express from "express";
import { Routes } from "./routes/routes";
import bodyParser = require("body-parser");

export class App {
    
    public app: express.Application;
    public route: Routes = new Routes();

    constructor() {
        this.app = express(); 
        this._config();
        this.route.routes(this.app);
    }

    _config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.app.listen(process.env.PORT_AUTH_API || 3001);
    }
}
new App();
