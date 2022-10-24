
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
export {
    login,
    registro,
    pass
}
