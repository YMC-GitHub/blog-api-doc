module.exports = {
    dataParam: {
        "id": '5dff7ebff7da59001b66995c'
    },
    dataSuccess: {
        "code": 200,
        "message": "recover success",
        "data": "success"
    },
    dataFail: {
        "code": -500,
        "message": "need to login first",
        "data": ""
    },
    fieldQuery: [
        ['String', 'id', 'his id.'],
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
