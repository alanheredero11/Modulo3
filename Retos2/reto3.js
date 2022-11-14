const fs = require('fs/promises');
const readline = require('readline')

let obj = {
    name: "",
    surname: "",
    age: 0
}

function pregunta(pregunta) {
    const question = new Promise((resolve, reject) =>{
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(pregunta, (respuesta) =>{
            resolve(respuesta);
            rl.close();
        });
    });
    return question; 
}
async function WriteandRead(){
    try{
    obj.name = await pregunta("Escribe tu nombre: ");
    obj.surname = await pregunta("Escribe tu apellido: ");
    obj.age = await pregunta("Escribe tu edad: ");
    
    await fs.writeFile("persona.json", JSON.stringify(obj));
    const persona = await fs.readFile("persona.json", "utf-8");
    console.log(JSON.parse(persona));
    }
    catch (error) {
        console.log(error)
    }
}


WriteandRead()
