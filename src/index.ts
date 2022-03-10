import express, { Request, Response, NextFunction} from 'express';
import cors from 'cors';
import axios from 'axios';


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

// const axios = require('axios');

const aaa = {
    teste: 'testando'
};

const listComments = [];


// app.get('/', async (request: Request, response: Response, next: NextFunction) => {
//     // console.log('TESTE');
//     return response.json({
//         tete: 'aaaa' 
//     })
// });

app.get('/emailContact', async(request: Request, response: Response, next: NextFunction) => {
    const { data } = await axios ('http://localhost:5502/emailContact');
    console.log('teste');
    
    console.log(data);
    
})

app.listen('8080');