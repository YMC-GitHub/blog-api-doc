/**
* @api {post} /admin/modify admin.U.modify
* @apiName admin modify
* @apiGroup backend
* @apiVersion 1.0.0
* @apiDescription      the backend admin api.
*     admin.U.modify.
*     
* @apiPermission admin
* @apiSampleRequest 192.168.2.3:4000/api/backend/admin/modify
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
* @apiError (-200) {Number} code The status of the return.
* @apiError (-200) {Object} data The data of the return.
* @apiError (-200) {String} message  The message of the return.
* @apiErrorExample {json} fail sample:
* {
*   "code": -200,
*   "message": "",
*   "data": ""
* }
*/