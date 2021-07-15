import moment from "moment";

export const isISODate = (re: any, str: string): boolean => {
    console.log(str.search(re));
    return str.search(re) != -1 ? true : false;
}

export const getUnixFromISO = (param: string): string => {
    let ts = moment(param).valueOf();
    let m = moment(ts);
    let s = m.format("dddd, MMMM Do YYYY, hh:mm:ss zz");
    console.log(`Retrieving unix ts from iso date: ${param} - ${ts}`);
    return ts.toString();

}

export const getUTCFromISO = (param: string): string => {
    let m = moment(param);
    let s = m.format("dddd, MMMM Do YYYY, hh:mm:ss zz");
    console.log(`Retrieving utc date from iso: ${param} - ${s}`);
    return s;
}

export const getUTCFromUnix = (param: number): string => {
    let m = moment.unix(param/1000);
    let s = m.format("dddd, MMMM Do YYYY, hh:mm:ss zz");
    console.log(`Retrieving utc date from unix: ${param} - ${s}`);
    return s;
}
