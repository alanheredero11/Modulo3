let fs = require('fs/promises');

function writeAndRead(path, obj){

    
    fs.writeFile(path, JSON.stringify(obj))
    .then( () =>{
        return fs.readFile(path)
    })
    .then(data => {
        console.log(JSON.parse(data))
    })
    .catch(error => {
        console.log(error)
    })


}

module.exports = { writeAndRead }