//Middleware
const calcular = (req, res) =>{
    const {result} = req.params;

    let total = eval(result).toString();    


    res.json({
        "total" : total
    });
}

export {
    calcular
}
