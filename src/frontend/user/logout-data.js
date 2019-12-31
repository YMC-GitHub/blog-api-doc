module.exports = {
    dataParam: {
        /*
        "username": 'yemiancheng',
        "password": 'MTIzNDU2NzgK'
        */
    },
    dataSuccess: {
        "code": 200,
        "message": "logout success",
        "data": ""
    },
    dataFail: {
        /*
            "code": -200,
            "message": "user name or password error",
            "data": ""
        */
    },
    fieldQuery: [
        /*
        ['String', 'username', 'The user name.'],
        ['String', 'password', 'The password.']
        */
    ],
    fieldSuccess: [
        ['return', 'Number', 'code', 'The status of the return.'],
        ['return', 'Object', 'data', 'The data of the return.'],
        ['return', 'String', 'message', ' The message of the return.'],
        /*
        ['success:200', 'Number', 'code', 'The status of the login.'],
        ['success:200', 'Object', 'data', 'The token of user.'],
        ['success:200', 'String', 'message', ' The message of login.']
        */
    ],
    fieldFail: [
        ['-200', 'Number', 'code', 'The status of the return.'],
        ['-200', 'Object', 'data', 'The data of the return.'],
        ['-200', 'String', 'message', ' The message of the return.']
    ]
}
