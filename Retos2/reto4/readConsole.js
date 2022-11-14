let readline = require('readline');

async function readConsole(callback){

    let obj = {
        name: "",
        surname: "",
        age: 0
    }

    obj.name = await pregunta("Escribe tu nombre: ");
    obj.surname = await pregunta("Escribe tu apellido: ");
    obj.age = await pregunta("Escribe tu edad: ");

    callback(obj)
}

function pregunta(pregunta) {
    const question = new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
            rl.close();
        });
    });
    return question;
}

module.exports = { readConsole }