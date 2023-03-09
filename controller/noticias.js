const noticiasmodel =require("../models/noticias.js");

/* 
const getNoticias = async () => {
    try {
        const noticias = await noticiasmodel.findAll();
        console.log(noticias)
        return noticias
    } catch (e) {
        console.log(e);
    } 
}; */
const getNoticias = (req, res)=>{
    
    //Listar todos los clientes
    noticiasmodel.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "A ocurrido un error mientras listaba los Clientes."
        });
      });
};


module.exports={getNoticias}

