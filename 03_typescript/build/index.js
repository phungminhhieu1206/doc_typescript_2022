"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mailer = require("./mailer");
const age = 1;
let newVar;
function sum(a, b) {
    return a + b;
}
const multiply = (a, b) => a * b;
const sendEmail = async ({ email, subject, content, }) => {
    const res = await Mailer.send(email, subject, content);
};
function waitAndDo(callback) {
    setTimeout(() => {
        callback("Oops!");
    }, 1000);
}
class Dog {
    sayHi(name) {
        console.log("Gau gau", name);
    }
}
