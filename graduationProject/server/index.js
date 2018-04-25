const serialPort = require('./openserialport');
const io = require('./opensocket');
const fs = require('fs');
//加载子进程模块
const child_process = require('child_process');

var dataArr = [];
var size = 0;
serialPort.on('data', function (data) {
	dataArr.push(data);
	size += data.length;
	if(size == 2){
		const check = Buffer.concat(dataArr,size);
		if(check[0] != '0xff' || check[1] != '0xfd'){
			console.log("数据错误，此次数据丢弃");
			dataArr = [];
			serialPort.write('something was error',function(err,results){
				if(err)console.log('err ' + err);
				if(results)console.log('results ' + results);
			})
		}else if(check[0] == '0xff' && check[1] == '0xfd'){
			console.log("数据可正常使用");
			serialPort.write(check,function(err,results){
				if(err)console.log('err ' + err);
				if(results)console.log('results ' + results);
			})
		}
	};
	if(size == 52 || data[data.length-1] == "0xbb"){
		const sendData = Buffer.concat(dataArr,size);
		if(sendData[51] == "0xbb" && size == 52){
			console.log("数据完整接收");
			io.emit('message', sendData);
			//开启子进程处理数据，存储数据
			// var workerProcess = child_process.spawn('node', ['sql.js', sendData]);
			// workerProcess.stdout.on('data', function (data) {
			// 	console.log('stdout: ' + data);
			//  });
			// workerProcess.on('close', function (code) {
			// 	console.log('子进程已退出，退出码 '+code);
			//  });
		}else if(size != 52){
			console.log("数据不完整");
		}else if(data[data.length-1] != "0xbb"){
			console.log("尾部校验出错");
		}
		dataArr = [];
		size = 0;
	};
})




