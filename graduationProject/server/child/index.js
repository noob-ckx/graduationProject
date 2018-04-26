var inserts = require('./openmysql');

process.on('message', (m) => {
    let todel = [];
    const arr = Buffer.from(m.data);
    todel.push(arr[2]);
    for(let i = 3 ; i < 51 ; i += 4){
        todel.push(arr.readFloatBE(i))
    }
    inserts(todel,function(mes){
        if(mes){
            console.log("数据插入成功")
        }else{
            console.log("数据插入失败")
        }
        // fork子线程需手动关闭进程
        process.exit();
    }); 
});
