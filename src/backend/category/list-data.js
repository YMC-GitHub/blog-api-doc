module.exports = {
    dataParam: {
    },
    dataSuccess: {
        "code": 200,
        "message": "",
        "data": {
            "list": [
                {
                    "_id": "5dff7ebff7da59001b66995c",
                    "cate_name": "dev",
                    "cate_order": "1000",
                    "creat_date": "2019-12-22 22:33:35",
                    "update_date": "2019-12-30 12:17:58",
                    "is_delete": 1,
                    "timestamp": 1577025215,
                    "__v": 0,
                    "cate_num": 3
                },
                {
                    "_id": "5dff7ec9f7da59001b66995d",
                    "cate_name": "pro",
                    "cate_order": "1000",
                    "creat_date": "2019-12-22 22:33:45",
                    "update_date": "2019-12-22 22:33:45",
                    "is_delete": 0,
                    "timestamp": 1577025225,
                    "__v": 0
                },
                {
                    "_id": "5dff7ed0f7da59001b66995e",
                    "cate_name": "tes",
                    "cate_order": "1000",
                    "creat_date": "2019-12-22 22:33:52",
                    "update_date": "2019-12-22 22:33:52",
                    "is_delete": 0,
                    "timestamp": 1577025232,
                    "__v": 0
                },
                {
                    "_id": "5e093f083d5db1001b83df1f",
                    "cate_name": "api",
                    "cate_order": "1000",
                    "creat_date": "2019-12-30 08:04:24",
                    "update_date": "2019-12-30 08:04:24",
                    "is_delete": 0,
                    "timestamp": 1577664264,
                    "__v": 0
                },
                {
                    "_id": "5e093f223d5db1001b83df20",
                    "cate_name": "api",
                    "cate_order": "1000",
                    "creat_date": "2019-12-30 08:04:50",
                    "update_date": "2019-12-30 08:04:50",
                    "is_delete": 0,
                    "timestamp": 1577664290,
                    "__v": 0
                },
                {
                    "_id": "5e093f243d5db1001b83df21",
                    "cate_name": "api",
                    "cate_order": "1000",
                    "creat_date": "2019-12-30 08:04:52",
                    "update_date": "2019-12-30 08:04:52",
                    "is_delete": 0,
                    "timestamp": 1577664292,
                    "__v": 0
                },
                {
                    "_id": "5e096e4f3d5db1001b83df29",
                    "cate_name": "api",
                    "cate_order": "1000",
                    "creat_date": "2019-12-30 11:26:07",
                    "update_date": "2019-12-30 11:26:07",
                    "is_delete": 0,
                    "timestamp": 1577676367,
                    "__v": 0
                },
                {
                    "_id": "5e097a923d5db1001b83df2c",
                    "cate_name": "api",
                    "cate_order": "1000",
                    "creat_date": "2019-12-30 12:18:26",
                    "update_date": "2019-12-30 12:18:26",
                    "is_delete": 0,
                    "timestamp": 1577679506,
                    "__v": 0
                }
            ]
        }
    },
    dataFail: {
        "code": -500,
        "message": "need to login first",
        "data": ""
    },
    fieldQuery: [
    ],
    fieldSuccess: [
        ['return', 'Number', 'code', 'The status of the return.'],
        ['return', 'Object', 'data', 'The data of the return.'],
        ['return', 'String', 'message', ' The message of the return.'],

        ['success:200', 'Array', 'list', 'The data of category list.'],
    ],
    fieldFail: [
        ['-200', 'Number', 'code', 'The status of the return.'],
        ['-200', 'Object', 'data', 'The data of the return.'],
        ['-200', 'String', 'message', ' The message of the return.']
    ]
}
