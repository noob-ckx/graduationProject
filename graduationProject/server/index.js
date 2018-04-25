var serialPort = require('./openserialport')
var io = require('./opensocket')

//接受前台数据 
// io.on('test', function (sometest) {
// 	console.log(sometest);
// });

serialPort.on('data', function (data) {
	console.log(data)
	// io.emit('message', data)
})




