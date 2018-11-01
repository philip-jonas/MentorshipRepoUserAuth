"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes/routes");
var bodyParser = require("body-parser");
var App = /** @class */ (function () {
    function App() {
        this.route = new routes_1.Routes();
        this.app = express_1.default();
        this._config();
        this.route.routes(this.app);
    }
    App.prototype._config = function () {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.listen(process.env.PORT_SERVICE_AUTH || 3001);
    };
    return App;
}());
exports.App = App;
new App();
//# sourceMappingURL=app.js.map