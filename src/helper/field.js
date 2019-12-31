//to query from some  model
let toQuery = function (he) {
    let result
    let { type, name, value, description } = he.__data
    result = [type, name, value, description]
    return result
}
//to response from some  model
let toResonse = function (he, code = '200') {
    let result
    let { type, name, value, description } = he.__data
    result = [code, type, name, value, description]
    return result
}
//to response success from some  model
let toSuccess = function (he, code = '200') {
    let result
    let { type, name, value, description } = he.__data
    result = [code, type, name, value, description]
    return result
}
//to response error from some  model
let toFail = function (he, code = '-200') {
    return toResonse(he, code = '-200')
}

module.exports = {
    toQuery,
    toResonse,
    toSuccess,
    toFail
}
