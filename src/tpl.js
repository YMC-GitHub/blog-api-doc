//include some libs
const docEengine = require('write-api-doc')
//include some models
const Field = require('./model/field')
//include some helper
const {
    toQuery,
    toResonse,
    toSuccess,
    toFail
} = require('./helper/field')

const genDocStr = function (data, config) {
    let model
    let query
    let {
        dataParam,
        dataSuccess,
        dataFail,
        fieldQuery,
        fieldSuccess,
        fieldFail
    } = data
    let success
    let fail
    let paramDesc
    let successDesc
    let failDesc


    model = new Field()
    model.property('name', 'account')
        .property('value', 'myname')
        .property('type', 'String')
        .property('description', 'user account')
        .registerMethod()

    //some query params
    query = []
    //console.log(fieldQuery)
    fieldQuery.forEach(v => {
        //console.log(v)
        model.name(v[1]).type(v[0]).value(dataParam[v[1]] || '').description(v[2])
        query.push([v[0], v[1], v[2]])
        //note:use next line sometime will take some data err(eg.backend/admin/login)!!!!
        //query.push(toQuery(model))
    })
    //console.log(fieldQuery)

    //some success fields
    success = []
    fieldSuccess.forEach(v => {
        let temp = dataSuccess.data
        model.name(v[2]).type(v[1]).value((temp && temp[v[2]]) | '').description(v[3])
        success.push(toSuccess(model, v[0]))
    })
    //some fail fields
    fail = []
    fieldFail.forEach(v => {
        model.name(v[2]).type(v[1]).value(dataFail[v[2]] || '').description(v[3])
        fail.push(toFail(model, v[0]))
    })


    paramDesc = []
    query.forEach(v => paramDesc.push([v[0], v[1], v[2]]))
    successDesc = []
    success.forEach(v => successDesc.push([v[0], v[1], v[2], v[4]]))
    failDesc = []
    fail.forEach(v => failDesc.push([v[0], v[1], v[2], v[4]]))


    let version = config.version || '1.0.0'
    let host = config.host || '127.0.0.1'
    let port = config.port || '4000'
    let prefix = config.prefix || '/api/backend'
    let url = config.url || '/admin/list'
    let method = config.method || 'get'
    let group = config.group || 'backend'
    let permision = config.permision || 'admin'


    let header = data.header || {}
    //url="/mod/xx/act"
    let arr = url.split('/')
    let index = arr.length - 1
    //start with 1 index now since nodexxx?
    let mod = arr[1]
    let act = arr[index]
    let xx = ''
    if (index >= 3) {
        xx = arr.slice(2, index).join(' ')
        //console.log(mod, xx, act, index)
    }

    let title
    //caculate title
    /*
    if (act === 'list') {
        title = `R-get ${name}`
    } else if (act === 'item') {
        title = `R-get ${name}`
    } else if (act === 'insert') {
        title = `C-create ${mod}`
    } else if (act === 'modify') {
        title = `U-update one ${mod}`
    } else if (act === 'delete') {
        title = `D-delete one ${mod}`
    } else {
        title = `${name}`
    }
    */
    let titleS = mod
    if (index >= 3) {
        titleS = xx
        //console.log(titleS)
    }
    if (act === 'list') {
        title = `${titleS}.R.${act}`
    } else if (act === 'item') {
        title = `${titleS}.R.${act}`
    } else if (act === 'insert') {
        title = `${titleS}.C.${act}`
    } else if (act === 'modify') {
        title = `${titleS}.U.${act}`
    } else if (act === 'recover') {
        title = `${titleS}.U.${act}`
    } else if (act === 'delete') {
        title = `${titleS}.D.${act}`
    } else {
        title = `${titleS}.O.${act}`
    }

    let name = url.replace(/\//g, ' ').trim(' ')
    /*
    if (index >= 3) {
        name = name.replace(new RegExp(`^${mod} `, 'i'), '')
        console.log(name)
    }
    //name = url
    */
    if (index >= 3) {
        url = url.replace(new RegExp(`/${act}$`, 'i'), '')
        //console.log(url)
    }


    //console.log(name)
    //caculate desc
    let desc = config.desc || `
    the ${group} ${mod} api.
    ${title}.
    `
    //echo -n '*'|md5sum|cut -d ' ' -f1
    desc = desc.replace(/\n/g, "\n* ")
    desc = desc.replace(/\n\*/, "")
    let doc = docEengine
        .api([method, url, title])
        .name(name)
        .group(group)
        .version(version)
        .description(desc)
        .header(header)
        .permision(permision)
        //args
        .param(paramDesc)
        .success(successDesc)
        .fail(failDesc)
        //data
        .paramExample(['json', 'param sample', dataParam])
        .successExample(['json', 'success sample', dataSuccess])
        .failExample(['json', 'fail sample', dataFail])
        //request demo
        .sampleRequest(`${host}:${port}${prefix}${url}`)

    return doc
}
module.exports = genDocStr

//file-usage
/*
const tpl = require('./tpl')
const data = require('./sample-data.js')
const config = require('./config')
tpl(data,config).toStr()
*/



