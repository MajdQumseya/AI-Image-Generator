const express = require('express');
const path = require('path')
const dotenv = require('dotenv').config();
let port = process.env.PORT || 5000;

const app = express();

//Enable body parser
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//Set static folder
app.use(express.static(path.join(__dirname, 'public')))

app.use('/openai', require('./routes/openaiRoutes'));

app.listen(port, () => {
    console.log('Server online at port: ', port)
});

// app.get('/', (req, res) => {
//     res.send()
// })