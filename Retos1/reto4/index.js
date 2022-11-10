let R = require('./readConsole')
let W = require('./writeAndReadObject')

R.readConsole(console.log)
W.writeAndRead("Persona.json", {nombre: "alan", apellido: "heredero", edad: 22});
