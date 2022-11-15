let pro = require ("../professional")

let professional = null; 

function getStart(request, response)
{
    let respuesta = {error: true, codigo: 200, mensaje: "Punto de Inicio"};
    response.send(respuesta);
}

function getPro(request, response)
{
    let respuesta; 
    if (professional != null){
        respuesta = professional;
    }else{
        respuesta = { error: true, codigo: 200, mensaje: "El professional no existe"}
    }
    response.send(respuesta);
}


function postPro(request, response)
{
    let respuesta; 
    console.log(request.body)
    if (professional == null)
    {
        professional = new pro(request.body.nombre, 
                               request.body.edad,
                               request.body.peso,
                               request.body.altura,
                               request.body.retirado,
                               request.body.nacionalidad,
                               request.body.numeroOscars,
                               request.body.profession)
        
        respuesta = {error: false, codigo: 200,
                        mensaje: "Professional creado", resultado: professional}
    }
    else
    {
        respuesta ={error: true, codigo: 200,
                        mensaje: "Professional ya existe", resultado: null}
    };
    response.send(respuesta);
}


function putPro(request, response)
{
    let respuesta; 
    if (professional != null)
    {
        professional.name             = request.body.nombre; 
        professional.weight           = request.body.edad;
        professional.height           = request.body.peso;
        professional.altura           = request.body.altura;
        professional.isRetired        = request.body.retirado;
        professional.nationality      = request.body.nacionalidad;
        professional.oscarsNumber     = request.body.numeroOscars;
        professional.profession       = request.body.profession;


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
    if (professional != null)
    {
        professional         = null; 
        respuesta            = {error: false, codigo: 200,
                                mensaje: "Professional Borrado", resultado: professional};
    }
    else
    {
        respuesta       = {error: true, codigo: 200, 
                             mensaje: "El Professional no existe", resultado: professional
}
    }
    response.send(respuesta);
}



module.exports = { getStart, getPro, postPro, putPro, deletePro }