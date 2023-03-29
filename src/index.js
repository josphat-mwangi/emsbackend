const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/database');
require('dotenv').config({
    path: './.env'
});

const employeeRoute = require('./routes/routes');



const main = async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.urlencoded({ extended: false }));
    app.use(cors());

    app.get('/', (req, res)=>{
        res.send("Hello Its up and running")
    });

    app.use('/api', employeeRoute);

   
    app.use('*', (req, res) => res.status(404).send('404 Not Found'));
    
    app.listen(process.env.PORT || 5000, async () => {
        console.log(`Server Running ${process.env.PORT}`), await db.connect();
    });
};

main();