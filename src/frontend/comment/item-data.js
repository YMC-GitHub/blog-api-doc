module.exports = {
    dataParam: {
        "id": '5e0948823d5db1001b83df25',
    },
    dataSuccess: {
        "likes": [],
        "_id": "5e0948823d5db1001b83df25",
        "title": "hellow-world",
        "category": "5dff7ebff7da59001b66995c",
        "category_name": "dev",
        "content": "#hello-world\n\nthis is my first arcticle",
        "html": "<p>#hello-world</p>\n<p>this is my first arcticle</p>\n",
        "visit": 0,
        "like": 0,
        "comment_count": 0,
        "creat_date": "2019-12-30 08:44:50",
        "update_date": "2019-12-30 08:44:50",
        "is_delete": 1,
        "timestamp": 1577666690,
        "__v": 0
    },
    dataFail: {
        "code": -200,
        "message": "args error",
        "data": ""
    },
    fieldQuery: [
        ['String', 'id', 'his id.']
    ],
    fieldSuccess: [
        ['return', 'Number', 'code', 'The status of the return.'],
        ['return', 'Object', 'data', 'The data of the return.'],
        ['return', 'String', 'message', ' The message of the return.'],

        ['success:200', 'String', '_id', 'his id.'],
        ['success:200', 'String', 'title', 'his title.'],
        ['success:200', 'String', 'category', 'his category key.'],
        ['success:200', 'String', 'category_name', 'his category name.'],
        ['success:200', 'String', 'content', 'his content.'],
        ['success:200', 'String', 'html', 'his html content.'],
        ['success:200', 'Number', 'visit', 'how many pepole visit it?'],
        ['success:200', 'Number', 'like', 'how many pepole like it?'],
        ['success:200', 'Number', 'likes', 'who like it?'],
        ['success:200', 'Number', 'comment_count', 'his comment count.'],
        ['success:200', 'String', 'creat_date', 'the time of creating him.'],
        ['success:200', 'String', 'update_date', 'the last time of updating him.'],
        ['success:200', 'Number', 'update_date', 'his timestamp.'],
        ['success:200', 'Number', 'is_delete', 'deleted?true 1,false 0.']
    ],
    fieldFail: [
        ['-200', 'Number', 'code', 'The status of the return.'],
        ['-200', 'Object', 'data', 'The data of the return.'],
        ['-200', 'String', 'message', ' The message of the return.']
    ]

}
