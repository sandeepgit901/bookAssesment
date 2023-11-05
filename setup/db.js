const mongoose = require('mongoose');
 const mongoUrl  ="mongodb+srv://deshmukh2867:deshmukh2867@cluster0.ptidhhi.mongodb.net/?retryWrites=true&w=majority"

// const mongoUrl = "mongodb://localhost:27017/Book"

module.exports = ()=>{
    mongoose.connect( `${mongoUrl}` )
    .then(()=>console.log('MongoDB connected successfully'))
    .catch( (e)=>{console.log('error occured ',e.message)})

}
