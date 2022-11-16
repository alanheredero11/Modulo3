
class Professional {

    constructor(name, age, weight, height, isRetired, nationality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
}

function getPro()
{
    console.log("estoyfuncionando")

    let url = "http://localhost:3000/professionales"
    let id = document.getElementById("proID").value
    console.log(typeof id)

    if(id != ""){
        url = "http://localhost:3000/professionales?id=" + id
    }
    else{
        url = "http://localhost:3000/professionales"
    }
    console.log(url)
    let params = 
    {
        headers: { "Content-type": "application/json; charset= UTF-8" },
        method: "GET"
    }

    fetch(url, params)
    .then(function(data)
    {
        console.log(data)
        return data.json()
        
    })
    .then(function(respuesta)
    {
        if(!respuesta.error && id != ""){
            

            document.getElementById("resultado").innerHTML = "<div><p>Name: " + respuesta.name + "</p> <p>Age:  " + respuesta.age + "</p><p>Weight:  " + respuesta.weight + "</p><p>Height:  " + respuesta.height + "</p> <p>Retired:  " + respuesta.isRetired + "</p> <p>Nacionality:  " + respuesta.nationality + "</p> <p>Oscars Number:  " + respuesta.oscarsNumber + "</p> <p>Profession:  " + respuesta.profession + "</p> </div>"
        }
        else if (!respuesta.error && id == ""){
            document.getElementById("resultado").innerHTML = "";
            for (let i = 0; i < respuesta.length; i++) {

                document.getElementById("resultado").innerHTML += "<div><p>Name: " + respuesta[i].name + "</p> <p>Age:  " + respuesta[i].age + "</p><p>Weight:  " + respuesta[i].weight + "</p><p>Height:  " + respuesta[i].height + "</p> <p>Retired:  " + respuesta[i].isRetired + "</p> <p>Nacionality:  " + respuesta[i].nationality + "</p> <p>Oscars Number:  " + respuesta[i].oscarsNumber + "</p> <p>Profession:  " + respuesta[i].profession + "</p> </div>"

            }
        }
        else{
            document.getElementById("resultado").innerHTML = "";
            alert("Professional not found")
            console.log(respuesta.mensaje)
        }
    
    })
    .catch(function(error)
    {
        console.log(error)
    })

}

function postPro()
{
    let pro = new Professional(document.getElementById("proName").value, 
                                document.getElementById("proAge").value, 
                                document.getElementById("proWeight").value, 
                                document.getElementById("proHeight").value, 
                                document.getElementById("proIsRetired").value, 
                                document.getElementById("Nationality").value, 
                                document.getElementById("OscarsNumber").value, 
                                document.getElementById("proProfession").value)
    let url = "http://localhost:3000/professionales"
    let params = 
    {
        headers: { "Content-type": "application/json; charset= UTF-8" },
        body: JSON.stringify(pro),
        method: "POST"
    }

    console.log(params)

    fetch(url, params)
    .then(function (data)
    {
        return data.json()
    })
    .then(function(respuesta)
    {
        if(!respuesta.erro)
        {
            alert("Professional Created")
            console.log(respuesta)
        }
        else{
            alert("Error: " + respuesta.mensaje)
        }
        console.log(respuesta)
    })
    .catch(function(error)
    {
        console.log(error)
    })
}


function putPro() {

    let id = document.getElementById("proID").value
    
    let pro = new Professional(document.getElementById("proName").value,
                                document.getElementById("proAge").value,
                                document.getElementById("proWeight").value,
                                document.getElementById("proHeight").value,
                                document.getElementById("proIsRetired").value,
                                document.getElementById("Nationality").value,
                                document.getElementById("OscarsNumber").value,
                                document.getElementById("proProfession").value)
                            
    pro.id = id
    console.log(pro)

    let url = "http://localhost:3000/professionales"
    let params =
    {
        headers: { "Content-type": "application/json; charset= UTF-8" },
        body:  JSON.stringify(pro),
        method: "PUT"
    }

    console.log(params)

    fetch(url, params)
        .then(function (data) {
            return data.json()
        })
        .then(function (respuesta) {
            if (!respuesta.erro) {
                alert("Professional Update")
                console.log(respuesta)
            }
            else {
                alert("Error: " + respuesta.mensaje)
            }
            console.log(respuesta)
        })
        .catch(function (error) {
            console.log(error)
        })
}

function deletePro() {

    let id = document.getElementById("proID").value

    let url = "http://localhost:3000/professionales"
    let params =
    {
        headers: { "Content-type": "application/json; charset= UTF-8" },
        body: "{\"id\":" + id + "}",
        method: "DELETE"
    }

    console.log(params)

    fetch(url, params)
        .then(function (data) {
            return data.json()
        })
        .then(function (respuesta) {
            if (!respuesta.erro) {
                alert("Professional Deleted")
                console.log(respuesta)
            }
            else {
                alert("Error: " + respuesta.mensaje)
            }
            console.log(respuesta)
        })
        .catch(function (error) {
            console.log(error)
        })
}
