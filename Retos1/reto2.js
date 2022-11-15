const fs = require('fs');

let obj = {
    name: "Alan",
    surname: "Heredero",
    age: 22
}
    
fs.writeFile("Persona.json", JSON.stringify(obj), (error) => 
{
    if(error){
        console.log(error)
    }
    else{
        console.log("JSON Created")
    }
})
    
fs.readFile("Persona.json", "utf-8", (error, data) =>
{
    if (error){
        console.log(error)
    }
    else(
        console.log("Content File: " + data)
    )
})

