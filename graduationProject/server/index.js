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
			console.log("头部校验错误，此次数据丢弃");
			dataArr = [];
			size = 0;
			serialPort.write('something was error',function(err,results){
				if(err)console.log('err ' + err);
				if(results)console.log('results ' + results);
			})
		}else if(check[0] == '0xff' && check[1] == '0xfd'){
			console.log("头部校验正确，开始接收数据包");
			serialPort.write(check,function(err,results){
				if(err)console.log('err ' + err);
				if(results)console.log('results ' + results);
			})
		}
	};
	if(size == 52 || data[data.length-1] == "0xbb"){
		const sendData = Buffer.concat(dataArr,size);
		if(sendData[51] == "0xbb" && size == 52){
			console.log("数据包完整接收，开启子进程");
			// io.emit('message', sendData);
			//开启子进程处理数据，存储数据
			const workerProcess = child_process.fork('./child/index.js');
			// console.log(workerProcess.pid)子进程PID
			workerProcess.send(sendData);
			workerProcess.on('exit', (err) => {
				if(err){
					console.log(err)
				}else{
					console.log("子进程已退出")
				}
			});
		}else if(size != 52){
			console.log("数据包数量错误，丢弃");
		}else if(data[data.length-1] != "0xbb"){
			console.log("尾部校验错误,丢弃");
		}
		dataArr = [];
		size = 0;
	};
})




