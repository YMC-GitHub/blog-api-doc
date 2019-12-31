module.exports = {
    dataParam: {
        "cate_name": 'dev',
        "cate_order": '1000',
    },
    dataSuccess: {
        "code": 200,
        "message": "create success",
        "data": "5e093f083d5db1001b83df1f"
    },
    dataFail: {
        "code": -200,
        "message": "please fill on category name and order",
        "data": ""
    },
    fieldQuery: [
        ['String', 'cate_name', 'his name.'],
        ['String', 'cate_order', 'his order.']
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
