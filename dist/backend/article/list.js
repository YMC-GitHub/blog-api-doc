/**
* @api {get} /article/list article.R.list
* @apiName article list
* @apiGroup backend
* @apiVersion 1.0.0
* @apiDescription      the backend article api.
*     article.R.list.
*     
* @apiPermission admin
* @apiSampleRequest 192.168.2.3:4000/api/backend/article/list
* @apiParamExample {json} param sample:
* {}
* @apiSuccess (return) {Number} code The status of the return.
* @apiSuccess (return) {Object} data The data of the return.
* @apiSuccess (return) {String} message  The message of the return.
* @apiSuccess (success:200) {Array} list The data of his list.
* @apiSuccess (success:200) {Number} total  the number of him.
* @apiSuccess (success:200) {Number} hasNext the number of total page is large than 1?true 1,false 0.
* @apiSuccess (success:200) {Number} hasPrev  the number of curruent page is large than 1?true 1,false 0
* @apiSuccessExample {json} success sample:
* {
*   "code": 200,
*   "message": "",
*   "data": {
*     "list": [
*       {
*         "likes": [],
*         "_id": "5e0970313d5db1001b83df2a",
*         "title": "hellow-world",
*         "category": "5dff7ebff7da59001b66995c",
*         "category_name": "dev",
*         "content": "#hello-world\n\nthis is my first arcticle",
*         "html": "<p>#hello-world</p>\n<p>this is my first arcticle</p>\n",
*         "visit": 0,
*         "like": 0,
*         "comment_count": 0,
*         "creat_date": "2019-12-30 11:34:09",
*         "update_date": "2019-12-30 11:34:09",
*         "is_delete": 0,
*         "timestamp": 1577676849,
*         "__v": 0
*       }
*     ],
*     "total": 8,
*     "hasNext": 0,
*     "hasPrev": 0
*   }
* }
* @apiError (-200) {Number} code The status of the return.
* @apiError (-200) {Object} data The data of the return.
* @apiError (-200) {String} message  The message of the return.
* @apiErrorExample {json} fail sample:
* {
*   "code": -500,
*   "message": "need to login first",
*   "data": ""
* }
*/