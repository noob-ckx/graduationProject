//设置串口
var SerialPort = require("serialport");  //引入模块
var portName = 'COM2'; //定义串口名
var serialPort = new SerialPort(
	"COM2", {
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
setInterval(function(){
    serialPort.write("0xff",function(err,results){
        console.log('err ' + err);
        console.log('results ' + results);
    })
},1000)
