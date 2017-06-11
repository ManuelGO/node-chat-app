var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', ()=>{
	it('should generate correct message object', ()=>{
		var from = 'manuel';
		var text = 'mensaje';
		var message = generateMessage(from, text);

		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({from, text});
	});
});

describe('generateLocationMessage', ()=>{
	it('should generate correct location object', ()=>{
		var from = 'manuel';
		var lat = 1;
		var lng = 2;
		var url = 'https://www.google.com/maps?q=1,2'
		var message = generateLocationMessage(from, lat, lng);

		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({from, url});
	});
});