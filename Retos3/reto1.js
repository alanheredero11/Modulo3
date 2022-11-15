// const http = require("http");

// const server = http.createServer(function (request, response){
//     console.log("Request recived from client");
//     console.log("Header Request: " + request.headers.host);
//     console.log("Request Method: " + request.method);
//     console.log("Request Url: " + request.url);
//     console.log("Request Status Code: " + response.statusCode);
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("Hello from server");
//     response.end();
// });

// server.listen(3000);

//----------------------------------------------------------------------------


const express = require("express");
const app = express()

app.get("/", function(request, response){
    
    console.log("Petición recibida del cliente");
    console.log(request.url);
    console.log(request.method);
    console.log(request.headers["user-agent"]);    
    response.contentType("application/json");
    response.status(200).send({ ok: true, message: "Recibido" });
});
app.get("/bye", function (request, response) {

    console.log("Petición recibida del cliente");
    console.log(request.url);
    console.log(request.method);
    console.log(request.headers["user-agent"]);
    response.contentType("application/json");
    response.status(200).send({ ok: true, message: "Adiós!" });
});

app.listen(4000);