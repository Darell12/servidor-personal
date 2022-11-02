
//Middleware
const login = (req, res) =>{ 
    
    let mensaje = "Usted se encuentra en la Ruta de Login";
    res.json({
        "mensaje" : mensaje
    });
};

const registro = (req, res) =>{ 
    
    let mensaje = "Usted se encuentra en la Ruta de Registro";
    res.json({
        "mensaje" : mensaje
    });
};

const pass = (req, res) =>{ 
 
    let mensaje = "Usted se encuentra en la Ruta de Olvide-Pass";
    res.json({
        "mensaje" : mensaje
    });
};

const recepcion = (req, res) =>{
    const  parametro = req.params;
    
    const myJSON = JSON.stringify(parametro.param);

    myJSON.replace(" \ ", "")

    let recu = JSON.parse(myJSON)


    res.json({
        "username" :recu
        });
}

const respuesta = (req, res) =>{
   let user = ({
    "nombre" :"usuario",
      "Email" :"email@hamil.com",
      "Password" :"password"
}) 


    res.json({
        "respuesta" : user
    })
}
export {
    login,
    registro,
    pass,
    recepcion,
    respuesta
}
