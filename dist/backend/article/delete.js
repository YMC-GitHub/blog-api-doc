/**
* @api {get} /article/delete article.D.delete
* @apiName article delete
* @apiGroup backend
* @apiVersion 1.0.0
* @apiDescription      the backend article api.
*     article.D.delete.
*     
* @apiPermission admin
* @apiSampleRequest 192.168.2.3:4000/api/backend/article/delete
* @apiParamExample {json} param sample:
* {
*   "id": "5e0948823d5db1001b83df25"
* }
* @apiParam {String} id his id.
* @apiSuccess (200) {Number} code The status of the return.
* @apiSuccess (200) {Object} data The data of the return.
* @apiSuccess (200) {String} message  The message of the return.
* @apiSuccessExample {json} success sample:
* {
*   "code": 200,
*   "message": "delete success",
*   "data": "success"
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