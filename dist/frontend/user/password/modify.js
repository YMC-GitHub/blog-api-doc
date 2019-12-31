/**
* @api {post} /user/password password.U.modify
* @apiName user password modify
* @apiGroup frontend
* @apiVersion 1.0.0
* @apiDescription      the frontend user api.
*     password.U.modify.
*     
* @apiPermission user
* @apiSampleRequest 192.168.2.3:4000/api/frontend/user/password
* @apiParamExample {json} param sample:
* {
*   "id": "5dff77daf7da59001b66995a",
*   "old_password": "MTIzNDU2NzgK",
*   "password": "MTIzNDU2NzgK"
* }
* @apiParam {String} id user id.
* @apiParam {String} old_password his old password.
* @apiParam {String} password his new password.
* @apiSuccess (200) {Number} code The status of the return.
* @apiSuccess (200) {Object} data The data of the return.
* @apiSuccess (200) {String} message  The message of the return.
* @apiSuccessExample {json} success sample:
* {
*   "code": 200,
*   "message": "update success",
*   "data": null
* }
* @apiErrorExample {json} fail sample:
* {
*   "code": -200,
*   "message": "",
*   "data": ""
* }
*/