//////////SET UP ENVIRONMENT
require("dotenv").config(); // Load ENV Variables
const express = require('express');
const app = express();
const mongoose = require("mongoose");












//////////OTHER REQUIRES
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
pp.use(methodOverride('_method'));
///url encoded to get access to the body 
app.use(express.urlencoded({extended:false}));//makes sure that you can get inside of the object and so that its not undefined




//////////ROUTES





///index-GET
///new - GET
///create - POST
///show - GET
///edit - GET
///update - PUT
///destroy - DELETE


//////////listening
app.listen(8000, function () {
    console.log('Listening on port 8000')
})