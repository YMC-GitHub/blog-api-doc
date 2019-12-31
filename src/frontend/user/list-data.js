module.exports = {
    dataParam: {
        "page": 1,
        "limit": 10
    },
    dataSuccess: {
        "code": 200,
        "message": "",
        "data": {
            "list": [
                {
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
            ],
            "total": 1,
            "hasNext": 0,
            "hasPrev": 0
        }
    },
    dataFail: {
        "code": -200,
        "message": "",
        "data": ''
    },
    fieldQuery: [
        ['Number', 'page', 'The crruent page id.'],
        ['Number', 'limit', 'The max number of per page.']
    ],
    fieldSuccess: [
        ['return', 'Number', 'code', 'The status of the return.'],
        ['return', 'Object', 'data', 'The data of the return.'],
        ['return', 'String', 'message', ' The message of the return.'],

        ['success:200', 'Array', 'list', 'The data of admin list.'],
        ['success:200', 'Number', 'total', ' the number of total admin.'],
        ['success:200', 'Number', 'hasNext', 'the number of total page is large than 1?true 1,false 0.'],
        ['success:200', 'Number', 'hasPrev', ' the number of curruent page is large than 1?true 1,false 0'],
    ],
    fieldFail: [
        ['-200', 'Number', 'code', 'The status of the return.'],
        ['-200', 'Object', 'data', 'The data of the return.'],
        ['-200', 'String', 'message', ' The message of the return.']
    ]
}
