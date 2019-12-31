/**
* @api {get} /like/reset like.O.reset
* @apiName like reset
* @apiGroup frontend
* @apiVersion 1.0.0
* @apiDescription      the frontend like api.
*     like.O.reset.
*     
* @apiPermission user
* @apiSampleRequest 192.168.2.3:4000/api/frontend/like/reset
* @apiParamExample {json} param sample:
* {
*   "id": "5e0948823d5db1001b83df25"
* }
* @apiParam {String} id arcticle id.
* @apiSuccess (200) {Number} code The status of the return.
* @apiSuccess (200) {Object} data The data of the return.
* @apiSuccess (200) {String} message  The message of the return.
* @apiSuccessExample {json} success sample:
* {
*   "code": 200,
*   "message": "update success",
*   "data": "success"
* }
* @apiErrorExample {json} fail sample:
* {
*   "code": -200,
*   "message": "user name has been created",
*   "data": ""
* }
*/