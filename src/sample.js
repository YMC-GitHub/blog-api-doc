//include some libs
const fs = require('fs')
const path = require('path')
const docEengine = require('write-api-doc')
const config = require('./config')

//include some models
const Field = require('./model/field')
//include some helper
const {
    toQuery,
    toResonse,
    toSuccess,
    toFail
} = require('./helper/field')
//include some data to write api doc
let {
    dataParam,
    dataSuccess,
    dataFail,
    fieldQuery,
    fieldSuccess,
    fieldFail
} = require('./sample-data.js')

let model = new Field()
model.property('name', 'account')
    .property('value', 'myname')
    .property('type', 'String')
    .property('description', 'user account')
    .registerMethod()

//some query params
const query = []
//query.push(new Ele('String', 'account', 'myname', '账户'))
/*
model.name('account').type('String').value('myname').description('账户')
query.push(toQuery(model))
model.name('password').type('String').value('mypassword').description('密码')
query.push(toQuery(model))
*/
fieldQuery.forEach(v => {
    model.name(v[1]).type(v[0]).value(dataParam[v[1]] || '').description(v[2])
    query.push(toQuery(model))
})
//console.log(query)

//some success fields
let success = []
//success.push(['200', 'Number', 'code', 0, '返回代码'])
/*
model.name('code').type('Number').value(0).description('返回代码')
success.push(toSuccess(model, '200'))
model.name('msg').type('String').value('操作成功').description('返回代码')
success.push(toSuccess(model, '200'))
*/
fieldSuccess.forEach(v => {
    model.name(v[2]).type(v[1]).value(dataSuccess.data[v[2]] | '').description(v[3])
    success.push(toSuccess(model, v[0]))
})
//console.log(success)

//some fail fields
let fail = []
//fail.push(['400', 'Number', 'code', -1, '返回代码'])
/*
model.name('code').type('Number').value(-1).description('返回代码')
fail.push(toFail(model, '400'))
model.name('msg').type('String').value('登录失败').description('返回描述')
fail.push(toFail(model, '400'))
*/
fieldFail.forEach(v => {
    model.name(v[2]).type(v[1]).value(dataFail[v[2]] || '').description(v[3])
    fail.push(toFail(model, v[0]))
})
//console.log(fail)

let paramDesc = []
query.forEach(v => paramDesc.push([v[0], v[1], v[2]]))
let successDesc = []
success.forEach(v => successDesc.push([v[0], v[1], v[2], v[4]]))
let failDesc = []
fail.forEach(v => failDesc.push([v[0], v[1], v[2], v[4]]))


let version = config.version || '1.0.0'
let host = config.host || '127.0.0.1'
let port = config.port || '4000'
let prefix = config.prefix || '/api/backend'
let url = '/admin/list'
let method = 'get'

let desc = `
the backend api.
get admin list.
`
//echo -n '*'|md5sum|cut -d ' ' -f1
desc = desc.replace(/\n/g, "\n* ")
desc = desc.replace(/\n\*/, "")

let operation = `R-${method}`
let name = url.replace(/\//g, ' ')
let title = `${operation} ${name}`

let doc = docEengine
    .api([method, url, title])
    .name(name)
    .group('backend')
    .version(version)
    .description(desc)
    .header({
        // 'Accept-Encoding': 'Accept-Encoding: gzip, deflate'
    })
    .permision('admin')
    //args
    .param(paramDesc)
    .success(successDesc)
    //.fail(failDesc)
    //data
    .paramExample(['json', 'param sample', dataParam])
    .successExample(['json', 'success sample', dataSuccess])
    .failExample(['json', 'fail sample', dataFail])
    //request demo
    .sampleRequest(`${host}:${port}${prefix}/admin/list`)

//输到窗口
//console.log(doc.toStr())
//写入文件
fs.writeFile(path.join(__dirname, './sample.txt'), doc.toStr(), function () { })

/*
//feat:may be another version for futrue
let req = {}
//in quert 0:type 1:key 2:val 3:desc
query.forEach(v => req[`${v[1]}`] = v[2])
//console.log(req)
let param = []
query.forEach(v => param.push([v[0], v[1], v[3]]))
//console.log(param)
let res = {}
success.forEach(v => res[`${v[2]}`] = v[3])
//console.log(res)
let err = {}
fail.forEach(v => err[`${v[2]}`] = v[3])
//success.splice(3,1)
//fail.splice(3,1)
success.forEach(v => v.splice(3, 1))
fail.forEach(v => v.splice(3, 1))
console.log(err)
console.log(JSON.stringify(param, null, 2))
console.log(JSON.stringify(req, null, 2))
console.log(JSON.stringify(res, null, 2))
console.log(JSON.stringify(err, null, 2))
*/

/*
let a, b, c
a = path.join(__dirname, './sample-tpl.txt')
b = path.resolve('./')
c = path.relative(__dirname, './sample-tpl.txt')
console.log(a, b, c, __dirname)

let THIS_FILE_DIR, THIS_PROJECT_DIR, RUN_SCRIPT_DIR
THIS_FILE_DIR = __dirname
RUN_SCRIPT_DIR = path.resolve('./')
THIS_PROJECT_DIR = path.join(__dirname, '../../../')
//path.relative(__dirname, './sample-tpl.txt')
console.log(THIS_FILE_DIR, RUN_SCRIPT_DIR, THIS_PROJECT_DIR)
*/
//file-usage
//node ./src/sample.js
//npm run docs:be-api
