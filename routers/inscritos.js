const express = require('express');
const router = express.Router();
const usuarios = require('../model/usuarios');


router.get("/", async function (req, res) {

    try {
        const users = await usuarios.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message })

    }
   
})
router.get("/:id", async function (req, res) {
 
      try {
      const _id = req.params.id;  
       const getUser = await usuarios.findById(_id); 
       res.json(getUser);  
     } catch (error) {  
        res.status(500).json({ message: error.message});
     } 

    
})
router.post("/", async function (req, res) {

 
    const insertId = new usuarios({
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

router.patch("/:id", function (req, res) {

    res.send("update this id success")
})
router.delete("/:id", function (req, res) {

    res.send("delete this id success")
})

module.exports = router;