/**
* @api {get} /category/item category.R.item
* @apiName category item
* @apiGroup backend
* @apiVersion 1.0.0
* @apiDescription      the backend category api.
*     category.R.item.
*     
* @apiPermission admin
* @apiSampleRequest 192.168.2.3:4000/api/backend/category/item
* @apiParamExample {json} param sample:
* {
*   "id": "5dff7ebff7da59001b66995c"
* }
* @apiParam {String} id his id.
* @apiSuccess (return) {Number} code The status of the return.
* @apiSuccess (return) {Object} data The data of the return.
* @apiSuccess (return) {String} message  The message of the return.
* @apiSuccess (success:200) {String} _id his id.
* @apiSuccess (success:200) {String} cate_name his name.
* @apiSuccess (success:200) {String} cate_order his password.
* @apiSuccess (success:200) {String} creat_date the time of creating him.
* @apiSuccess (success:200) {String} update_date the last time of updating him.
* @apiSuccess (success:200) {Number} is_delete deleted?true 1,false 0.
* @apiSuccess (success:200) {Number} cate_num his number.
* @apiSuccessExample {json} success sample:
* {
*   "code": 200,
*   "message": "",
*   "data": {
*     "_id": "5dff7ebff7da59001b66995c",
*     "cate_name": "dev",
*     "cate_order": "1000",
*     "creat_date": "2019-12-22 22:33:35",
*     "update_date": "2019-12-30 12:17:58",
*     "is_delete": 1,
*     "timestamp": 1577025215,
*     "__v": 0,
*     "cate_num": 3
*   }
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