let fs = require('fs');

function writeAndRead(path, obj){

    let objson = JSON.stringify(obj);
    fs.writeFileSync(path, objson);

    console.log(JSON.parse(fs.readFileSync(path)))


}

module.exports = { writeAndRead }