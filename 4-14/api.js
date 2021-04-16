const express = require('express')  //引入模块
const app = express()   //调用express
const port = 8080   //服务运行端口

app.get('/user',function(req,res){
    //向客户端响应数据
    res.send("欢迎访问用户接口")
})

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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})