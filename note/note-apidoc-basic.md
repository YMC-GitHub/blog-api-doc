#install

#run with cmd cli

```sh

#parse only .js and .ts files
apidoc --file-filters ".*\\.js$" -f ".*\\.ts$"

#Location of your project files
apidoc --input myapp/
#where to put to generated documentation
apidoc --output apidoc/
#Use template for output files
apidoc --template mytemplate/
```

#create your own template
```sh
#https://github.com/apidoc/apidoc/tree/master/template
```

#extend with your own parameters

#config with a config file

#define reusable snippets of your documentation
```js
//--------define
/**
 * @apiDefine UserNotFoundError
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */

//--------use
/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiUse UserNotFoundError
 */

/**
 * @api {put} /user/ Modify User information
 * @apiName PutUser
 * @apiGroup User
 *
 * @apiParam {Number} id          Users unique ID.
 * @apiParam {String} [firstname] Firstname of the User.
 * @apiParam {String} [lastname]  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 * @apiUse UserNotFoundError
 */

```

#maintain the documentation for all previous versions and the latest version of the API

#reference
```sh
#https://apidocjs.com/#demo
```

rm -rf yarn.lock
rm -rf yarn*
rm -rf robots*
rm -rf README*
