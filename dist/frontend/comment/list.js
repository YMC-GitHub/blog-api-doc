/**
* @api {get} /comment/list comment.R.list
* @apiName comment list
* @apiGroup frontend
* @apiVersion 1.0.0
* @apiDescription      the frontend comment api.
*     comment.R.list.
*     
* @apiPermission user
* @apiSampleRequest 192.168.2.3:4000/api/frontend/comment/list
* @apiParamExample {json} param sample:
* {
*   "id": "5e0948823d5db1001b83df25",
*   "all": 0
* }
* @apiParam {String} id article id.
* @apiParam {Number} all for all comment?0 is true,1 isfasle.
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
*         "_id": "5e0a98043d9e97008fc9948b",
*         "avatar": "",
*         "article_id": "5e0948823d5db1001b83df25",
*         "userid": "5dff77daf7da59001b66995a",
*         "username": "yemiancheng",
*         "email": "",
*         "content": "my first comment",
*         "creat_date": "2019-12-31 08:36:20",
*         "is_delete": 0,
*         "timestamp": 1577752580,
*         "__v": 0
*       },
*       {
*         "_id": "5e09d47c01b007005b17c2f3",
*         "avatar": "",
*         "article_id": "5e0948823d5db1001b83df25",
*         "userid": "5dff77daf7da59001b66995a",
*         "username": "yemiancheng",
*         "email": "",
*         "content": "my first comment",
*         "creat_date": "2019-12-30 18:42:04",
*         "is_delete": 0,
*         "timestamp": 1577702524,
*         "__v": 0
*       }
*     ],
*     "total": 2,
*     "hasNext": 0
*   }
* }
* @apiErrorExample {json} fail sample:
* {
*   "code": -500,
*   "message": "need to login first",
*   "data": ""
* }
*/