var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end();
}).listen(3000,"127.0.0.1");

console.log('Server running at http://127.0.0.1:3000/');
 
var io = require('socket.io').listen(server);

io.sockets.on('connection',function(socket){

    console.log('socket已连接');
    
    setInterval(function(){
        let n = new Date();
        //向前台发送数据事件
        socket.emit('message',{text:'这是给第一个组件的消息'+ n,test2:'这是给第二个组件的消息'+n})
    },200)
   

    //接收前台数据
    socket.on('send',function(data){
        console.log(data);
    });

    //断开连接监听
    socket.on('disconnect',function(){
        console.log('断开连接');
    });
});


