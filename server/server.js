const path = require('path'); //path no require ser instalado con npm install.
const express = require('express');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();

app.use(express.static(publicPath));

app.get('/', (req, res)=>{
	res.send('Hola mundo');
});

app.listen(port,()=>{
	console.log(`Server running at port: ${port}`);
});

