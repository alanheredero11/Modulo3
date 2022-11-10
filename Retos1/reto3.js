const fs = require('fs');
const readline = require('readline-sync')

let obj = {
    name: "",
    surname: "",
    age: 0
}



obj.name = readline.question("Escribe tu nombre: ") 
obj.surname = readline.question("Escribe tu apellido: ") 
obj.age = readline.question("Escribe tu edad: ") 

function printRead(obj) {

    let objson = JSON.stringify(obj)
    fs.writeFileSync("Persona.json", objson)

    console.log(JSON.parse(fs.readFileSync("Persona.json")));

}

printRead(obj);