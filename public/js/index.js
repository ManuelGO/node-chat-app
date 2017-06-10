var socket = io();//abre una conexion y la mantiene abierta.

socket.on('connect', function(){
	console.log('Connected to server');
});

socket.on('disconnect', function(){
	console.log('Disconnected from server.');
});

socket.on('newMessage', function(message){
	console.log('newMessage:', message);
});