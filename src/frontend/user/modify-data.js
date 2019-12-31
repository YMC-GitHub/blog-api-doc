module.exports = {
    dataParam: {
        "id": '5dff7d24f7da59001b66995b',
        "username": 'yemiancheng',
        "password": 'MTIzNDU2NzgK',
        'email': 'hualei03042013@163.com'
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
        ['String', 'email', 'user email.'],
        ['String', 'username', 'The user name.'],
        ['String', 'id', 'user id.'],
        ['String', 'password', 'The password.']
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
