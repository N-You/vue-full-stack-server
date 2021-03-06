/*
 * @Author: Luqianyou 757628817@qq.com
 * @Description: 数据库连接
 */

const mongoose = require('mongoose');
const config = require('../config');
const log4js = require('../utils/log4');

mongoose.connect(config.URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection;
db.on('error', () => {
  log4js.error( '数据库连接失败！')
});
db.once('open', ()=>{
  log4js.info('数据库连接成功！')
});