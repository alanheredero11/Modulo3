let Pro = require ("../professional")

let professional = [new Pro("alan", 02, 02, 02, 02, 02, 02, 02), new Pro("alan", 12, 12, 02, 02, 02, 02, 02), new Pro("alan", 22, 22, 02, 02, 02, 02, 02), new Pro("alan", 32, 32, 02, 02, 02, 02, 02)]

function getStart(request, response)
{
    let respuesta = {error: true, codigo: 200, mensaje: "Punto de Inicio"};
    response.send(respuesta);
}

// function getProList(request, response)
// {
//     let respuesta; 
//     if (professional != null){
//         respuesta = professional;
//     }else{
//         respuesta = { error: true, codigo: 200, mensaje: "El professional no existe"}
//     }
//     response.send(respuesta);
    
// }

function getPro(request, response) {                                                    //no he sabido usar id com /:id, solo se me acurrido esto
    
    let respuesta;
    let id = request.query.id
    

    if(professional[id] != null ){
        respuesta = professional[id]
    }
    else if (id == undefined && professional != null){
        respuesta = professional
    }
    else if (professional[id] == null) {
        respuesta = { error: true, codigo: 200, mensaje: "El professional no existe" }
    }
    else{
        respuesta = { error: true, codigo: 200, mensaje: "No existe ningun listado de professionales" }
    }
    response.send(respuesta);
}


function postPro(request, response)
{
    let respuesta; 
    console.log(request.body)
    
    
    professional.push(new Pro(  request.body.name,
                                request.body.age,
                                request.body.weight,
                                request.body.height,
                                request.body.isRetired,
                                request.body.nationality,
                                request.body.oscarsNumber,
                                request.body.profession
                             ))
        
    respuesta = {error: false, codigo: 200,
                        mensaje: "Professional creado", resultado: professional}
    
    response.send(respuesta);
}


function putPro(request, response)
{
    let respuesta; 
    let id = request.body.id
    if (professional != null)
    {
        professional[id].name                       = request.body.name; 
        professional[id].age                        = request.body.age; 
        professional[id].weight                     = request.body.weight;
        professional[id].height                     = request.body.height;
        professional[id].altura                     = request.body.altura;
        professional[id].isRetired                  = request.body.isRetired;
        professional[id].nationality                = request.body.nationality;
        professional[id].oscarsNumber               = request.body.oscarsNumber;
        professional[id].profession                 = request.body.profession;


        respuesta                   = {error: false, codigo: 200,
                                        mensaje: "Professional Actualizado", resultado: professional};
    }
    else
    {
        respuesta = {error: true, codigo: 200,
            mensaje: "El Professional no existe", resultado: professional};
    };
    response.send(respuesta);
}


function deletePro(request, response)
{
    let respuesta;
    let id = request.body.id;
    if (professional[id] != null)
    {
        professional.splice(id, 1)
        respuesta                = {error: false, codigo: 200,
                                    mensaje: "Professional Borrado", resultado: professional};
    }
    else
    {
        respuesta                = {error: true, codigo: 200, 
                                     mensaje: "El Professional no existe", resultado: professional
}
    }
    response.send(respuesta);
}



module.exports = { getStart, getPro, postPro, putPro, deletePro }