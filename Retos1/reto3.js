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


setTimeout(function (){
    rl.question("Escribe tu nombre: ", (awswer) =>
    {  
        obj.name = awswer; 
    })
}, 10)

setTimeout(function () {
    rl.question("Escribe tu apellido: ", (awswer) => 
    {
        obj.surname = awswer;
    })
}, 4000)
setTimeout(function () {
    rl.question("Escribe tu edad: ", (awswer) => 
    {
        obj.age = awswer;
    })
}, 8000)


setTimeout(function () {

    fs.writeFile("Persona.json", JSON.stringify(obj), (error) => {
        if (error) {
            console.log(error)
        }
        else {
            console.log("JSON Created")
        }
    })

    fs.readFile("Persona.json", "utf-8", (error, data) => {
        if (error) {
            console.log(error)
        }
        else (
            console.log("Content File: " + data)
        )
    })
}, 12000)