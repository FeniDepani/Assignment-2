const express = require('express');
const app = express();
const fileServerMiddleWare = express.static('public');
app.use('/',fileServerMiddleWare);
app.listen(3000,function(){
    console.log('Feni- App started on port 3000');
});