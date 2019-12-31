module.exports = {
    dataParam: {
        "id": '5e0948823d5db1001b83df25',
        "cate_name": 'dev',
        "cate_order": '1000',
    },
    dataSuccess: {
        "code": 200,
        "message": "update success",
        "data": null
    },
    dataFail: {
        "code": -500,
        "message": "need to login first",
        "data": ""
    },
    fieldQuery: [
        ['String', 'id', 'his id.'],
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
