//设置串口
var SerialPort = require("serialport");  //引入模块
var portName = 'COM1'; //定义串口名
var serialPort = new SerialPort(
	"COM1", {
		baudRate: 9600,  //波特率
		dataBits: 8,    //数据位
		parity: 'none',   //奇偶校验
		stopBits: 1,   //停止位0
		flowControl: false,
		autoOpen: false
	}, function (err) {
		console.log(err)
	});
serialPort.open(function (error) {
	if (error) {
		console.log("打开端口" + portName + "错误：" + error);
	} else {
		console.log("打开端口成功，正在监听数据中");
	}
});

//打开后台服务
var http = require('http');
var server = http.createServer(function (req, res) {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end();
});

//打开socket通信
var io = require('socket.io').listen(server);
server.listen(3000, "127.0.0.1");
console.log('Server running at http://127.0.0.1:3000/');

//连接成功监听
io.on('connection', function (client) {
	console.log('socket已连接');
});
//断开连接监听
io.on('disconnect', function () {
	console.log('断开连接');
});
//接受前台数据 
io.on('test', function (sometest) {
	console.log(sometest);
});

serialPort.on('data', function (data) {
	console.log(data)
	io.emit('message', data)
})




