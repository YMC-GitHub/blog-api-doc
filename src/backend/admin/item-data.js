module.exports = {
    dataParam: {
        "id": '5dff7d24f7da59001b66995b',
    },

    dataSuccess: {
        "code": 200,
        "message": "",
        "data": {
            "_id": "5dff7d24f7da59001b66995b",
            "username": "yemiancheng",
            "password": "836b73f1a0ace8a8298bbae617b9be65",
            "email": "hualei03042013@163.com",
            "creat_date": "2019-12-22 22:26:44",
            "update_date": "2019-12-22 22:26:44",
            "is_delete": 0,
            "timestamp": 1577024804,
            "__v": 0
        }
    },
    dataFail: {
        "code": -200,
        "message": "",
        "data": ''
    },
    fieldQuery: [
        ['String', 'id', 'The admin id.']
    ],
    fieldSuccess: [
        ['return', 'Number', 'code', 'The status of the return.'],
        ['return', 'Object', 'data', 'The data of the return.'],
        ['return', 'String', 'message', ' The message of the return.'],

        ['success:200', 'String', '_id', 'his id.'],
        ['success:200', 'String', 'username', 'his name.'],
        ['success:200', 'String', 'password', 'his password.'],
        ['success:200', 'String', 'email', 'his email.'],
        ['success:200', 'String', 'creat_date', 'the time of creating him.'],
        ['success:200', 'String', 'update_date', 'the last time of updating him.'],
        ['success:200', 'Number', 'is_delete', 'deleted?true 1,false 0.']
    ],
    fieldFail: [
        ['-200', 'Number', 'code', 'The status of the return.'],
        ['-200', 'Object', 'data', 'The data of the return.'],
        ['-200', 'String', 'message', ' The message of the return.']
    ]

}
