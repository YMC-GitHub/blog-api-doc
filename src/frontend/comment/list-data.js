module.exports = {
    dataParam: {
        'id': '5e0948823d5db1001b83df25',
        'all': 0
    },
    dataSuccess: {
        "code": 200,
        "message": "",
        "data": {
            "list": [
                {
                    "_id": "5e0a98043d9e97008fc9948b",
                    "avatar": "",
                    "article_id": "5e0948823d5db1001b83df25",
                    "userid": "5dff77daf7da59001b66995a",
                    "username": "yemiancheng",
                    "email": "",
                    "content": "my first comment",
                    "creat_date": "2019-12-31 08:36:20",
                    "is_delete": 0,
                    "timestamp": 1577752580,
                    "__v": 0
                },
                {
                    "_id": "5e09d47c01b007005b17c2f3",
                    "avatar": "",
                    "article_id": "5e0948823d5db1001b83df25",
                    "userid": "5dff77daf7da59001b66995a",
                    "username": "yemiancheng",
                    "email": "",
                    "content": "my first comment",
                    "creat_date": "2019-12-30 18:42:04",
                    "is_delete": 0,
                    "timestamp": 1577702524,
                    "__v": 0
                }
            ],
            "total": 2,
            "hasNext": 0
        }
    },
    dataFail: {
        "code": -500,
        "message": "need to login first",
        "data": ""
    },
    fieldQuery: [
        ['String', 'id', 'article id.'],
        ['Number', 'all', 'for all comment?0 is true,1 isfasle.']
    ],
    fieldSuccess: [
        ['return', 'Number', 'code', 'The status of the return.'],
        ['return', 'Object', 'data', 'The data of the return.'],
        ['return', 'String', 'message', ' The message of the return.'],

        ['success:200', 'Array', 'list', 'The data of his list.'],
        ['success:200', 'Number', 'total', ' the number of him.'],
        ['success:200', 'Number', 'hasNext', 'the number of total page is large than 1?true 1,false 0.'],
        ['success:200', 'Number', 'hasPrev', ' the number of curruent page is large than 1?true 1,false 0'],

    ],
    fieldFail: [
        ['-200', 'Number', 'code', 'The status of the return.'],
        ['-200', 'Object', 'data', 'The data of the return.'],
        ['-200', 'String', 'message', ' The message of the return.']
    ]
}
