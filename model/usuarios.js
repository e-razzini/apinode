const mongoose = require('mongoose');

const usuarioTable  = new mongoose.Schema({
    nome:{
        type: 'string',
        required: true,
    },
    canal :{
        type:'string',
        required: true,
    },
    data: {
        type:Date,
        required: true,
        default:Date.now
    }
     
})
module.exports = mongoose.model("usuarios",usuarioTable)