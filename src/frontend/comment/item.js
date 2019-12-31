//include some lib
const fs = require('fs')
const path = require('path')

let THIS_PROJECT_DIR = path.join(__dirname, '../../../')

const tpl = require(`${THIS_PROJECT_DIR}/src/tpl`)
const mkdirsSync = require(`${THIS_PROJECT_DIR}/src/helper/fs`).mkdirsSync

//include some data to write api doc
const data = require('./item-data.js.js')
const config = require('./config')


let BUILT_INCONFIG = Object.assign(config, {
    prefix: '/api/frontend',
    url: '/article/item',
    method: 'get',
    group: 'frontend',
    permision: 'user',
    header: {
        //'Content-Type': 'application/x-www-form-urlencoded',
        //'Content-Type': 'application/json'
    },
    fieldFail: []
})
let doc = tpl(data, BUILT_INCONFIG)
//输到窗口
//console.log(doc.toStr())


//写入文件
let { group, url } = BUILT_INCONFIG
let file = `${THIS_PROJECT_DIR}dist/${group}${url}.js`


mkdirsSync(path.dirname(file))
fs.writeFileSync(file, doc.toStr())

