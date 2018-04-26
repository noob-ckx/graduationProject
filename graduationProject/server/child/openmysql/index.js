var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'graduationproject'
});


function inserts(newdata,callback){
    connection.connect(function(err){
        if(err){
            console.log("数据库打开失败")
        }else{
            console.log("数据库打开成功")
        }
    });
    const addSql = 'INSERT INTO basedata (power,inputVoltage,inputCurrent,invertInputVoltage,invertInputCurren,SCMPowerSupplyVoltage,SCMPowerSupplyCurrent,aOutputVolatge,aOutputCurrent ) VALUES(?,?,?,?,?,?,?,?,?)';
    const addSqlParams  = [newdata[0],newdata[1],newdata[2],newdata[3],newdata[4],newdata[5],newdata[6],newdata[7],newdata[8]];
    connection.query(addSql,addSqlParams,function (err, result) {
        if(err){
            callback(false)
        }else{
            callback(true)
        }
    });
}
module.exports = inserts;
