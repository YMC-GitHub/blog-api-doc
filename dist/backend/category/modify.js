/**
* @api {post} /category/modify category.U.modify
* @apiName category modify
* @apiGroup backend
* @apiVersion 1.0.0
* @apiDescription      the backend category api.
*     category.U.modify.
*     
* @apiPermission admin
* @apiSampleRequest 192.168.2.3:4000/api/backend/category/modify
* @apiParamExample {json} param sample:
* {
*   "id": "5dff7ebff7da59001b66995c",
*   "cate_name": "dev",
*   "cate_order": "1000"
* }
* @apiParam {String} id his id.
* @apiParam {String} cate_name his name.
* @apiParam {String} cate_order his order.
* @apiSuccess (200) {Number} code The status of the return.
* @apiSuccess (200) {Object} data The data of the return.
* @apiSuccess (200) {String} message  The message of the return.
* @apiSuccessExample {json} success sample:
* {
*   "code": 200,
*   "message": "update success",
*   "data": null
* }
* @apiError (-200) {Number} code The status of the return.
* @apiError (-200) {Object} data The data of the return.
* @apiError (-200) {String} message  The message of the return.
* @apiErrorExample {json} fail sample:
* {
*   "code": -500,
*   "message": "need to login first",
*   "data": ""
* }
*/