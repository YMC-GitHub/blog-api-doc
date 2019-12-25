/**
 * write apidoc with js
 * eg:
 * apidoc.host().port().api().name().group().version().desc().permision().header().param().sucess().fail()
 */
const fs = require('fs')
const path = require('path')
// 助手函数
const api = (method, path, title) => `* @api {${method}} ${path} ${title}`
const apiName = name => `* @apiName ${name}`
const apiGroup = group => `* @apiGroup ${group}`
const apiVersion = apiVersion => `* @apiVersion ${apiVersion}`
const apiDescription = apiDescription => `* @apiDescription ${apiDescription}`
const apiPermission = apiPermission => `* @apiPermission ${apiPermission}`
const apiHeader = (key, val) => `* @apiHeader ${key} ${val}`
const apiSampleRequest = url => `* @apiSampleRequest ${url}`
const apiParamExample = (type, desc) => `* @apiParamExample {${type}} ${desc}:`
const apiParam = (type, name, value) => `* @apiParam {${type}} ${name} ${value}`
const apiSuccess = (status, type, name, desc) => `* @apiSuccess (${status}) {${type}} ${name} ${desc}`
const apiSuccessExample = (type, desc) => `* @apiSuccessExample {${type}} ${desc}:`
const apiError = (status, type, name, desc) => `* @apiError (${status}) {${type}} ${name} ${desc}`
const apiErrorExample = (type, desc) => `* @apiErrorExample {${type}} ${desc}:`
const objToJsonStr = obj =>"* "+JSON.stringify(obj, null, 2).split(`\n`).join(`\n* `)

// 数据
class Ele {
    constructor(type = null, key = '', val = '', desc = '') {
        this.type = type
        this.key = key
        this.val = val
        this.desc = desc
    }
}
const query = []
query.push(new Ele('String', 'account', 'myname', '账户'))
query.push(new Ele('String', 'password', 'mypassword', '密码'))
let success = []
success.push(['200', 'Number', 'code', 0, '返回代码'])
success.push(['200', 'String', 'msg', '操作成功', ' 返回描述'])
let fail = []
fail.push(['400', 'Number', 'code', -1, '返回代码'])
fail.push(['400', 'String', 'msg', '登录失败', '返回描述'])

// 接口信息
// ---请求---
let req = {}
query.forEach(v => req[`${v.key}`] = v.val)
let param = []
query.forEach(v => param.push([v.type, v.key, v.desc]))
// ---响应---
let res = {}
success.forEach(v => res[`${v[2]}`] = v[3])
let err = {}
fail.forEach(v => err[`${v[2]}`] = v[3])
//success.splice(3,1)
//fail.splice(3,1)
success.forEach(v => v.splice(3, 1))
fail.forEach(v =>v.splice(3, 1))
console.log(fail)
//----make----
class Apidoc {
    constructor(docId, data = null) {
        this.id = docId
        this.__data = data || {}
    }
    property(key, val = null, def = null) {
        /*
        if (key in this.__data ){
            console.log(`--key:${key}---val:${val}--def:${def}`)
        }
        */
        // set when (key,val)
        if (val || val === '' || val === 0 || val === false) {
            this.__data[key] = val
        }
        // set when (key,null,def)
        else if (def) {
            this.__data[key] = def
            //return def
        }
        // get when (key)
        else {
            return (key in this.__data && this.__data[key]) || null
        }
        return this
    }
    // (new Apidoc('123')).property('host','127.0.0.1').property('port','8080').property('api','/')
    registerMethod() {
        Object.keys(this.__data).forEach(key => {
            if (!(key in this) && this.__data[key]) {
                this[key] = (val, def) => this.property(key, val, def)
            }
        })
        return this
    }
    //after registerMethod(), we can use as below:
    // when set:
    //(new Apidoc('123')).registerMethod().host('127.0.0.1').port(8080').api('/')
    // when get:
    //(new Apidoc('123')).registerMethod().host()
}
/*
//----test----
let doc = (new Apidoc('123'))
//test api-style-01
//set
doc.property('host','127.0.0.1').property('port','8080').property('api','/')
//get
console.log(doc.property('host'))
//test api-style-02
doc.registerMethod()
//set
doc.host('127.0.0.2')
//get
console.log(doc.host())
//or
//console.log(doc.host('127.0.0.2').host())
*/

