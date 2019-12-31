/**
* @api {post} /user/login user.O.login
* @apiName user login
* @apiGroup frontend
* @apiVersion 1.0.0
* @apiDescription      the frontend user api.
*     user.O.login.
*     
* @apiPermission none
* @apiSampleRequest 192.168.2.3:4000/api/frontend/user/login
* @apiParamExample {json} param sample:
* {
*   "username": "yemiancheng",
*   "password": "MTIzNDU2NzgK"
* }
* @apiParam {String} username The user name.
* @apiParam {String} password The password.
* @apiSuccess (return) {Number} code The status of the return.
* @apiSuccess (return) {Object} data The data of the return.
* @apiSuccess (return) {String} message  The message of the return.
* @apiSuccessExample {json} success sample:
* {
*   "code": 200,
*   "message": "login success",
*   "data": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZmY3ZDI0ZjdkYTU5MDAxYjY2OTk1YiIsInVzZXJuYW1lIjoieWVtaWFuY2hlbmciLCJpYXQiOjE1Nzc2NTcxOTYsImV4cCI6MTU4MDI0OTE5Nn0.bxgcaLbMZZBaNQTT-_4eKt01jK3-lW5eDyd7nJ6fdLY"
* }
* @apiErrorExample {json} fail sample:
* {
*   "code": -200,
*   "message": "user name or password error",
*   "data": ""
* }
*/