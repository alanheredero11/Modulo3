const fs = require('fs/promises');

let obj = {
    name: "Alan",
    surname: "Hereder",
    age: 22
}

//--------Metodo Async/Await------------

// async function printReadAsync(){

//     try{
//         await fs.writeFile("persona.json", JSON.stringify(obj));
//         const persona = await fs.readFile("persona.json", "utf-8");
//         console.log(JSON.parse(persona));
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// printReadAsync()


//------Metodo Then/Catch----------  Se pueden forzar errores poniendo mal el nombre de file para obserbar que errores da


// fs.writeFile("persona.json", JSON.stringify(obj))
// .then( () => {
//     return fs.readFile("persona.json");
// })
// .then( data => {
//     console.log(JSON.parse(data))
// })
// .catch(err =>{
//     console.log(err)
// })




