"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUTCFromUnix = exports.getUTCFromISO = exports.getUnixFromISO = exports.isISODate = void 0;
const moment_1 = require("moment");
const isISODate = (re, str) => {
    console.log(str.search(re));
    return str.search(re) != -1 ? true : false;
};
exports.isISODate = isISODate;
const getUnixFromISO = (param) => {
    let ts = moment_1.default(param).valueOf();
    let m = moment_1.default(ts);
    let s = m.format("dddd, MMMM Do YYYY, hh:mm:ss zz");
    console.log(`Retrieving unix ts from iso date: ${param} - ${ts}`);
    return ts.toString();
};
exports.getUnixFromISO = getUnixFromISO;
const getUTCFromISO = (param) => {
    let m = moment_1.default(param);
    let s = m.format("dddd, MMMM Do YYYY, hh:mm:ss zz");
    console.log(`Retrieving utc date from iso: ${param} - ${s}`);
    return s;
};
exports.getUTCFromISO = getUTCFromISO;
const getUTCFromUnix = (param) => {
    let m = moment_1.default.unix(param / 1000);
    let s = m.format("dddd, MMMM Do YYYY, hh:mm:ss zz");
    console.log(`Retrieving utc date from unix: ${param} - ${s}`);
    return s;
};
exports.getUTCFromUnix = getUTCFromUnix;
