import { question } from "readline-sync";

let a: number;
let b: number;

a = Number(question("Nhap so A: "));
b = Number(question("Nhap so B: "));

let tong = a + b;
let thuong = a / b;

console.log("a + b = " + tong);
console.log("a / b = " + thuong);
