// getting started connecting to mongodb
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/surajKart',{useNewUrlParser:true,useUnifiedTopology:true});

// knowing whether connected or not
const db = mongoose.connection;
//if error
db.on('error', console.error.bind(console, 'connection error:'));
// if succesfull
db.once('open',function(){
    console.log('mongoDB is connected...')
});


// creating schema
var kittySchema=new mongoose.Schema({
    name:String
})

// we can also create a function - but always create it before model
kittySchema.methods.speak = function(){
    var greeting="My name is " + this.name
    console.log(greeting)
}

// model
var kitten = mongoose.model('kitten',kittySchema);

// creating object
var surajKitty = new kitten({name:'suraj'});
// console.log(surajKitty.name)

// calling method 
surajKitty.speak();

// saving data to database
surajKitty.save(function(err,surajKitty){
    if(err) return console.error(err);
    surajKitty.speak();
})

// find()
kitten.find({name:'suraj'},function(err,kittens){
    if(err) return console.error(err);
    console.log(kittens)
})