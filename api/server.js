dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieparser = require('cookie-parser');


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(cookieparser());

// MONGODB CONNECTION
mongoose.connect('mongodb://localhost:27017/schoolManagemnt2025').then(db => {
    console.log('MongoDB is connected Successfully.');
}).catch(e => {
    console.log('MongoDB error:', e);
})

app.get("/test", (req, res) => {
    res.send({id:1, message:"Welcome, it is working"});
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})