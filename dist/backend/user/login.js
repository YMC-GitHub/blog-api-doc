/**
* @api {post} /user/login user.O.login
* @apiName user login
* @apiGroup backend
* @apiVersion 1.0.0
* @apiDescription      the backend user api.
*     user.O.login.
*     
* @apiPermission admin
* @apiSampleRequest 192.168.2.3:4000/api/backend/user/login
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
* @apiSuccess (success:200) {Number} code The status of the login.
* @apiSuccess (success:200) {Object} data The token of user.
* @apiSuccess (success:200) {String} message  The message of login.
* @apiSuccessExample {json} success sample:
* {
*   "code": 200,
*   "message": "login success",
*   "data": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZmY3ZDI0ZjdkYTU5MDAxYjY2OTk1YiIsInVzZXJuYW1lIjoieWVtaWFuY2hlbmciLCJpYXQiOjE1Nzc2NTcxOTYsImV4cCI6MTU4MDI0OTE5Nn0.bxgcaLbMZZBaNQTT-_4eKt01jK3-lW5eDyd7nJ6fdLY"
* }
* @apiError (-200) {Number} code The status of the return.
* @apiError (-200) {Object} data The data of the return.
* @apiError (-200) {String} message  The message of the return.
* @apiErrorExample {json} fail sample:
* {
*   "code": -200,
*   "message": "user name or password error",
*   "data": ""
* }
*/