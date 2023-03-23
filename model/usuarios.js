const mongoose = require('mongoose');

const usuarioTable  = new mongoose.Schema({

    nome:{
        type: String,
        required: true
    },
    canal :{
        type:String,
        required: true
    },
    data: {
        type:Date,
        required: true,
        default:Date.now
    }
     
})
module.exports = mongoose.model("usuarios",usuarioTable)