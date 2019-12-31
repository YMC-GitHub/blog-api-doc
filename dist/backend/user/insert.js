/**
* @api {post} /user/insert user.C.insert
* @apiName user insert
* @apiGroup backend
* @apiVersion 1.0.0
* @apiDescription      the backend user api.
*     user.C.insert.
*     
* @apiPermission admin
* @apiSampleRequest 192.168.2.3:4000/api/backend/user/insert
* @apiParamExample {json} param sample:
* {
*   "username": "yemiancheng",
*   "password": "MTIzNDU2NzgK",
*   "email": "hualei03042013@163.com"
* }
* @apiParam {String} email his email.
* @apiParam {String} username his name.
* @apiParam {String} password his password.
* @apiSuccess (200) {Number} code The status of the return.
* @apiSuccess (200) {Object} data The data of the return.
* @apiSuccess (200) {String} message  The message of the return.
* @apiSuccessExample {json} success sample:
* {
*   "code": 200,
*   "message": "create success",
*   "data": "success"
* }
* @apiError (-200) {Number} code The status of the return.
* @apiError (-200) {Object} data The data of the return.
* @apiError (-200) {String} message  The message of the return.
* @apiErrorExample {json} fail sample:
* {
*   "code": -200,
*   "message": "user name has been created",
*   "data": ""
* }
*/