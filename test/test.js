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

var test = [1966,2457,3071,2724,2048,2177,2305,2432,2557,2681,2802,2920,3034,3145,3251,3353,3449,3540,3625,3704,3776,3842,3900,3951,3995,4031,4059,4079,4091,4095,4091,4079,4059,4031,3995,3951,3900,3842,3776,3704,3625,3540,3449,3353,3251,3145,3034,2920,2802,2681,2557,2432,2305,2177,2048,1919,1791,1664,1539,1415,1294,1176,1062,951,845,743,647,556,471,392,320,254
,196,145,101,65,37,17,5,1,5,17,37,65,101,145,196,254,320,392,471,556,647,743,845,951,1062,1176,1294,1415,1539,1664,1791,1919,2048,2177,2305,2432,2557,2681,2802,2920,3034,3145,3251,3353,3449,3540,3625,3704,3776,3842,3900,3951,3995,4031,4059,4079,4091,4095,4091,4079,4059,4031,3995,3951,3900,3842,3776,3704,3625,3540,3449,3353,3251,3145,3034,2920,2802,2681,2557,2432,2305,2177,2048,1919,1791,1664,1539,1415,1294,1176,1062,951,845,743,647,556,471,392,320,254
,196,145,101,65,37,17,5,1,5,17,37,65,101,145,196,254,320,392,471,556,647,743,845,951,1062,1176,1294,1415,1539,1664,1791,1919,2048,2177,2305,2432,2557,2681,2802,2920,3034,3145,3251,3353,3449,3540,3625,3704,3776,3842,3900,3951,3995,4031,4059,4079,4091,4095,4091,4079,4059,4031,3995,3951,3900,3842,3776,3704,3625,3540,3449,3353,3251,3145,3034,2920,2802,2681,2557,2432,2305,2177,2048,1919,1791,1664,1539,1415,1294,1176,1062,951,845,743,647,556,471,392,320,254,196,145,101,65,37,17,5,1,5,17,37,65,101,145,196,254,320,392,471,556,647,743,845,951,1062,1176,1294,1415,1539,1664,1791,1919];
var ceshi = [];
var xx = 0;
for(let i = 0; i < test.length;i++){
	let a = i.toString(2);
	if(a.length < 16){
		while(16-a.length){
			a = "0"+a
		}
		xx++;
	};
	let c =a.substr(0,8);
	let b = a.substr(8,15);
	ceshi.push(c,b);
};
ceshi.unshift(0x0f);
ceshi.push(0xbb);
const buffer = [0xff,0xfd];
serialPort.write(buffer,function(err,results){
	if(err)console.log('err ' + err);
	if(results)console.log('results ' + results);
})
// console.log(ceshi.length);


serialPort.on('data', function (data) {
	if(data[0] == '0xff' && data[1] == '0xfd'){
		serialPort.write(ceshi,function(err,results){
			if(err)console.log('err ' + err);
			if(results)console.log('results ' + results);
		})
	}
})