/*
//-----tips----
//tip 01: return context when setting ,val when getting.
//tip 02: return context when style-01 with param more than 2,val only one.
//tip 03: return context when style-02 with param more than 1,val only zero.
*/

// 模板
let doc = (new Apidoc('123'))
    .property('host', '127.0.0.1')
    .property('port', '8080')
    .property('api', ['post', 'backend/admin/login', 'title@管理人员登录'])
    .property('name', 'name@api/backend/admin/login')
    .property('group', 'group@backend/admin/login')
    .property('version', '1.0.0')
    .property('description', 'desc@backend admin login')
    .property('permision', 'none')
    .property('header', '')
    .property('sampleRequest', '127.0.0.1:8080/api/backend/admin/login')
    .property('param', param)
    .property('success', success)
    .property('fail',  fail)
    .property('paramExample', ['json', '请求例子', req])
    .property('successExample', ['json', '返回样例', res])
    .property('failExample', ['json', '错误返回', err])
    .registerMethod()
//console.log(JSON.stringify(doc, null, 2))
//console.log(doc.property('host'))
//console.log(doc.host())

//console.log(JSON.stringify(param, null, 2))
//console.log(JSON.stringify(req, null, 2))
//console.log(JSON.stringify(res, null, 2))
console.log(JSON.stringify(err, null, 2))


const toStr = apiDocInstance => {
    let result = []
    result.push('/**')
    if (apiDocInstance.api) {
        result.push(api(...apiDocInstance.api()))
    }
    if (apiDocInstance.name) {
        result.push(apiName(apiDocInstance.name()))
    }
    if (apiDocInstance.group) {
        result.push(apiGroup(apiDocInstance.group()))
    }
    if (apiDocInstance.version) {
        result.push(apiVersion(apiDocInstance.version()))
    }
    if (apiDocInstance.description) {
        result.push(apiDescription(apiDocInstance.description()))
    }
    if (apiDocInstance.permission) {
        result.push(apiPermission(apiDocInstance.permission()))
    }
    if (apiDocInstance.header) {
        //console.log(apiDocInstance.header())
        result.push(apiHeader(apiDocInstance.header()))
    }
    if (apiDocInstance.sampleRequest) {
        result.push(apiSampleRequest(apiDocInstance.sampleRequest()))
    }
    if (apiDocInstance.param) {
        //console.log(apiDocInstance.param())
        apiDocInstance.param().forEach(v => {result.push(apiParam(...v))})
    }
    if (apiDocInstance.paramExample) {
        result.push(apiParamExample(...apiDocInstance.paramExample().slice(0, 2)))
        result.push(objToJsonStr(...apiDocInstance.paramExample().slice(2)))
    }
    if (apiDocInstance.successExample) {
        result.push(apiSuccessExample(...apiDocInstance.successExample().slice(0, 2)))
        result.push(objToJsonStr(...apiDocInstance.successExample().slice(2)))
    }
    if (apiDocInstance.success) {
        apiDocInstance.success().forEach(v => {result.push(apiSuccess(...v))})
    }
    if (apiDocInstance.failExample) {
        result.push(apiErrorExample(...apiDocInstance.failExample().slice(0, 2)))
        result.push(objToJsonStr(...apiDocInstance.failExample().slice(2)))
    }
    if (apiDocInstance.fail) {
        apiDocInstance.fail().forEach(v => {result.push(apiError(...v))})
    }
    result.push('*/')
    return result.join('\n')
}
console.log(toStr(doc))

//写入文件
fs.writeFile(path.join(__dirname,'./log.js'),toStr(doc))
exports = {
    api,
    apiName,
    apiGroup,
    apiVersion,
    apiDescription,
    apiPermission,
    apiHeader,
    apiSampleRequest,
    apiParam,
    apiParamExample,
    apiSuccess,
    apiSuccessExample,
    apiErrorExample,
    objToJsonStr
}
