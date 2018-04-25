var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'test'
});
 
connection.connect(function(err){
    if(err){
        console.log("数据库打开失败")
    }else{
        console.log("数据库打开成功")
    }
});