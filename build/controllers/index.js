"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("../lib");
class Controller {
    static getTimeAPI(param) {
        if (lib_1.isISODate(/-/gm, param)) {
            return { unix: lib_1.getUnixFromISO(param), utc: lib_1.getUTCFromISO(param.toString()) + "GMT" };
        }
        else {
            if (param.search(/[0-9]/gm) >= 0)
                return { unix: param, utc: lib_1.getUTCFromUnix(param) + "GMT" };
            else
                return { error: "Invalid date" };
        }
    }
}
exports.default = Controller;
