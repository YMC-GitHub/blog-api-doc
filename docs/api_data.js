define({ "api": [
  {
    "type": "post",
    "url": "/admin/insert",
    "title": "admin.C.insert",
    "name": "admin_insert",
    "group": "backend",
    "version": "1.0.0",
    "description": "<p>the backend admin api. admin.C.insert.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "sampleRequest": [
      {
        "url": "192.168.2.3:4000/api/backend/admin/insert"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "param sample:",
          "content": "{\n  \"username\": \"yemiancheng\",\n  \"password\": \"MTIzNDU2NzgK\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The user name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "return": [
          {
            "group": "return",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "return",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "return",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ],
        "success:200": [
          {
            "group": "success:200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the login.</p>"
          },
          {
            "group": "success:200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The token of user.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of login.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success sample:",
          "content": "{\n  \"code\": 200,\n  \"message\": \"login success\",\n  \"data\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZmY3ZDI0ZjdkYTU5MDAxYjY2OTk1YiIsInVzZXJuYW1lIjoieWVtaWFuY2hlbmciLCJpYXQiOjE1Nzc2NTcxOTYsImV4cCI6MTU4MDI0OTE5Nn0.bxgcaLbMZZBaNQTT-_4eKt01jK3-lW5eDyd7nJ6fdLY\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "fail sample:",
          "content": "{\n  \"code\": -200,\n  \"message\": \"user name or password error\",\n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dist/backend/admin/insert.js",
    "groupTitle": "backend"
  },
  {
    "type": "get",
    "url": "/admin/item",
    "title": "admin.R.item",
    "name": "admin_item",
    "group": "backend",
    "version": "1.0.0",
    "description": "<p>the backend admin api. admin.R.item.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "sampleRequest": [
      {
        "url": "192.168.2.3:4000/api/backend/admin/item"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "param sample:",
          "content": "{\n  \"id\": \"5dff7d24f7da59001b66995b\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The admin id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "return": [
          {
            "group": "return",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "return",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "return",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ],
        "success:200": [
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>his id.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>his name.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>his password.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>his email.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "creat_date",
            "description": "<p>the time of creating him.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "update_date",
            "description": "<p>the last time of updating him.</p>"
          },
          {
            "group": "success:200",
            "type": "Number",
            "optional": false,
            "field": "is_delete",
            "description": "<p>deleted?true 1,false 0.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success sample:",
          "content": "{\n  \"code\": 200,\n  \"message\": \"\",\n  \"data\": {\n    \"_id\": \"5dff7d24f7da59001b66995b\",\n    \"username\": \"yemiancheng\",\n    \"password\": \"836b73f1a0ace8a8298bbae617b9be65\",\n    \"email\": \"hualei03042013@163.com\",\n    \"creat_date\": \"2019-12-22 22:26:44\",\n    \"update_date\": \"2019-12-22 22:26:44\",\n    \"is_delete\": 0,\n    \"timestamp\": 1577024804,\n    \"__v\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "-200": [
          {
            "group": "-200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "-200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "-200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "fail sample:",
          "content": "{\n  \"code\": -200,\n  \"message\": \"\",\n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dist/backend/admin/item.js",
    "groupTitle": "backend"
  },
  {
    "type": "post",
    "url": "/admin/list",
    "title": "admin.R.list",
    "name": "admin_list",
    "group": "backend",
    "version": "1.0.0",
    "description": "<p>the backend admin api. admin.R.list.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "sampleRequest": [
      {
        "url": "192.168.2.3:4000/api/backend/admin/list"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "param sample:",
          "content": "{\n  \"page\": 1,\n  \"limit\": 10\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>The crruent page id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>The max number of per page.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "return": [
          {
            "group": "return",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "return",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "return",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ],
        "success:200": [
          {
            "group": "success:200",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>The data of admin list.</p>"
          },
          {
            "group": "success:200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>the number of total admin.</p>"
          },
          {
            "group": "success:200",
            "type": "Number",
            "optional": false,
            "field": "hasNext",
            "description": "<p>the number of total page is large than 1?true 1,false 0.</p>"
          },
          {
            "group": "success:200",
            "type": "Number",
            "optional": false,
            "field": "hasPrev",
            "description": "<p>the number of curruent page is large than 1?true 1,false 0</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success sample:",
          "content": "{\n  \"code\": 200,\n  \"message\": \"\",\n  \"data\": {\n    \"list\": [\n      {\n        \"_id\": \"5dff7d24f7da59001b66995b\",\n        \"username\": \"yemiancheng\",\n        \"password\": \"836b73f1a0ace8a8298bbae617b9be65\",\n        \"email\": \"hualei03042013@163.com\",\n        \"creat_date\": \"2019-12-22 22:26:44\",\n        \"update_date\": \"2019-12-22 22:26:44\",\n        \"is_delete\": 0,\n        \"timestamp\": 1577024804,\n        \"__v\": 0\n      }\n    ],\n    \"total\": 1,\n    \"hasNext\": 0,\n    \"hasPrev\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "-200": [
          {
            "group": "-200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "-200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "-200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "fail sample:",
          "content": "{\n  \"code\": -200,\n  \"message\": \"\",\n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dist/backend/admin/list.js",
    "groupTitle": "backend"
  },
  {
    "type": "post",
    "url": "/admin/modify",
    "title": "admin.U.modify",
    "name": "admin_modify",
    "group": "backend",
    "version": "1.0.0",
    "description": "<p>the backend admin api. admin.U.modify.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "sampleRequest": [
      {
        "url": "192.168.2.3:4000/api/backend/admin/modify"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "param sample:",
          "content": "{\n  \"id\": \"5dff7d24f7da59001b66995b\",\n  \"username\": \"yemiancheng\",\n  \"password\": \"MTIzNDU2NzgK\",\n  \"email\": \"hualei03042013@163.com\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The user name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>user id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success sample:",
          "content": "{\n  \"code\": 200,\n  \"message\": \"update success\",\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "-200": [
          {
            "group": "-200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "-200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "-200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "fail sample:",
          "content": "{\n  \"code\": -200,\n  \"message\": \"\",\n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dist/backend/admin/modify.js",
    "groupTitle": "backend"
  },
  {
    "type": "get",
    "url": "/article/delete",
    "title": "article.D.delete",
    "name": "article_delete",
    "group": "backend",
    "version": "1.0.0",
    "description": "<p>the backend article api. article.D.delete.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "sampleRequest": [
      {
        "url": "192.168.2.3:4000/api/backend/article/delete"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "param sample:",
          "content": "{\n  \"id\": \"5e0948823d5db1001b83df25\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>his id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success sample:",
          "content": "{\n  \"code\": 200,\n  \"message\": \"delete success\",\n  \"data\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "-200": [
          {
            "group": "-200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "-200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "-200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "fail sample:",
          "content": "{\n  \"code\": -500,\n  \"message\": \"need to login first\",\n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dist/backend/article/delete.js",
    "groupTitle": "backend"
  },
  {
    "type": "post",
    "url": "/article/insert",
    "title": "article.C.insert",
    "name": "article_insert",
    "group": "backend",
    "version": "1.0.0",
    "description": "<p>the backend article api. article.C.insert.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "sampleRequest": [
      {
        "url": "192.168.2.3:4000/api/backend/article/insert"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "param sample:",
          "content": "{\n  \"title\": \"hellow-world\",\n  \"category\": \"5dff7ebff7da59001b66995c|dev\",\n  \"content\": \"#hello-world\\nthis is my first arcticle\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>his title.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>his category,format=key|val.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>his content.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ],
        "success:200": [
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>his id.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>his title.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>his category key.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "category_name",
            "description": "<p>his category name.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>his content.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "html",
            "description": "<p>his html content.</p>"
          },
          {
            "group": "success:200",
            "type": "Number",
            "optional": false,
            "field": "visit",
            "description": "<p>how many pepole visit it?</p>"
          },
          {
            "group": "success:200",
            "type": "Number",
            "optional": false,
            "field": "like",
            "description": "<p>how many pepole like it?</p>"
          },
          {
            "group": "success:200",
            "type": "Number",
            "optional": false,
            "field": "likes",
            "description": "<p>who like it?</p>"
          },
          {
            "group": "success:200",
            "type": "Number",
            "optional": false,
            "field": "comment_count",
            "description": "<p>his comment count.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "creat_date",
            "description": "<p>the time of creating him.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "update_date",
            "description": "<p>the last time of updating him.</p>"
          },
          {
            "group": "success:200",
            "type": "Number",
            "optional": false,
            "field": "is_delete",
            "description": "<p>deleted?true 1,false 0.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success sample:",
          "content": "{\n  \"code\": 200,\n  \"message\": \"create success\",\n  \"data\": {\n    \"likes\": [],\n    \"_id\": \"5e0948823d5db1001b83df25\",\n    \"title\": \"hellow-world\",\n    \"category\": \"5dff7ebff7da59001b66995c\",\n    \"category_name\": \"dev\",\n    \"content\": \"#hello-world\\n\\nthis is my first arcticle\",\n    \"html\": \"<p>#hello-world</p>\\n<p>this is my first arcticle</p>\\n\",\n    \"visit\": 0,\n    \"like\": 0,\n    \"comment_count\": 0,\n    \"creat_date\": \"2019-12-30 08:44:50\",\n    \"update_date\": \"2019-12-30 08:44:50\",\n    \"is_delete\": 0,\n    \"timestamp\": 1577666690,\n    \"__v\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "-200": [
          {
            "group": "-200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "-200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "-200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "fail sample:",
          "content": "{\n  \"code\": -200,\n  \"message\": \"please fill on category name and order\",\n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dist/backend/article/insert.js",
    "groupTitle": "backend"
  },
  {
    "type": "get",
    "url": "/article/item",
    "title": "article.R.item",
    "name": "article_item",
    "group": "backend",
    "version": "1.0.0",
    "description": "<p>the backend article api. article.R.item.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "sampleRequest": [
      {
        "url": "192.168.2.3:4000/api/backend/article/item"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "param sample:",
          "content": "{\n  \"id\": \"5e0948823d5db1001b83df25\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>his id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "return": [
          {
            "group": "return",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "return",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "return",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ],
        "success:200": [
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>his id.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>his title.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>his category key.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "category_name",
            "description": "<p>his category name.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>his content.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "html",
            "description": "<p>his html content.</p>"
          },
          {
            "group": "success:200",
            "type": "Number",
            "optional": false,
            "field": "visit",
            "description": "<p>how many pepole visit it?</p>"
          },
          {
            "group": "success:200",
            "type": "Number",
            "optional": false,
            "field": "like",
            "description": "<p>how many pepole like it?</p>"
          },
          {
            "group": "success:200",
            "type": "Number",
            "optional": false,
            "field": "likes",
            "description": "<p>who like it?</p>"
          },
          {
            "group": "success:200",
            "type": "Number",
            "optional": false,
            "field": "comment_count",
            "description": "<p>his comment count.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "creat_date",
            "description": "<p>the time of creating him.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "update_date",
            "description": "<p>the last time of updating him.</p>"
          },
          {
            "group": "success:200",
            "type": "Number",
            "optional": false,
            "field": "is_delete",
            "description": "<p>deleted?true 1,false 0.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success sample:",
          "content": "{\n  \"likes\": [],\n  \"_id\": \"5e0948823d5db1001b83df25\",\n  \"title\": \"hellow-world\",\n  \"category\": \"5dff7ebff7da59001b66995c\",\n  \"category_name\": \"dev\",\n  \"content\": \"#hello-world\\n\\nthis is my first arcticle\",\n  \"html\": \"<p>#hello-world</p>\\n<p>this is my first arcticle</p>\\n\",\n  \"visit\": 0,\n  \"like\": 0,\n  \"comment_count\": 0,\n  \"creat_date\": \"2019-12-30 08:44:50\",\n  \"update_date\": \"2019-12-30 08:44:50\",\n  \"is_delete\": 1,\n  \"timestamp\": 1577666690,\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "-200": [
          {
            "group": "-200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "-200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "-200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "fail sample:",
          "content": "{\n  \"code\": -200,\n  \"message\": \"args error\",\n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dist/backend/article/item.js",
    "groupTitle": "backend"
  },
  {
    "type": "get",
    "url": "/article/list",
    "title": "article.R.list",
    "name": "article_list",
    "group": "backend",
    "version": "1.0.0",
    "description": "<p>the backend article api. article.R.list.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "sampleRequest": [
      {
        "url": "192.168.2.3:4000/api/backend/article/list"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "param sample:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "return": [
          {
            "group": "return",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "return",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "return",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ],
        "success:200": [
          {
            "group": "success:200",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>The data of his list.</p>"
          },
          {
            "group": "success:200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>the number of him.</p>"
          },
          {
            "group": "success:200",
            "type": "Number",
            "optional": false,
            "field": "hasNext",
            "description": "<p>the number of total page is large than 1?true 1,false 0.</p>"
          },
          {
            "group": "success:200",
            "type": "Number",
            "optional": false,
            "field": "hasPrev",
            "description": "<p>the number of curruent page is large than 1?true 1,false 0</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success sample:",
          "content": "{\n  \"code\": 200,\n  \"message\": \"\",\n  \"data\": {\n    \"list\": [\n      {\n        \"likes\": [],\n        \"_id\": \"5e0970313d5db1001b83df2a\",\n        \"title\": \"hellow-world\",\n        \"category\": \"5dff7ebff7da59001b66995c\",\n        \"category_name\": \"dev\",\n        \"content\": \"#hello-world\\n\\nthis is my first arcticle\",\n        \"html\": \"<p>#hello-world</p>\\n<p>this is my first arcticle</p>\\n\",\n        \"visit\": 0,\n        \"like\": 0,\n        \"comment_count\": 0,\n        \"creat_date\": \"2019-12-30 11:34:09\",\n        \"update_date\": \"2019-12-30 11:34:09\",\n        \"is_delete\": 0,\n        \"timestamp\": 1577676849,\n        \"__v\": 0\n      }\n    ],\n    \"total\": 8,\n    \"hasNext\": 0,\n    \"hasPrev\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "-200": [
          {
            "group": "-200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "-200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "-200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "fail sample:",
          "content": "{\n  \"code\": -500,\n  \"message\": \"need to login first\",\n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dist/backend/article/list.js",
    "groupTitle": "backend"
  },
  {
    "type": "post",
    "url": "/article/modify",
    "title": "article.U.modify",
    "name": "article_modify",
    "group": "backend",
    "version": "1.0.0",
    "description": "<p>the backend article api. article.U.modify.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "sampleRequest": [
      {
        "url": "192.168.2.3:4000/api/backend/article/modify"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "param sample:",
          "content": "{\n  \"id\": \"5e0948823d5db1001b83df25\",\n  \"cate_name\": \"dev\",\n  \"cate_order\": \"1000\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>his id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cate_name",
            "description": "<p>his name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cate_order",
            "description": "<p>his order.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success sample:",
          "content": "{\n  \"code\": 200,\n  \"message\": \"update success\",\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "-200": [
          {
            "group": "-200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "-200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "-200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "fail sample:",
          "content": "{\n  \"code\": -500,\n  \"message\": \"need to login first\",\n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dist/backend/article/modify.js",
    "groupTitle": "backend"
  },
  {
    "type": "get",
    "url": "/article/recover",
    "title": "article.U.recover",
    "name": "article_recover",
    "group": "backend",
    "version": "1.0.0",
    "description": "<p>the backend article api. article.U.recover.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "sampleRequest": [
      {
        "url": "192.168.2.3:4000/api/backend/article/recover"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "param sample:",
          "content": "{\n  \"id\": \"5e0948823d5db1001b83df25\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>his id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success sample:",
          "content": "{\n  \"code\": 200,\n  \"message\": \"recover success\",\n  \"data\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "-200": [
          {
            "group": "-200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "-200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "-200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "fail sample:",
          "content": "{\n  \"code\": -500,\n  \"message\": \"need to login first\",\n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dist/backend/article/recover.js",
    "groupTitle": "backend"
  },
  {
    "type": "get",
    "url": "/category/delete",
    "title": "category.D.delete",
    "name": "category_delete",
    "group": "backend",
    "version": "1.0.0",
    "description": "<p>the backend category api. category.D.delete.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "sampleRequest": [
      {
        "url": "192.168.2.3:4000/api/backend/category/delete"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "param sample:",
          "content": "{\n  \"id\": \"5dff7ebff7da59001b66995c\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>his id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success sample:",
          "content": "{\n  \"code\": 200,\n  \"message\": \"delete success\",\n  \"data\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "-200": [
          {
            "group": "-200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "-200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "-200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "fail sample:",
          "content": "{\n  \"code\": -500,\n  \"message\": \"need to login first\",\n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dist/backend/category/delete.js",
    "groupTitle": "backend"
  },
  {
    "type": "post",
    "url": "/category/insert",
    "title": "category.C.insert",
    "name": "category_insert",
    "group": "backend",
    "version": "1.0.0",
    "description": "<p>the backend category api. category.C.insert.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "sampleRequest": [
      {
        "url": "192.168.2.3:4000/api/backend/category/insert"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "param sample:",
          "content": "{\n  \"cate_name\": \"dev\",\n  \"cate_order\": \"1000\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cate_name",
            "description": "<p>his name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cate_order",
            "description": "<p>his order.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success sample:",
          "content": "{\n  \"code\": 200,\n  \"message\": \"create success\",\n  \"data\": \"5e093f083d5db1001b83df1f\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "-200": [
          {
            "group": "-200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "-200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "-200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "fail sample:",
          "content": "{\n  \"code\": -200,\n  \"message\": \"please fill on category name and order\",\n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dist/backend/category/insert.js",
    "groupTitle": "backend"
  },
  {
    "type": "get",
    "url": "/category/item",
    "title": "category.R.item",
    "name": "category_item",
    "group": "backend",
    "version": "1.0.0",
    "description": "<p>the backend category api. category.R.item.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "sampleRequest": [
      {
        "url": "192.168.2.3:4000/api/backend/category/item"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "param sample:",
          "content": "{\n  \"id\": \"5dff7ebff7da59001b66995c\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>his id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "return": [
          {
            "group": "return",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "return",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "return",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ],
        "success:200": [
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>his id.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "cate_name",
            "description": "<p>his name.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "cate_order",
            "description": "<p>his password.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "creat_date",
            "description": "<p>the time of creating him.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "update_date",
            "description": "<p>the last time of updating him.</p>"
          },
          {
            "group": "success:200",
            "type": "Number",
            "optional": false,
            "field": "is_delete",
            "description": "<p>deleted?true 1,false 0.</p>"
          },
          {
            "group": "success:200",
            "type": "Number",
            "optional": false,
            "field": "cate_num",
            "description": "<p>his number.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success sample:",
          "content": "{\n  \"code\": 200,\n  \"message\": \"\",\n  \"data\": {\n    \"_id\": \"5dff7ebff7da59001b66995c\",\n    \"cate_name\": \"dev\",\n    \"cate_order\": \"1000\",\n    \"creat_date\": \"2019-12-22 22:33:35\",\n    \"update_date\": \"2019-12-30 12:17:58\",\n    \"is_delete\": 1,\n    \"timestamp\": 1577025215,\n    \"__v\": 0,\n    \"cate_num\": 3\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "-200": [
          {
            "group": "-200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "-200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "-200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "fail sample:",
          "content": "{\n  \"code\": -200,\n  \"message\": \"args error\",\n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dist/backend/category/item.js",
    "groupTitle": "backend"
  },
  {
    "type": "get",
    "url": "/category/list",
    "title": "category.R.list",
    "name": "category_list",
    "group": "backend",
    "version": "1.0.0",
    "description": "<p>the backend category api. category.R.list.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "sampleRequest": [
      {
        "url": "192.168.2.3:4000/api/backend/category/list"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "param sample:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "return": [
          {
            "group": "return",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "return",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "return",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ],
        "success:200": [
          {
            "group": "success:200",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>The data of category list.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success sample:",
          "content": "{\n  \"code\": 200,\n  \"message\": \"\",\n  \"data\": {\n    \"list\": [\n      {\n        \"_id\": \"5dff7ebff7da59001b66995c\",\n        \"cate_name\": \"dev\",\n        \"cate_order\": \"1000\",\n        \"creat_date\": \"2019-12-22 22:33:35\",\n        \"update_date\": \"2019-12-30 12:17:58\",\n        \"is_delete\": 1,\n        \"timestamp\": 1577025215,\n        \"__v\": 0,\n        \"cate_num\": 3\n      },\n      {\n        \"_id\": \"5dff7ec9f7da59001b66995d\",\n        \"cate_name\": \"pro\",\n        \"cate_order\": \"1000\",\n        \"creat_date\": \"2019-12-22 22:33:45\",\n        \"update_date\": \"2019-12-22 22:33:45\",\n        \"is_delete\": 0,\n        \"timestamp\": 1577025225,\n        \"__v\": 0\n      },\n      {\n        \"_id\": \"5dff7ed0f7da59001b66995e\",\n        \"cate_name\": \"tes\",\n        \"cate_order\": \"1000\",\n        \"creat_date\": \"2019-12-22 22:33:52\",\n        \"update_date\": \"2019-12-22 22:33:52\",\n        \"is_delete\": 0,\n        \"timestamp\": 1577025232,\n        \"__v\": 0\n      },\n      {\n        \"_id\": \"5e093f083d5db1001b83df1f\",\n        \"cate_name\": \"api\",\n        \"cate_order\": \"1000\",\n        \"creat_date\": \"2019-12-30 08:04:24\",\n        \"update_date\": \"2019-12-30 08:04:24\",\n        \"is_delete\": 0,\n        \"timestamp\": 1577664264,\n        \"__v\": 0\n      },\n      {\n        \"_id\": \"5e093f223d5db1001b83df20\",\n        \"cate_name\": \"api\",\n        \"cate_order\": \"1000\",\n        \"creat_date\": \"2019-12-30 08:04:50\",\n        \"update_date\": \"2019-12-30 08:04:50\",\n        \"is_delete\": 0,\n        \"timestamp\": 1577664290,\n        \"__v\": 0\n      },\n      {\n        \"_id\": \"5e093f243d5db1001b83df21\",\n        \"cate_name\": \"api\",\n        \"cate_order\": \"1000\",\n        \"creat_date\": \"2019-12-30 08:04:52\",\n        \"update_date\": \"2019-12-30 08:04:52\",\n        \"is_delete\": 0,\n        \"timestamp\": 1577664292,\n        \"__v\": 0\n      },\n      {\n        \"_id\": \"5e096e4f3d5db1001b83df29\",\n        \"cate_name\": \"api\",\n        \"cate_order\": \"1000\",\n        \"creat_date\": \"2019-12-30 11:26:07\",\n        \"update_date\": \"2019-12-30 11:26:07\",\n        \"is_delete\": 0,\n        \"timestamp\": 1577676367,\n        \"__v\": 0\n      },\n      {\n        \"_id\": \"5e097a923d5db1001b83df2c\",\n        \"cate_name\": \"api\",\n        \"cate_order\": \"1000\",\n        \"creat_date\": \"2019-12-30 12:18:26\",\n        \"update_date\": \"2019-12-30 12:18:26\",\n        \"is_delete\": 0,\n        \"timestamp\": 1577679506,\n        \"__v\": 0\n      }\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "-200": [
          {
            "group": "-200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "-200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "-200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "fail sample:",
          "content": "{\n  \"code\": -500,\n  \"message\": \"need to login first\",\n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dist/backend/category/list.js",
    "groupTitle": "backend"
  },
  {
    "type": "post",
    "url": "/category/modify",
    "title": "category.U.modify",
    "name": "category_modify",
    "group": "backend",
    "version": "1.0.0",
    "description": "<p>the backend category api. category.U.modify.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "sampleRequest": [
      {
        "url": "192.168.2.3:4000/api/backend/category/modify"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "param sample:",
          "content": "{\n  \"id\": \"5dff7ebff7da59001b66995c\",\n  \"cate_name\": \"dev\",\n  \"cate_order\": \"1000\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>his id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cate_name",
            "description": "<p>his name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cate_order",
            "description": "<p>his order.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success sample:",
          "content": "{\n  \"code\": 200,\n  \"message\": \"update success\",\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "-200": [
          {
            "group": "-200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "-200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "-200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "fail sample:",
          "content": "{\n  \"code\": -500,\n  \"message\": \"need to login first\",\n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dist/backend/category/modify.js",
    "groupTitle": "backend"
  },
  {
    "type": "get",
    "url": "/category/recover",
    "title": "category.U.recover",
    "name": "category_recover",
    "group": "backend",
    "version": "1.0.0",
    "description": "<p>the backend category api. category.U.recover.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "sampleRequest": [
      {
        "url": "192.168.2.3:4000/api/backend/category/recover"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "param sample:",
          "content": "{\n  \"id\": \"5dff7ebff7da59001b66995c\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>his id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success sample:",
          "content": "{\n  \"code\": 200,\n  \"message\": \"recover success\",\n  \"data\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "-200": [
          {
            "group": "-200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "-200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "-200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "fail sample:",
          "content": "{\n  \"code\": -500,\n  \"message\": \"need to login first\",\n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dist/backend/category/recover.js",
    "groupTitle": "backend"
  },
  {
    "type": "get",
    "url": "/comment/delete",
    "title": "comment.D.delete",
    "name": "comment_delete",
    "group": "backend",
    "version": "1.0.0",
    "description": "<p>the backend comment api. comment.D.delete.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "sampleRequest": [
      {
        "url": "192.168.2.3:4000/api/backend/comment/delete"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "param sample:",
          "content": "{\n  \"id\": \"5e0a98043d9e97008fc9948b\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>his id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success sample:",
          "content": "{\n  \"code\": 200,\n  \"message\": \"delete success\",\n  \"data\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "-200": [
          {
            "group": "-200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "-200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "-200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "fail sample:",
          "content": "{\n  \"code\": -500,\n  \"message\": \"need to login first\",\n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dist/backend/comment/delete.js",
    "groupTitle": "backend"
  },
  {
    "type": "get",
    "url": "/comment/recover",
    "title": "comment.U.recover",
    "name": "comment_recover",
    "group": "backend",
    "version": "1.0.0",
    "description": "<p>the backend comment api. comment.U.recover.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "sampleRequest": [
      {
        "url": "192.168.2.3:4000/api/backend/comment/recover"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "param sample:",
          "content": "{\n  \"id\": \"5e0a98043d9e97008fc9948b\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>his id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success sample:",
          "content": "{\n  \"code\": 200,\n  \"message\": \"recover success\",\n  \"data\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "-200": [
          {
            "group": "-200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "-200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "-200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "fail sample:",
          "content": "{\n  \"code\": -500,\n  \"message\": \"need to login first\",\n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dist/backend/comment/recover.js",
    "groupTitle": "backend"
  },
  {
    "type": "post",
    "url": "/user/insert",
    "title": "user.C.insert",
    "name": "user_insert",
    "group": "backend",
    "version": "1.0.0",
    "description": "<p>the backend user api. user.C.insert.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "sampleRequest": [
      {
        "url": "192.168.2.3:4000/api/backend/user/insert"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "param sample:",
          "content": "{\n  \"username\": \"yemiancheng\",\n  \"password\": \"MTIzNDU2NzgK\",\n  \"email\": \"hualei03042013@163.com\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>his email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>his name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>his password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success sample:",
          "content": "{\n  \"code\": 200,\n  \"message\": \"create success\",\n  \"data\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "-200": [
          {
            "group": "-200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "-200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "-200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "fail sample:",
          "content": "{\n  \"code\": -200,\n  \"message\": \"user name has been created\",\n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dist/backend/user/insert.js",
    "groupTitle": "backend"
  },
  {
    "type": "get",
    "url": "/user/item",
    "title": "user.R.item",
    "name": "user_item",
    "group": "backend",
    "version": "1.0.0",
    "description": "<p>the backend user api. user.R.item.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "sampleRequest": [
      {
        "url": "192.168.2.3:4000/api/backend/user/item"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "param sample:",
          "content": "{\n  \"id\": \"5dff7d24f7da59001b66995b\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The admin id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "return": [
          {
            "group": "return",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "return",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "return",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ],
        "success:200": [
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>his id.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>his name.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>his password.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>his email.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "creat_date",
            "description": "<p>the time of creating him.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "update_date",
            "description": "<p>the last time of updating him.</p>"
          },
          {
            "group": "success:200",
            "type": "Number",
            "optional": false,
            "field": "is_delete",
            "description": "<p>deleted?true 1,false 0.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success sample:",
          "content": "{\n  \"code\": 200,\n  \"message\": \"\",\n  \"data\": {\n    \"_id\": \"5dff7d24f7da59001b66995b\",\n    \"username\": \"yemiancheng\",\n    \"password\": \"836b73f1a0ace8a8298bbae617b9be65\",\n    \"email\": \"hualei03042013@163.com\",\n    \"creat_date\": \"2019-12-22 22:26:44\",\n    \"update_date\": \"2019-12-22 22:26:44\",\n    \"is_delete\": 0,\n    \"timestamp\": 1577024804,\n    \"__v\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "-200": [
          {
            "group": "-200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "-200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "-200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "fail sample:",
          "content": "{\n  \"code\": -200,\n  \"message\": \"\",\n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dist/backend/user/item.js",
    "groupTitle": "backend"
  },
  {
    "type": "post",
    "url": "/user/list",
    "title": "user.R.list",
    "name": "user_list",
    "group": "backend",
    "version": "1.0.0",
    "description": "<p>the backend user api. user.R.list.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "sampleRequest": [
      {
        "url": "192.168.2.3:4000/api/backend/user/list"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "param sample:",
          "content": "{\n  \"page\": 1,\n  \"limit\": 10\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>The crruent page id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>The max number of per page.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "return": [
          {
            "group": "return",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "return",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "return",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ],
        "success:200": [
          {
            "group": "success:200",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>The data of admin list.</p>"
          },
          {
            "group": "success:200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>the number of total admin.</p>"
          },
          {
            "group": "success:200",
            "type": "Number",
            "optional": false,
            "field": "hasNext",
            "description": "<p>the number of total page is large than 1?true 1,false 0.</p>"
          },
          {
            "group": "success:200",
            "type": "Number",
            "optional": false,
            "field": "hasPrev",
            "description": "<p>the number of curruent page is large than 1?true 1,false 0</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success sample:",
          "content": "{\n  \"code\": 200,\n  \"message\": \"\",\n  \"data\": {\n    \"list\": [\n      {\n        \"_id\": \"5dff7d24f7da59001b66995b\",\n        \"username\": \"yemiancheng\",\n        \"password\": \"836b73f1a0ace8a8298bbae617b9be65\",\n        \"email\": \"hualei03042013@163.com\",\n        \"creat_date\": \"2019-12-22 22:26:44\",\n        \"update_date\": \"2019-12-22 22:26:44\",\n        \"is_delete\": 0,\n        \"timestamp\": 1577024804,\n        \"__v\": 0\n      }\n    ],\n    \"total\": 1,\n    \"hasNext\": 0,\n    \"hasPrev\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "-200": [
          {
            "group": "-200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "-200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "-200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "fail sample:",
          "content": "{\n  \"code\": -200,\n  \"message\": \"\",\n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dist/backend/user/list.js",
    "groupTitle": "backend"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "user.O.login",
    "name": "user_login",
    "group": "backend",
    "version": "1.0.0",
    "description": "<p>the backend user api. user.O.login.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "sampleRequest": [
      {
        "url": "192.168.2.3:4000/api/backend/user/login"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "param sample:",
          "content": "{\n  \"username\": \"yemiancheng\",\n  \"password\": \"MTIzNDU2NzgK\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The user name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "return": [
          {
            "group": "return",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "return",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "return",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ],
        "success:200": [
          {
            "group": "success:200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the login.</p>"
          },
          {
            "group": "success:200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The token of user.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of login.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success sample:",
          "content": "{\n  \"code\": 200,\n  \"message\": \"login success\",\n  \"data\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZmY3ZDI0ZjdkYTU5MDAxYjY2OTk1YiIsInVzZXJuYW1lIjoieWVtaWFuY2hlbmciLCJpYXQiOjE1Nzc2NTcxOTYsImV4cCI6MTU4MDI0OTE5Nn0.bxgcaLbMZZBaNQTT-_4eKt01jK3-lW5eDyd7nJ6fdLY\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "-200": [
          {
            "group": "-200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "-200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "-200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "fail sample:",
          "content": "{\n  \"code\": -200,\n  \"message\": \"user name or password error\",\n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dist/backend/user/login.js",
    "groupTitle": "backend"
  },
  {
    "type": "post",
    "url": "/user/modify",
    "title": "user.U.modify",
    "name": "user_modify",
    "group": "backend",
    "version": "1.0.0",
    "description": "<p>the backend user api. user.U.modify.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "sampleRequest": [
      {
        "url": "192.168.2.3:4000/api/backend/user/modify"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "param sample:",
          "content": "{\n  \"id\": \"5dff7d24f7da59001b66995b\",\n  \"username\": \"yemiancheng\",\n  \"password\": \"MTIzNDU2NzgK\",\n  \"email\": \"hualei03042013@163.com\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The user name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>user id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success sample:",
          "content": "{\n  \"code\": 200,\n  \"message\": \"update success\",\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "-200": [
          {
            "group": "-200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "-200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "-200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "fail sample:",
          "content": "{\n  \"code\": -200,\n  \"message\": \"\",\n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dist/backend/user/modify.js",
    "groupTitle": "backend"
  },
  {
    "type": "get",
    "url": "/article/item",
    "title": "article.R.item",
    "name": "article_item",
    "group": "frontend",
    "version": "1.0.0",
    "description": "<p>the frontend article api. article.R.item.</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "sampleRequest": [
      {
        "url": "192.168.2.3:4000/api/frontend/article/item"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "param sample:",
          "content": "{\n  \"id\": \"5e0948823d5db1001b83df25\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>his id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "return": [
          {
            "group": "return",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "return",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "return",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ],
        "success:200": [
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>his id.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>his title.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>his category key.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "category_name",
            "description": "<p>his category name.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>his content.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "html",
            "description": "<p>his html content.</p>"
          },
          {
            "group": "success:200",
            "type": "Number",
            "optional": false,
            "field": "visit",
            "description": "<p>how many pepole visit it?</p>"
          },
          {
            "group": "success:200",
            "type": "Number",
            "optional": false,
            "field": "like",
            "description": "<p>how many pepole like it?</p>"
          },
          {
            "group": "success:200",
            "type": "Number",
            "optional": false,
            "field": "likes",
            "description": "<p>who like it?</p>"
          },
          {
            "group": "success:200",
            "type": "Number",
            "optional": false,
            "field": "comment_count",
            "description": "<p>his comment count.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "creat_date",
            "description": "<p>the time of creating him.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "update_date",
            "description": "<p>the last time of updating him.</p>"
          },
          {
            "group": "success:200",
            "type": "Number",
            "optional": false,
            "field": "is_delete",
            "description": "<p>deleted?true 1,false 0.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success sample:",
          "content": "{\n  \"likes\": [],\n  \"_id\": \"5e0948823d5db1001b83df25\",\n  \"title\": \"hellow-world\",\n  \"category\": \"5dff7ebff7da59001b66995c\",\n  \"category_name\": \"dev\",\n  \"content\": \"#hello-world\\n\\nthis is my first arcticle\",\n  \"html\": \"<p>#hello-world</p>\\n<p>this is my first arcticle</p>\\n\",\n  \"visit\": 0,\n  \"like\": 0,\n  \"comment_count\": 0,\n  \"creat_date\": \"2019-12-30 08:44:50\",\n  \"update_date\": \"2019-12-30 08:44:50\",\n  \"is_delete\": 1,\n  \"timestamp\": 1577666690,\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "-200": [
          {
            "group": "-200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "-200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "-200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "fail sample:",
          "content": "{\n  \"code\": -200,\n  \"message\": \"args error\",\n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dist/frontend/article/item.js",
    "groupTitle": "frontend"
  },
  {
    "type": "get",
    "url": "/article/list",
    "title": "article.R.list",
    "name": "article_list",
    "group": "frontend",
    "version": "1.0.0",
    "description": "<p>the frontend article api. article.R.list.</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "sampleRequest": [
      {
        "url": "192.168.2.3:4000/api/frontend/article/list"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "param sample:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "return": [
          {
            "group": "return",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "return",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "return",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ],
        "success:200": [
          {
            "group": "success:200",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>The data of his list.</p>"
          },
          {
            "group": "success:200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>the number of him.</p>"
          },
          {
            "group": "success:200",
            "type": "Number",
            "optional": false,
            "field": "hasNext",
            "description": "<p>the number of total page is large than 1?true 1,false 0.</p>"
          },
          {
            "group": "success:200",
            "type": "Number",
            "optional": false,
            "field": "hasPrev",
            "description": "<p>the number of curruent page is large than 1?true 1,false 0</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success sample:",
          "content": "{\n  \"code\": 200,\n  \"message\": \"\",\n  \"data\": {\n    \"list\": [\n      {\n        \"likes\": [],\n        \"_id\": \"5e0970313d5db1001b83df2a\",\n        \"title\": \"hellow-world\",\n        \"category\": \"5dff7ebff7da59001b66995c\",\n        \"category_name\": \"dev\",\n        \"content\": \"#hello-world\\n\\nthis is my first arcticle\",\n        \"html\": \"<p>#hello-world</p>\\n<p>this is my first arcticle</p>\\n\",\n        \"visit\": 0,\n        \"like\": 0,\n        \"comment_count\": 0,\n        \"creat_date\": \"2019-12-30 11:34:09\",\n        \"update_date\": \"2019-12-30 11:34:09\",\n        \"is_delete\": 0,\n        \"timestamp\": 1577676849,\n        \"__v\": 0\n      }\n    ],\n    \"total\": 8,\n    \"hasNext\": 0,\n    \"hasPrev\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "-200": [
          {
            "group": "-200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "-200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "-200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "fail sample:",
          "content": "{\n  \"code\": -500,\n  \"message\": \"need to login first\",\n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dist/frontend/article/list.js",
    "groupTitle": "frontend"
  },
  {
    "type": "post",
    "url": "/comment/insert",
    "title": "comment.C.insert",
    "name": "comment_insert",
    "group": "frontend",
    "version": "1.0.0",
    "description": "<p>the frontend comment api. comment.C.insert.</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "sampleRequest": [
      {
        "url": "192.168.2.3:4000/api/frontend/comment/insert"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "param sample:",
          "content": "{\n  \"id\": \"5e0948823d5db1001b83df25\",\n  \"content\": \"my first comment\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>article id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>comment content.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ],
        "success:200": [
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>comment id.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>his avatar.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "article_id",
            "description": "<p>article id.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "userid",
            "description": "<p>user id.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>user name.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user email.</p>"
          },
          {
            "group": "success:200",
            "type": "Number",
            "optional": false,
            "field": "content",
            "description": "<p>comment content?</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "creat_date",
            "description": "<p>the time of creating him.</p>"
          },
          {
            "group": "success:200",
            "type": "Number",
            "optional": false,
            "field": "is_delete",
            "description": "<p>deleted?true 1,false 0.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success sample:",
          "content": "{\n  \"code\": 200,\n  \"message\": \"\",\n  \"data\": {\n    \"_id\": \"5e0a98043d9e97008fc9948b\",\n    \"avatar\": \"\",\n    \"article_id\": \"5e0948823d5db1001b83df25\",\n    \"userid\": \"5dff77daf7da59001b66995a\",\n    \"username\": \"yemiancheng\",\n    \"email\": \"\",\n    \"content\": \"my first comment\",\n    \"creat_date\": \"2019-12-31 08:36:20\",\n    \"is_delete\": 0,\n    \"timestamp\": 1577752580,\n    \"__v\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "-200": [
          {
            "group": "-200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "-200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "-200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "fail sample:",
          "content": "{\n  \"code\": -200,\n  \"message\": \"please fill on category name and order\",\n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dist/frontend/comment/insert.js",
    "groupTitle": "frontend"
  },
  {
    "type": "get",
    "url": "/comment/list",
    "title": "comment.R.list",
    "name": "comment_list",
    "group": "frontend",
    "version": "1.0.0",
    "description": "<p>the frontend comment api. comment.R.list.</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "sampleRequest": [
      {
        "url": "192.168.2.3:4000/api/frontend/comment/list"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "param sample:",
          "content": "{\n  \"id\": \"5e0948823d5db1001b83df25\",\n  \"all\": 0\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>article id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "all",
            "description": "<p>for all comment?0 is true,1 isfasle.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "return": [
          {
            "group": "return",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "return",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "return",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ],
        "success:200": [
          {
            "group": "success:200",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>The data of his list.</p>"
          },
          {
            "group": "success:200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>the number of him.</p>"
          },
          {
            "group": "success:200",
            "type": "Number",
            "optional": false,
            "field": "hasNext",
            "description": "<p>the number of total page is large than 1?true 1,false 0.</p>"
          },
          {
            "group": "success:200",
            "type": "Number",
            "optional": false,
            "field": "hasPrev",
            "description": "<p>the number of curruent page is large than 1?true 1,false 0</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success sample:",
          "content": "{\n  \"code\": 200,\n  \"message\": \"\",\n  \"data\": {\n    \"list\": [\n      {\n        \"_id\": \"5e0a98043d9e97008fc9948b\",\n        \"avatar\": \"\",\n        \"article_id\": \"5e0948823d5db1001b83df25\",\n        \"userid\": \"5dff77daf7da59001b66995a\",\n        \"username\": \"yemiancheng\",\n        \"email\": \"\",\n        \"content\": \"my first comment\",\n        \"creat_date\": \"2019-12-31 08:36:20\",\n        \"is_delete\": 0,\n        \"timestamp\": 1577752580,\n        \"__v\": 0\n      },\n      {\n        \"_id\": \"5e09d47c01b007005b17c2f3\",\n        \"avatar\": \"\",\n        \"article_id\": \"5e0948823d5db1001b83df25\",\n        \"userid\": \"5dff77daf7da59001b66995a\",\n        \"username\": \"yemiancheng\",\n        \"email\": \"\",\n        \"content\": \"my first comment\",\n        \"creat_date\": \"2019-12-30 18:42:04\",\n        \"is_delete\": 0,\n        \"timestamp\": 1577702524,\n        \"__v\": 0\n      }\n    ],\n    \"total\": 2,\n    \"hasNext\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "fail sample:",
          "content": "{\n  \"code\": -500,\n  \"message\": \"need to login first\",\n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dist/frontend/comment/list.js",
    "groupTitle": "frontend"
  },
  {
    "type": "get",
    "url": "/like/delete",
    "title": "like.D.delete",
    "name": "like_delete",
    "group": "frontend",
    "version": "1.0.0",
    "description": "<p>the frontend like api. like.D.delete.</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "userid",
            "description": "<p>5dff77daf7da59001b66995a</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "192.168.2.3:4000/api/frontend/like/delete"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "param sample:",
          "content": "{\n  \"id\": \"5dff7d24f7da59001b66995b\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>article id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success sample:",
          "content": "{\n  \"code\": 200,\n  \"message\": \"update success\",\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "fail sample:",
          "content": "{\n  \"code\": -200,\n  \"message\": \"\",\n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dist/frontend/like/delete.js",
    "groupTitle": "frontend"
  },
  {
    "type": "get",
    "url": "/like/item",
    "title": "like.R.item",
    "name": "like_item",
    "group": "frontend",
    "version": "1.0.0",
    "description": "<p>the frontend like api. like.R.item.</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "sampleRequest": [
      {
        "url": "192.168.2.3:4000/api/frontend/like/item"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "param sample:",
          "content": "{\n  \"id\": \"5e0948823d5db1001b83df25\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>arcticle id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success sample:",
          "content": "{\n  \"code\": 200,\n  \"message\": \"update success\",\n  \"data\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "fail sample:",
          "content": "{\n  \"code\": -200,\n  \"message\": \"user name has been created\",\n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dist/frontend/like/item.js",
    "groupTitle": "frontend"
  },
  {
    "type": "get",
    "url": "/like/reset",
    "title": "like.O.reset",
    "name": "like_reset",
    "group": "frontend",
    "version": "1.0.0",
    "description": "<p>the frontend like api. like.O.reset.</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "sampleRequest": [
      {
        "url": "192.168.2.3:4000/api/frontend/like/reset"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "param sample:",
          "content": "{\n  \"id\": \"5e0948823d5db1001b83df25\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>arcticle id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success sample:",
          "content": "{\n  \"code\": 200,\n  \"message\": \"update success\",\n  \"data\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "fail sample:",
          "content": "{\n  \"code\": -200,\n  \"message\": \"user name has been created\",\n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dist/frontend/like/reset.js",
    "groupTitle": "frontend"
  },
  {
    "type": "get",
    "url": "/user/account",
    "title": "account.R.item",
    "name": "user_account_item",
    "group": "frontend",
    "version": "1.0.0",
    "description": "<p>the frontend user api. account.R.item.</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "sampleRequest": [
      {
        "url": "192.168.2.3:4000/api/frontend/user/account"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "param sample:",
          "content": "{\n  \"id\": \"5dff7d24f7da59001b66995b\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The admin id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "return": [
          {
            "group": "return",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "return",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "return",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ],
        "success:200": [
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>his id.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>his name.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>his password.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>his email.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "creat_date",
            "description": "<p>the time of creating him.</p>"
          },
          {
            "group": "success:200",
            "type": "String",
            "optional": false,
            "field": "update_date",
            "description": "<p>the last time of updating him.</p>"
          },
          {
            "group": "success:200",
            "type": "Number",
            "optional": false,
            "field": "is_delete",
            "description": "<p>deleted?true 1,false 0.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success sample:",
          "content": "{\n  \"code\": 200,\n  \"message\": \"\",\n  \"data\": {\n    \"_id\": \"5dff77daf7da59001b66995a\",\n    \"username\": \"yemiancheng\",\n    \"password\": \"836b73f1a0ace8a8298bbae617b9be65\",\n    \"email\": \"hualei03042013@126.com\",\n    \"creat_date\": \"2019-12-22 22:04:10\",\n    \"update_date\": \"2019-12-30 18:24:19\",\n    \"is_delete\": 0,\n    \"timestamp\": 1577023450,\n    \"__v\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "fail sample:",
          "content": "{\n  \"code\": -200,\n  \"message\": \"\",\n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dist/frontend/user/account/item.js",
    "groupTitle": "frontend"
  },
  {
    "type": "post",
    "url": "/user/account",
    "title": "account.U.modify",
    "name": "user_account_modify",
    "group": "frontend",
    "version": "1.0.0",
    "description": "<p>the frontend user api. account.U.modify.</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "sampleRequest": [
      {
        "url": "192.168.2.3:4000/api/frontend/user/account"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "param sample:",
          "content": "{\n  \"id\": \"5dff7d24f7da59001b66995b\",\n  \"username\": \"yemiancheng\",\n  \"password\": \"MTIzNDU2NzgK\",\n  \"email\": \"hualei03042013@163.com\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The user name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>user id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success sample:",
          "content": "{\n  \"code\": 200,\n  \"message\": \"update success\",\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "fail sample:",
          "content": "{\n  \"code\": -200,\n  \"message\": \"\",\n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dist/frontend/user/account/modify.js",
    "groupTitle": "frontend"
  },
  {
    "type": "post",
    "url": "/user/insert",
    "title": "user.C.insert",
    "name": "user_insert",
    "group": "frontend",
    "version": "1.0.0",
    "description": "<p>the frontend user api. user.C.insert.</p>",
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "192.168.2.3:4000/api/frontend/user/insert"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "param sample:",
          "content": "{\n  \"username\": \"yemiancheng\",\n  \"password\": \"MTIzNDU2NzgK\",\n  \"email\": \"hualei03042013@163.com\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>his email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>his name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>his password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success sample:",
          "content": "{\n  \"code\": 200,\n  \"message\": \"create success\",\n  \"data\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "fail sample:",
          "content": "{\n  \"code\": -200,\n  \"message\": \"user name has been created\",\n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dist/frontend/user/insert.js",
    "groupTitle": "frontend"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "user.O.login",
    "name": "user_login",
    "group": "frontend",
    "version": "1.0.0",
    "description": "<p>the frontend user api. user.O.login.</p>",
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "192.168.2.3:4000/api/frontend/user/login"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "param sample:",
          "content": "{\n  \"username\": \"yemiancheng\",\n  \"password\": \"MTIzNDU2NzgK\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The user name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "return": [
          {
            "group": "return",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "return",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "return",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success sample:",
          "content": "{\n  \"code\": 200,\n  \"message\": \"login success\",\n  \"data\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZmY3ZDI0ZjdkYTU5MDAxYjY2OTk1YiIsInVzZXJuYW1lIjoieWVtaWFuY2hlbmciLCJpYXQiOjE1Nzc2NTcxOTYsImV4cCI6MTU4MDI0OTE5Nn0.bxgcaLbMZZBaNQTT-_4eKt01jK3-lW5eDyd7nJ6fdLY\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "fail sample:",
          "content": "{\n  \"code\": -200,\n  \"message\": \"user name or password error\",\n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dist/frontend/user/login.js",
    "groupTitle": "frontend"
  },
  {
    "type": "post",
    "url": "/user/logout",
    "title": "user.O.logout",
    "name": "user_logout",
    "group": "frontend",
    "version": "1.0.0",
    "description": "<p>the frontend user api. user.O.logout.</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "sampleRequest": [
      {
        "url": "192.168.2.3:4000/api/frontend/user/logout"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "param sample:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "return": [
          {
            "group": "return",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "return",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "return",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success sample:",
          "content": "{\n  \"code\": 200,\n  \"message\": \"logout success\",\n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "fail sample:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "filename": "dist/frontend/user/logout.js",
    "groupTitle": "frontend"
  },
  {
    "type": "post",
    "url": "/user/password",
    "title": "password.U.modify",
    "name": "user_password_modify",
    "group": "frontend",
    "version": "1.0.0",
    "description": "<p>the frontend user api. password.U.modify.</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "sampleRequest": [
      {
        "url": "192.168.2.3:4000/api/frontend/user/password"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "param sample:",
          "content": "{\n  \"id\": \"5dff77daf7da59001b66995a\",\n  \"old_password\": \"MTIzNDU2NzgK\",\n  \"password\": \"MTIzNDU2NzgK\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>user id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "old_password",
            "description": "<p>his old password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>his new password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The status of the return.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the return.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the return.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success sample:",
          "content": "{\n  \"code\": 200,\n  \"message\": \"update success\",\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "fail sample:",
          "content": "{\n  \"code\": -200,\n  \"message\": \"\",\n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dist/frontend/user/password/modify.js",
    "groupTitle": "frontend"
  }
] });
