let R = require('./readConsole')
let W = require('./writeAndReadObject')


async function prueba(){
    await R.readConsole(console.log)
    await W.writeAndRead("Persona.json", {nombre: "alan", apellido: "heredero", edad: 22});
}

prueba()