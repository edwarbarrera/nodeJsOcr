const express = require('express');
const app = express();
app.use(express.json());


app.use((req,res, next)=>{
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        next();
         
}
);
app.get('/api/stuff',(req,res, next)=>{
    const stuff= [
        {
            _id: 'hihohohohohihiuhihu',
            tiltle: 'salami', 
            description: 'my first salami',
            imageUrl:'https://smhttp-ssl-48028.nexcesscdn.net/pub/media/amasty/webp/catalog/product/cache/a05b5cb6232e66db94063a0d35d5c493/4/5/45217_ww618_hh800_jpg.webp',
            price: 36000,
            userId: 'masterP',
        },
        {
            _id: 'youplaboum',
            tiltle: 'rosette', 
            description: 'fais peter la rossette',
            imageUrl:'https://smhttp-ssl-48028.nexcesscdn.net/pub/media/amasty/webp/catalog/product/cache/a05b5cb6232e66db94063a0d35d5c493/4/5/45217_ww618_hh800_jpg.webp',
            price: 58000,
            userId: 'masterP',
        },
    ];
    res.status(200).json(stuff);
} )



module.exports = app;