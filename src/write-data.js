//include some libs
const fs = require('fs')
const path = require('path')

//include some models
const Field = require('./model/field')
//include some helper
const {
    toQuery,
    toResonse,
    toSuccess,
    toFail
} = require('./helper/field')

let model = new Field()
model.property('name', 'account')
    .property('value', 'myname')
    .property('type', 'String')
    .property('description', 'user account')
    .registerMethod()

//some query params
const query = []
model.name('account').type('String').value('myname').description('账户')
query.push(toQuery(model))
model.name('password').type('String').value('mypassword').description('密码')
query.push(toQuery(model))
//console.log(query)

//some success fields
let success = []
model.name('code').type('Number').value(0).description('返回代码')
success.push(toSuccess(model, '200'))
model.name('msg').type('String').value('操作成功').description('返回代码')
success.push(toSuccess(model, '200'))
//console.log(success)

//some fail fields
let fail = []
model.name('code').type('Number').value(-1).description('返回代码')
fail.push(toFail(model, '400'))
model.name('msg').type('String').value('登录失败').description('返回描述')
fail.push(toFail(model, '400'))
//console.log(fail)

//paramDesc->fieldQuery
//successDesc->fieldSuccess
//failDesc->fieldFail
let paramDesc = []
query.forEach(v => paramDesc.push([v[0], v[1], v[2]]))
let successDesc = []
success.forEach(v => successDesc.push([v[0], v[1], v[2], v[4]]))
let failDesc = []
fail.forEach(v => failDesc.push([v[0], v[1], v[2], v[4]]))

let toDataParam = function (he) {
    let result
    let { name, value } = he.__data
    result = {
        [name]: value
    }
    return result
}


let dataParam
dataParam = {}
model.name('username').type('String').value('myname').description('user name')
dataParam = Object.assign(dataParam, toDataParam(model))
model.name('password').type('String').value('xx').description('user password')
dataParam = Object.assign(dataParam, toDataParam(model))
model.name('email').type('String').value('hualei0302013@163.com').description('user email')
dataParam = Object.assign(dataParam, toDataParam(model))

let dataSuccess
dataSuccess = {}
//model.name('account').type('String').value('myname').description('账户')
//dataSuccess = Object.assign(dataSuccess, toDataParam(model))
dataSuccess = {
    "code": 200,
    "message": "",
    "data": 'success'//dataSuccess
}

let dataFail
dataFail = {
    "code": -200,
    "message": "",
    "data": ''
}

let fieldQuery
fieldQuery = []
let fieldSuccess
fieldSuccess = [
    ['return', 'Number', 'code', 'The status of the return.'],
    ['return', 'Object', 'data', 'The data of the return.'],
    ['return', 'String', 'message', ' The message of the return.']

    ['200', 'Array', 'list', 'The data of admin list.'],
    ['200', 'Number', 'total', ' the number of total admin.'],
    ['200', 'Number', 'hasNext', 'the number of total page is large than 1?true 1,false 0.'],
    ['200', 'Number', 'hasPrev', ' the number of curruent page is large than 1?true 1,false 0'],

]

let fieldFail
fieldFail = []

let data = {
    dataParam,
    dataSuccess,
    dataFail,
    fieldQuery,
    fieldSuccess,
    fieldFail
}
//console.log(JSON.stringify(data))

//file-usage
//node ./src/sample.js
//npm run docs:be-api
