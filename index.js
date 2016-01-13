var SerialPort = require('serialport').SerialPort;
var express = require('express');
var app = express();
var serialPort = new SerialPort('/dev/tty.Bluetooth-Incoming-Port', {
	baudrate: 9600
});
serialPort.on("open", function() {
	console.log('open');
	serialPort.on('data', function(data) {
		console.log('data received: ' + data);
	});
	serialPort.on('error', function(data) {
		console.log('data error: ' + data);
	});
	serialPort.on('close', function(data) {
		console.log('data close: ' + data);
	});
	serialPort.write("ls\n", function(err, results) {
		console.log('err ' + err);
		console.log('results ' + results);
	});
});
app.get('/', function(req, res) {
	res.send('Hello World!');
});
app.listen(3000, function() {
	console.log('Example app listening on port 3000!');
});
