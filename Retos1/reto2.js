const fs = require('fs');

let obj = {
    name: "Alan",
    surname: "Hereder",
    age: 22
}

function printRead (obj) {

    let objson = JSON.stringify(obj)
    fs.writeFileSync("Persona.json", objson)
    
    console.log(JSON.parse(fs.readFileSync("Persona.json")));

}

printRead(obj);