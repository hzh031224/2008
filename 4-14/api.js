const express = require('express')  //引入模块
const bodyParser = require('body-parser')       //引入 body-parse 用来解析 接收到的post数据
const mysqli = require('mysql')
const app = express()   //调用express
const port = 8080   //服务运行端口


//设置连接参数
var connection = mysqli.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456abc',
    database : '2008a'
});

//设置跨域访问
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-type",);
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use(bodyParser.json())

//用户列表
app.get('/user',function(req,res){
    //向客户端响应数据
    res.send("欢迎访问用户接口")
})

//访问列表
app.get('/list',(req,res)=>{
    res.send("欢迎访问列表接口")
})

app.get('/', (req, res) => {

    const list=[
        {
            userid:1001,
            name:"张三",
            age:11
        },
        {
            userid:1002,
            name:"李四",
            age:22
        },
        {
            userid:1003,
            name:"王五",
            age:33
        }
    ]

    //将数组转化为JSON字符串
  res.send(JSON.stringify(list))
})

//用户注册
app.post('/user/reg',function(req,res){
    //接收post传参
    let user_name=req.user_name
    let email=req.email
    let mobile=""
    let password=""

    let sql = "insert into p_users(\'user_name\',\'email\',\'mobile\',\'password\') values('${user_name}','${email}','${mobile}','${password}')"

    createConnection.query(sql,function(err,result){

    })
})

//登录
app.post('/user/login',function(req,res){
    console.log(req.body)
    let user_name = req.body.user_name      //接收的用户名
    let user_pass = req.body.user_pass      // 接收的密码

    // TODO 查询数据库

    res.send("ok")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})