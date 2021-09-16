module.exports = app =>{
  const mongoose = require('mongoose')
  mongoose.connect('mongodb://127.0.0.1:27017/node-vue-wzry',{
    useNewUrlParser:true
  })
  mongoose.connection.once('open',()=>{
    console.log('数据库连接成功……')
  })
}