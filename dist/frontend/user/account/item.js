/**
* @api {get} /user/account account.R.item
* @apiName user account item
* @apiGroup frontend
* @apiVersion 1.0.0
* @apiDescription      the frontend user api.
*     account.R.item.
*     
* @apiPermission user
* @apiSampleRequest 192.168.2.3:4000/api/frontend/user/account
* @apiParamExample {json} param sample:
* {
*   "id": "5dff7d24f7da59001b66995b"
* }
* @apiParam {String} id The admin id.
* @apiSuccess (return) {Number} code The status of the return.
* @apiSuccess (return) {Object} data The data of the return.
* @apiSuccess (return) {String} message  The message of the return.
* @apiSuccess (success:200) {String} _id his id.
* @apiSuccess (success:200) {String} username his name.
* @apiSuccess (success:200) {String} password his password.
* @apiSuccess (success:200) {String} email his email.
* @apiSuccess (success:200) {String} creat_date the time of creating him.
* @apiSuccess (success:200) {String} update_date the last time of updating him.
* @apiSuccess (success:200) {Number} is_delete deleted?true 1,false 0.
* @apiSuccessExample {json} success sample:
* {
*   "code": 200,
*   "message": "",
*   "data": {
*     "_id": "5dff77daf7da59001b66995a",
*     "username": "yemiancheng",
*     "password": "836b73f1a0ace8a8298bbae617b9be65",
*     "email": "hualei03042013@126.com",
*     "creat_date": "2019-12-22 22:04:10",
*     "update_date": "2019-12-30 18:24:19",
*     "is_delete": 0,
*     "timestamp": 1577023450,
*     "__v": 0
*   }
* }
* @apiErrorExample {json} fail sample:
* {
*   "code": -200,
*   "message": "",
*   "data": ""
* }
*/