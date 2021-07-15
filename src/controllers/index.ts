import {isISODate, getUnixFromISO, getUTCFromISO, getUTCFromUnix} from  "../lib";

export default class Controller {
    static getTimeAPI(param: any) {
        if(isISODate(/-/gm, param)){
            return {unix: getUnixFromISO(param), utc: getUTCFromISO(param.toString()) + "GMT"}   
        }else{
            if(param.search(/[0-9]/gm) >= 0)
                return {unix: param, utc: getUTCFromUnix(param) + "GMT"}
            else
                return {error: "Invalid date"}
        }
    }
}

