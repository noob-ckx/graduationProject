var serialPort = require('./openserialport')
var io = require('./opensocket')

//接受前台数据 
// io.on('test', function (sometest) {
// 	console.log(sometest);
// });
// io.emit('message', data)
var test = [];
serialPort.on('data', function (data) {
	console.log(data)
})




