
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function readConsole(callback){

    let obj = {
        name: "",
        surname: "",
        age: 0
    }

    setTimeout(function () {
        rl.question("Escribe tu nombre: ", (awswer) => {
            obj.name = awswer;
        })
    }, 10)

    setTimeout(function () {
        rl.question("Escribe tu apellido: ", (awswer) => {
            obj.surname = awswer;
        })
    }, 4000)
    setTimeout(function () {
        rl.question("Escribe tu edad: ", (awswer) => {
            obj.age = awswer;
        })
    }, 8000)

    setTimeout(function () {
    callback(obj)
    }, 12000)
}

module.exports = { readConsole }