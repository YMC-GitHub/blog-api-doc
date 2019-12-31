/**
* @api {post} /comment/insert comment.C.insert
* @apiName comment insert
* @apiGroup frontend
* @apiVersion 1.0.0
* @apiDescription      the frontend comment api.
*     comment.C.insert.
*     
* @apiPermission user
* @apiSampleRequest 192.168.2.3:4000/api/frontend/comment/insert
* @apiParamExample {json} param sample:
* {
*   "id": "5e0948823d5db1001b83df25",
*   "content": "my first comment"
* }
* @apiParam {String} id article id.
* @apiParam {String} content comment content.
* @apiSuccess (200) {Number} code The status of the return.
* @apiSuccess (200) {Object} data The data of the return.
* @apiSuccess (200) {String} message  The message of the return.
* @apiSuccess (success:200) {String} _id comment id.
* @apiSuccess (success:200) {String} avatar his avatar.
* @apiSuccess (success:200) {String} article_id article id.
* @apiSuccess (success:200) {String} userid user id.
* @apiSuccess (success:200) {String} username user name.
* @apiSuccess (success:200) {String} email user email.
* @apiSuccess (success:200) {Number} content comment content?
* @apiSuccess (success:200) {String} creat_date the time of creating him.
* @apiSuccess (success:200) {Number} is_delete deleted?true 1,false 0.
* @apiSuccessExample {json} success sample:
* {
*   "code": 200,
*   "message": "",
*   "data": {
*     "_id": "5e0a98043d9e97008fc9948b",
*     "avatar": "",
*     "article_id": "5e0948823d5db1001b83df25",
*     "userid": "5dff77daf7da59001b66995a",
*     "username": "yemiancheng",
*     "email": "",
*     "content": "my first comment",
*     "creat_date": "2019-12-31 08:36:20",
*     "is_delete": 0,
*     "timestamp": 1577752580,
*     "__v": 0
*   }
* }
* @apiError (-200) {Number} code The status of the return.
* @apiError (-200) {Object} data The data of the return.
* @apiError (-200) {String} message  The message of the return.
* @apiErrorExample {json} fail sample:
* {
*   "code": -200,
*   "message": "please fill on category name and order",
*   "data": ""
* }
*/