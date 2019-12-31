module.exports = {
    dataParam: {
        "username": 'yemiancheng',
        "password": 'MTIzNDU2NzgK',
        'email': 'hualei03042013@163.com'
    },
    dataSuccess: {
        "code": 200,
        "message": "create success",
        "data": "success"
    },
    dataFail: {
        "code": -200,
        "message": "user name has been created",
        "data": ""
    },
    fieldQuery: [
        ['String', 'email', 'his email.'],
        ['String', 'username', 'his name.'],
        ['String', 'password', 'his password.']
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
