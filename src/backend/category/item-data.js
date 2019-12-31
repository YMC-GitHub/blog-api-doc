module.exports = {
    dataParam: {
        "id": '5dff7ebff7da59001b66995c',
    },
    dataSuccess: {
        "code": 200,
        "message": "",
        "data": {
            "_id": "5dff7ebff7da59001b66995c",
            "cate_name": "dev",
            "cate_order": "1000",
            "creat_date": "2019-12-22 22:33:35",
            "update_date": "2019-12-30 12:17:58",
            "is_delete": 1,
            "timestamp": 1577025215,
            "__v": 0,
            "cate_num": 3
        }
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
        ['success:200', 'String', 'cate_name', 'his name.'],
        ['success:200', 'String', 'cate_order', 'his password.'],
        ['success:200', 'String', 'creat_date', 'the time of creating him.'],
        ['success:200', 'String', 'update_date', 'the last time of updating him.'],
        ['success:200', 'Number', 'is_delete', 'deleted?true 1,false 0.'],
        ['success:200', 'Number', 'cate_num', 'his number.']
    ],
    fieldFail: [
        ['-200', 'Number', 'code', 'The status of the return.'],
        ['-200', 'Object', 'data', 'The data of the return.'],
        ['-200', 'String', 'message', ' The message of the return.']
    ]

}
