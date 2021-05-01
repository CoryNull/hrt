import * as moment from "moment"
let process = require("process");

let args = process.argv.slice(2);
let date = "";
let format = "YYYYMMDD h:mm a";
if (args.length >= 1)
    date = args[0]
if (args.length >= 2)
    format = args[1]

let apt = moment(date, format);
let now = moment();
let tests = [
    ["unix dif", now.unix() - apt.unix()],
    ["date", apt.format("dddd, MMMM Do YYYY, h:mm:ss a")],
    ["months", now.diff(apt, "months")],
    ["weeks", now.diff(apt, "weeks")],
    ["days", now.diff(apt, "days")],
    ["hours", now.diff(apt, "hours")],
    ["minutes", now.diff(apt, "minutes")],
    ["seconds", now.diff(apt, "seconds")],
    ["milliseconds", now.diff(apt, "milliseconds")],
];
tests.forEach((test) => console.log(test));