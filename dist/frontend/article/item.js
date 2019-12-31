/**
* @api {get} /article/item article.R.item
* @apiName article item
* @apiGroup frontend
* @apiVersion 1.0.0
* @apiDescription      the frontend article api.
*     article.R.item.
*     
* @apiPermission user
* @apiSampleRequest 192.168.2.3:4000/api/frontend/article/item
* @apiParamExample {json} param sample:
* {
*   "id": "5e0948823d5db1001b83df25"
* }
* @apiParam {String} id his id.
* @apiSuccess (return) {Number} code The status of the return.
* @apiSuccess (return) {Object} data The data of the return.
* @apiSuccess (return) {String} message  The message of the return.
* @apiSuccess (success:200) {String} _id his id.
* @apiSuccess (success:200) {String} title his title.
* @apiSuccess (success:200) {String} category his category key.
* @apiSuccess (success:200) {String} category_name his category name.
* @apiSuccess (success:200) {String} content his content.
* @apiSuccess (success:200) {String} html his html content.
* @apiSuccess (success:200) {Number} visit how many pepole visit it?
* @apiSuccess (success:200) {Number} like how many pepole like it?
* @apiSuccess (success:200) {Number} likes who like it?
* @apiSuccess (success:200) {Number} comment_count his comment count.
* @apiSuccess (success:200) {String} creat_date the time of creating him.
* @apiSuccess (success:200) {String} update_date the last time of updating him.
* @apiSuccess (success:200) {Number} update_date his timestamp.
* @apiSuccess (success:200) {Number} is_delete deleted?true 1,false 0.
* @apiSuccessExample {json} success sample:
* {
*   "likes": [],
*   "_id": "5e0948823d5db1001b83df25",
*   "title": "hellow-world",
*   "category": "5dff7ebff7da59001b66995c",
*   "category_name": "dev",
*   "content": "#hello-world\n\nthis is my first arcticle",
*   "html": "<p>#hello-world</p>\n<p>this is my first arcticle</p>\n",
*   "visit": 0,
*   "like": 0,
*   "comment_count": 0,
*   "creat_date": "2019-12-30 08:44:50",
*   "update_date": "2019-12-30 08:44:50",
*   "is_delete": 1,
*   "timestamp": 1577666690,
*   "__v": 0
* }
* @apiError (-200) {Number} code The status of the return.
* @apiError (-200) {Object} data The data of the return.
* @apiError (-200) {String} message  The message of the return.
* @apiErrorExample {json} fail sample:
* {
*   "code": -200,
*   "message": "args error",
*   "data": ""
* }
*/