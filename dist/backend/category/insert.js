/**
* @api {post} /category/insert category.C.insert
* @apiName category insert
* @apiGroup backend
* @apiVersion 1.0.0
* @apiDescription      the backend category api.
*     category.C.insert.
*     
* @apiPermission admin
* @apiSampleRequest 192.168.2.3:4000/api/backend/category/insert
* @apiParamExample {json} param sample:
* {
*   "cate_name": "dev",
*   "cate_order": "1000"
* }
* @apiParam {String} cate_name his name.
* @apiParam {String} cate_order his order.
* @apiSuccess (200) {Number} code The status of the return.
* @apiSuccess (200) {Object} data The data of the return.
* @apiSuccess (200) {String} message  The message of the return.
* @apiSuccessExample {json} success sample:
* {
*   "code": 200,
*   "message": "create success",
*   "data": "5e093f083d5db1001b83df1f"
* }
* @apiError (-200) {Number} code The status of the return.
* @apiError (-200) {Object} data The data of the return.
* @apiError (-200) {String} message  The message of the return.
* @apiErrorExample {json} fail sample:
* {
*   "code": -200,
*   "message": "please fill on category name and order",
*   "data": ""
* }
*/