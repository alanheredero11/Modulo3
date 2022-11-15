const fs = require('fs');
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let obj = {
    name: "",
    surname: "",
    age: 0
}

    rl.question("Escribe tu nombre: ", (awswer) =>
    {  
        obj.name = awswer;

        rl.question("Escribe tu apellido: ", (awswer) => {
            obj.surname = awswer;

            rl.question("Escribe tu edad: ", (awswer) => {
                obj.age = awswer;

                fs.writeFile("Persona.json", JSON.stringify(obj), (error) => {
                    if (error) {
                        console.log(error)
                    }
                    else {
                        console.log("JSON Created")
                        fs.readFile("Persona.json", "utf-8", (error, data) => {
                            console.log("Content File: " + data)
                        })
                    }
                })
            })
        })
    })







