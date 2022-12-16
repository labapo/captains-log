//////////SET UP ENVIRONMENT
require("dotenv").config(); // Load ENV Variables
const express = require('express');
const app = express();
const mongoose = require("mongoose");

//////////OTHER REQUIRES
///schema
const Log = require('./models/logs')
//const log = require('./models/logs')
 ///database connections
const MONGO_URI = process.env.MONGO_URI;
/// get rid of depreciate warnings
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
///method override
const methodOverride = require('method-override');




//////////ESTABLISH CONNECTION WITH MONGO
/// connect to mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });  
/// remove deprication warnings
mongoose.set('strictQuery', true);
/// events for when connection opens
mongoose.connection
  .on("open", () => console.log("Connected to Mongoose"))
  .on("close", () => console.log("Disconnected from Mongoose"))
  .on("error", (error) => console.log(error));


//////////SET UP ENGINE
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//////////MIDDLEWARE
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
///method override middleware
app.use(methodOverride('_method'));
///url encoded to get access to the body 
app.use(express.urlencoded({extended:false}));//makes sure that you can get inside of the object and so that its not undefined




//////////ROUTES
app.get('/', (req, res) =>{
    res.send('Captains Log Here!')
})
///index-GET
app.get('/logs', (req, res) =>{
    Log.find({}, (error, allLogs)=>{
        res.render('Index', {log: allLogs})
    })
})
///new - GET
app.get('/logs/new', (req, res) => {
    res.render('New')
})
///create - POST
app.post('/logs', (req, res) => {
    Log.create(req.body, (error, createdLog) =>{
        res.redirect('/logs')
    })
})
///show - GET
app.get('/logs/:id', function (req, res) {
    Log.findById(req.params.id, (err, foundLog) =>{
        res.render('Show', {log: foundLog})
    })
})
///edit - GET
app.get('/logs/:id/edit', (req, res) =>{
    Log.findById(req.params.id, (err, foundLog) =>{
        res.render('Edit', {
            log: foundLog
        })
    })
})
///update - PUT
app.put('logs/:id', (req, res)=>{
    Log.findByIdAndUpdate(req.params._id, req.body, (err, updatedLog) =>{
        res.redirect(`/log/${req.params.id}`)
    })
})
///destroy - DELETE
app.delete('/logs/:id', (req, res) =>{
    Log.findByIdAndRemove(req.params.id, (err, foundLog) =>{
        res.redirect('/logs')
    })
})

//////////listening
app.listen(8000, function () {
    console.log('Listening on port 8000')
})