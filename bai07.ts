import { question } from "readline-sync";

let SoX: number = Number(question("Nhap so X: "));
let SoY: number = Number(question("Nhap so Y: "));
// let SoXmuY: number = SoX ** SoY;

let SoXmuY: number = Math.pow(SoX , SoY);
const SoS: number = Math.sqrt(SoXmuY);


console.log(SoS);
