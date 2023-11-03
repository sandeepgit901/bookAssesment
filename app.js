const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');
const app = express();
const PORT = 3000;

mongoose.connect("mongodb://localhost:27017/Book", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected with mongodb")
    }).catch((err) => {
        console.log(err);
    })

app.use(express.json());
app.use('/api', bookRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
