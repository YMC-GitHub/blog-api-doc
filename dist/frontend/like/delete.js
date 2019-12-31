/**
* @api {get} /like/delete like.D.delete
* @apiName like delete
* @apiGroup frontend
* @apiVersion 1.0.0
* @apiDescription      the frontend like api.
*     like.D.delete.
*     
* @apiPermission user
* @apiHeader userid 5dff77daf7da59001b66995a
* @apiSampleRequest 192.168.2.3:4000/api/frontend/like/delete
* @apiParamExample {json} param sample:
* {
*   "id": "5dff7d24f7da59001b66995b"
* }
* @apiParam {String} id article id.
* @apiSuccess (200) {Number} code The status of the return.
* @apiSuccess (200) {Object} data The data of the return.
* @apiSuccess (200) {String} message  The message of the return.
* @apiSuccessExample {json} success sample:
* {
*   "code": 200,
*   "message": "update success",
*   "data": null
* }
* @apiErrorExample {json} fail sample:
* {
*   "code": -200,
*   "message": "",
*   "data": ""
* }
*/