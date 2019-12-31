module.exports = {
    dataParam: {
        "id": '5dff7d24f7da59001b66995b'
    },
    dataSuccess: {
        "code": 200,
        "message": "update success",
        "data": null
    },
    dataFail: {
        "code": -200,
        "message": "",
        "data": ''
    },
    fieldQuery: [
        ['String', 'id', 'article id.'],
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
