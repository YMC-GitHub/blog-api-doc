module.exports = {
    dataParam: {
        'id': '5e0948823d5db1001b83df25',
        'content': 'my first comment'
    },
    dataSuccess: {
        "code": 200,
        "message": "",
        "data": {
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
        }
    },
    dataFail: {
        "code": -200,
        "message": "please fill on category name and order",
        "data": ""
    },
    fieldQuery: [
        ['String', 'id', 'article id.'],
        ['String', 'content', 'comment content.']
    ],
    fieldSuccess: [
        ['200', 'Number', 'code', 'The status of the return.'],
        ['200', 'Object', 'data', 'The data of the return.'],
        ['200', 'String', 'message', ' The message of the return.'],

        ['success:200', 'String', '_id', 'comment id.'],
        ['success:200', 'String', 'avatar', 'his avatar.'],
        ['success:200', 'String', 'article_id', 'article id.'],
        ['success:200', 'String', 'userid', 'user id.'],
        ['success:200', 'String', 'username', 'user name.'],
        ['success:200', 'String', 'email', 'user email.'],
        ['success:200', 'Number', 'content', 'comment content?'],
        ['success:200', 'String', 'creat_date', 'the time of creating him.'],
        ['success:200', 'Number', 'is_delete', 'deleted?true 1,false 0.']
    ],
    fieldFail: [
        ['-200', 'Number', 'code', 'The status of the return.'],
        ['-200', 'Object', 'data', 'The data of the return.'],
        ['-200', 'String', 'message', ' The message of the return.']
    ]
}
