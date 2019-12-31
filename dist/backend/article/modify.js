/**
* @api {post} /article/modify article.U.modify
* @apiName article modify
* @apiGroup backend
* @apiVersion 1.0.0
* @apiDescription      the backend article api.
*     article.U.modify.
*     
* @apiPermission admin
* @apiSampleRequest 192.168.2.3:4000/api/backend/article/modify
* @apiParamExample {json} param sample:
* {
*   "id": "5e0948823d5db1001b83df25",
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