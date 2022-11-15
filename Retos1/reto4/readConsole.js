
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

    rl.question("Escribe tu nombre: ", (awswer) => {
        obj.name = awswer;

        rl.question("Escribe tu apellido: ", (awswer) => {
            obj.surname = awswer;

            rl.question("Escribe tu edad: ", (awswer) => {
                obj.age = awswer;

                callback("Pesona.json", obj)
            })
        })
    })
}

module.exports = { readConsole }