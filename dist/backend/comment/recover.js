/**
* @api {get} /comment/recover comment.U.recover
* @apiName comment recover
* @apiGroup backend
* @apiVersion 1.0.0
* @apiDescription      the backend comment api.
*     comment.U.recover.
*     
* @apiPermission admin
* @apiSampleRequest 192.168.2.3:4000/api/backend/comment/recover
* @apiParamExample {json} param sample:
* {
*   "id": "5e0a98043d9e97008fc9948b"
* }
* @apiParam {String} id his id.
* @apiSuccess (200) {Number} code The status of the return.
* @apiSuccess (200) {Object} data The data of the return.
* @apiSuccess (200) {String} message  The message of the return.
* @apiSuccessExample {json} success sample:
* {
*   "code": 200,
*   "message": "recover success",
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