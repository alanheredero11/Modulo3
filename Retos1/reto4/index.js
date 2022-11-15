let R = require('./readConsole')
let W = require('./writeAndReadObject')

R.readConsole(function(obj){
    W.writeAndRead("Persona.json", obj)
})




