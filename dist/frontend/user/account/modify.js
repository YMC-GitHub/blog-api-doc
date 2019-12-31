/**
* @api {post} /user/account account.U.modify
* @apiName user account modify
* @apiGroup frontend
* @apiVersion 1.0.0
* @apiDescription      the frontend user api.
*     account.U.modify.
*     
* @apiPermission user
* @apiSampleRequest 192.168.2.3:4000/api/frontend/user/account
* @apiParamExample {json} param sample:
* {
*   "id": "5dff7d24f7da59001b66995b",
*   "username": "yemiancheng",
*   "password": "MTIzNDU2NzgK",
*   "email": "hualei03042013@163.com"
* }
* @apiParam {String} email user email.
* @apiParam {String} username The user name.
* @apiParam {String} id user id.
* @apiParam {String} password The password.
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