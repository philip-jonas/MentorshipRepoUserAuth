"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.prototype.routes = function (app) {
        app.route('/auth').post(function (req, res) {
            res.status(200).send({
                message: "How are you doing"
            });
        });
    };
    return Routes;
}());
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map