module.exports = {
    dataParam: {
        "id": '5dff77daf7da59001b66995a',
        "old_password": 'MTIzNDU2NzgK',
        "password": 'MTIzNDU2NzgK',
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
        ['String', 'id', 'user id.'],
        ['String', 'old_password', 'his old password.'],
        ['String', 'password', 'his new password.']
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
