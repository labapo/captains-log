const { default: mongoose } = require("mongoose");

const log = [
    {name: 'Test Ship', entry: 'Test Entry', shipIsBroken: true}
];
//const logSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     entry: {
//         type: String,
//         required: true
//     },
//     shipIsBroken: Boolean,

// })

//const Log = mongoose.model('Log',logSchema)
module.exports = log