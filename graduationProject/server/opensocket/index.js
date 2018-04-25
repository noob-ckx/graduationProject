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
module.exports = io;