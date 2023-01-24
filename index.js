const express = require('express');
const dotenv = require('dotenv').config();
let port = process.env.PORT || 5500;

const app = express();

//Enable body parser
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/openai', require('./routes/openaiRoutes'));

app.listen(port, () => {
    console.log('Server online at port: ', port)
});

// app.get('/', (req, res) => {
//     res.send()
// })