let readline = require('readline-sync');

function readConsole(callback){

    let obj = {
        name: "",
        surname: "",
        age: 0
    }

    obj.name = readline.question("Escribe tu nombre: ");
    obj.surname = readline.question("Escribe tu apellido: ");
    obj.age = readline.question("Escribe tu edad: ");

    callback(obj)
}

module.exports = { readConsole }