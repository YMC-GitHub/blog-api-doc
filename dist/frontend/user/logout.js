/**
* @api {post} /user/logout user.O.logout
* @apiName user logout
* @apiGroup frontend
* @apiVersion 1.0.0
* @apiDescription      the frontend user api.
*     user.O.logout.
*     
* @apiPermission user
* @apiSampleRequest 192.168.2.3:4000/api/frontend/user/logout
* @apiParamExample {json} param sample:
* {}
* @apiSuccess (return) {Number} code The status of the return.
* @apiSuccess (return) {Object} data The data of the return.
* @apiSuccess (return) {String} message  The message of the return.
* @apiSuccessExample {json} success sample:
* {
*   "code": 200,
*   "message": "logout success",
*   "data": ""
* }
* @apiErrorExample {json} fail sample:
* {}
*/