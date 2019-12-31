module.exports = {
    dataParam: {
        'id': '5e0948823d5db1001b83df25'
    },
    dataSuccess: {
        "code": 200,
        "message": "update success",
        "data": "success"
    },
    dataFail: {
        "code": -200,
        "message": "user name has been created",
        "data": ""
    },
    fieldQuery: [
        ['String', 'id', 'arcticle id.']
    ],
    fieldSuccess: [
        ['200', 'Number', 'code', 'The status of the return.'],
        ['200', 'Object', 'data', 'The data of the return.'],
        ['200', 'String', 'message', ' The message of the return.'],
    ],
    fieldFail: [
        ['-200', 'Number', 'code', 'The status of the return.'],
        ['-200', 'Object', 'data', 'The data of the return.'],
        ['-200', 'String', 'message', ' The message of the return.']
    ]
}
