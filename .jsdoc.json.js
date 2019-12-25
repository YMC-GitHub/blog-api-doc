/**
 * @file 接口和开发文档自动生成配置
 * @author yemiancheng <ymc.github@gmail.com>
 */

'use strict'
let include_file_path
const isProd = process.env.NODE_ENV === 'production'
let pro_file = [
    "./server/index.js",
    "./server/mongoose.js",
    "./server/utils/index.js",
    "./server/routes/index.js",
    "./server/routes/is-admin.js",
    "./server/routes/is-user.js",
    "./server/models/admin.js",
    "./server/models/article.js",
    "./server/models/category.js",
    "./server/models/comment.js",
    "./server/models/user.js"
]
let api_file = [
    "./server/api/backend-article.js",
    "./server/api/backend-category.js",
    "./server/api/backend-article.js",
    /*
    "./server/api/backend-user.js",
    "./server/api/frontend-momment.js"
    "./server/api/frontend-like.js",
    "./server/api/frontend-user.js",
    */
    "./server/api/general.js",
]


if (isProd) {
    include_file_path = pro_file
} else {
    include_file_path = api_file
}


module.exports = {
    //标签
    "tags": {
        //"dictionaries": ["jsdoc","closure"]
        "allowUnknownTags": true
    },
    //"recurseDepth": 10,
    //源码
    "source": {
        "includePattern": ".+\\.js(doc|x)?$",
        "excludePattern": "(^|\\/|\\\\)_",
        "include": include_file_path,
    },
    //when Delete of an unqualified identifier in strict mode when it parses your code,use:
    //"sourceType": "script",
    //插件
    "plugins": [],
    //模板
    "templates": {
        //
        "cleverLinks": false,
        "monospaceLinks": false,
        "default": {
            "outputSourceFiles": true
        }
    },
    //set-cli-here
    "opts": {
        "template": "node_modules/tui-jsdoc-template",  // same as -t templates/default
        "encoding": "utf8",               // same as -e utf8
        "destination": "./docs/src",          // same as -d ./out/
        "recurse": true,                  // same as -r
        //"tutorials": "path/to/tutorials", // same as -u path/to/tutorials
        //"access": "public",
        //"private":true,
    }
};

