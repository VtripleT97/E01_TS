import { question } from "readline-sync";

let songuyen: number = Number(question("Nhap so nho hon 1000: "));

let hangdonvi: number = songuyen % 10;
let hangchucvadonvi: number = songuyen % 100;
let hangchuc: number = Math.floor(hangchucvadonvi / 10);
let hangtram: number = Math.floor(songuyen / 100);



console.log("Hang don vi: ",hangdonvi , "\n" ,"Hang chuc: ", hangchuc , "\n" ,"Hang tram: ", hangtram );