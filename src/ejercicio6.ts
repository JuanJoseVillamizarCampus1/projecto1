import * as readlineSyncs from 'readline-sync'

let cantidadEstudiantes:number = Number(readlineSyncs.question('ingresa la cantidad de personas:'))
let mujeres:number = 0
let hombres: number = 0
let notaMasAlta:number = -1
let notaMasBaja:number = 5.1
let nombreTheBest:string=''
let nameELpeor:string=''
for (let index = 0; index < cantidadEstudiantes; index++) {
    let nombre:string = readlineSyncs.question(`ingresa el nombre de la persona ${index+1}:`)
    let sexo:string = readlineSyncs.question(`ingresa el sexo de ${nombre} M para mujer y H para hombre:`).toUpperCase()
    let nota:number = Number(readlineSyncs.question(`ingresa la nota de 0 a 5 del estudiante: ${nombre}:`))
    console.log(nombre,sexo,nota);

    if(sexo==='M'){
        mujeres++
    }
    else if (sexo==='H') {
        hombres++
    }
    else console.log(`Digite un valor valido para el sexo de la persona`);
    if (nota>notaMasAlta) {
        notaMasAlta=nota
        nombreTheBest = nombre
    }
     if (nota<notaMasBaja){
        notaMasBaja=nota
        nameELpeor=nombre
}    

}
console.log(`Hay ${hombres} hombres y ${mujeres} mujeres`);
console.log(`El estudiante con la mayor nota es: ${nombreTheBest} hombres su nota es ${notaMasAlta}`);
console.log(`El estudiante con la peor nota es: ${nameELpeor} hombres su nota es ${notaMasBaja}`);




