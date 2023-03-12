import { question } from "readline-sync";

let doF: number = Number(question("Nhap so do F: "));

let DoC: number = 5/9*(doF - 32);

console.log("So Do C la: " + DoC);