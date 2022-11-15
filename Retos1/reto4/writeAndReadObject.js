let fs = require('fs');

function writeAndRead(path, obj){

    fs.writeFile(path, JSON.stringify(obj), (error) => {
        if (error) {
            console.log(error)
        }
        else {
            console.log("JSON Created")
        }
    })

    fs.readFile(path, "utf-8", (error, data) => {
        if (error) {
            console.log(error)
        }
        else (
            console.log("Content File: " + data)
        )
    })



}

module.exports = { writeAndRead }