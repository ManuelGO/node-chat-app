const path = require('path'); //path no require ser instalado con npm install.
const http = require('http'); //no require ser instalado.
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server); //para comunicarnos cliente-server y viceversa.

app.use(express.static(publicPath)); 


io.on('connection', (socket)=>{
	console.log('New user connected');

	socket.emit('newMessage', {
		from: 'Admin',
		text: 'Welcome to this chat app'
	});

	socket.broadcast.emit('newMessage', {
		from: 'Admin',
		text: 'New user Joined',
		createAt: new Date().getTime()
	});

	socket.on('createMessage', (message)=>{
		console.log('Message', message);
		//io.emit emite un evento a todas las conecciones al serveidor"
		io.emit('newMessage', {
			from: message.from,
			text: message.text,
			createdAt: new Date().getTime()
		});
		//socket.broadcast.emit emite un evento a todas las conexiones, menos al que lo envia.
		// socket.broadcast.emit('newMessage', {
		// 	from: message.from,
		// 	text: message.text,
		// 	createAt: new Date().getTime()
		// });
	});

	socket.on('disconnect', ()=>{
		console.log('user gone');
	})
});


server.listen(port,()=>{
	console.log(`Server running at port: ${port}`);
});

