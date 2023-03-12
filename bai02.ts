import { question } from "readline-sync";

let a: number;
let b: number;

a = Number(question("Nhap so a: "));
b = Number(question("Nhap so b: "));

let c: number = a**2 + b**2;

console.log(c);

