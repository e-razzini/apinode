const express = require('express');
const router = express.Router();
const Usuarios = require('../model/usuarios');


router.get("/", async function (req, res) {

    try {
        const users = await Usuarios.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message })

    }
   
})
router.get("/:id",validarLogin, async function (req, res) {
  
    res.json(res.Usuarios)
    /*
      try {
      const _id = req.params.id;  
       const getUser = await usuarios.findById(_id); 
       res.json(getUser);  
     } catch (error) {  
        res.status(500).json({ message: error.message});
     } 
    */
    
})

router.post("/", async function (req, res) {

 
    const insertId = new Usuarios({
        nome : req.body.nome,
        canal: req.body.canal
    });
    try {

        const newUser = await insertId.save();
        res.status(201).json(newUser)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

})

router.patch("/:id",validarLogin, function (req, res) {

    res.send("update this id success")
})

router.delete("/:id",validarLogin, async function (req, res) {

    try {
        let deleteID = req.params.id;
        deleteUser = await Usuarios.deleteOne({_id: deleteID});
        if(deleteUser){
            res.status(200).json({message: "Sucesso ao Deletar"});
        }
        
    } catch (error) {
        res.status(400).json({message:message.error});
        
    }
})

async function validarLogin(req, res,next) {
    
    try {
        let _id = req.params.id;
        usuarios = await Usuarios.findById(_id);
        if(usuarios == null){
            return res.status(404).json({message:"não encontrado"})
        }
    } catch (error) {
        return res.status(500).json({message:error.message})
        
    }
    res.Usuarios = usuarios;
    next();
}

module.exports = router;