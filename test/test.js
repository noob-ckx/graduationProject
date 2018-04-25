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
const buffer = [0xff,0xfd];
serialPort.write(buffer,function(err,results){
	if(err)console.log('err ' + err);
	if(results)console.log('results ' + results);
})

var test = [0x18,0x41,0xd0,0x00,0x00,0x00,0x00,0xff,0xff,0x00,0x00,0xff,0xff,0x00,0x00,0xff,0xff,0x00,0x00,0xff,0xff,0x00,0x00,0xff,0xff,0x00,0x00,0xff,0xff,0x00,0x00,0xff,0xff,0x00,0x00,0xff,0xff,0x00,0x00,0xff,0xff,0x00,0x00,0xff,0xff,0x00,0x00,0xff,0xff,0xbb];
console.log(test.length)
serialPort.on('data', function (data) {
	if(data[0] == '0xff' && data[1] == '0xfd'){
		serialPort.write(test,function(err,results){
			if(err)console.log('err ' + err);
			if(results)console.log('results ' + results);
		})
	}
})