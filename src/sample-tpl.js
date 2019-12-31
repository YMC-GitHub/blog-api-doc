//include some lib
const fs = require('fs')
const path = require('path')
const tpl = require('./tpl')
//include some data to write api doc
const data = require('./sample-data.js')
const config = require('./config')

let doc = tpl(data, config)
//输到窗口
//console.log(doc.toStr())
//写入文件
fs.writeFileSync(path.join(__dirname, './sample-tpl.txt'), doc.toStr())
