"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSyncs = __importStar(require("readline-sync"));
let cantidadEstudiantes = Number(readlineSyncs.question('ingresa la cantidad de personas:'));
let mujeres = 0;
let hombres = 0;
let notaMasAlta = -1;
let notaMasBaja = 5.1;
let nombreTheBest = '';
let nameELpeor = '';
for (let index = 0; index < cantidadEstudiantes; index++) {
    let nombre = readlineSyncs.question(`ingresa el nombre de la persona ${index + 1}:`);
    let sexo = readlineSyncs.question(`ingresa el sexo de ${nombre} M para mujer y H para hombre:`).toUpperCase();
    let nota = Number(readlineSyncs.question(`ingresa la nota de 0 a 5 del estudiante: ${nombre}:`));
    console.log(nombre, sexo, nota);
    if (sexo === 'M') {
        mujeres++;
    }
    else if (sexo === 'H') {
        hombres++;
    }
    else
        console.log(`Digite un valor valido para el sexo de la persona`);
    if (nota > notaMasAlta) {
        notaMasAlta = nota;
        nombreTheBest = nombre;
    }
    if (nota < notaMasBaja) {
        notaMasBaja = nota;
        nameELpeor = nombre;
    }
}
console.log(`Hay ${hombres} hombres y ${mujeres} mujeres`);
console.log(`El estudiante con la mayor nota es: ${nombreTheBest} hombres su nota es ${notaMasAlta}`);
console.log(`El estudiante con la peor nota es: ${nameELpeor} hombres su nota es ${notaMasBaja}`);
