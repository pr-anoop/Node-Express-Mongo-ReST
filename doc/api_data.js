define({ "api": [
  {
    "type": "post",
    "url": "/users",
    "title": "Create user",
    "version": "1.0.0",
    "name": "CreateUser",
    "group": "Users",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\",\n  \"email\": \"john.doe@example.com\",\n  \"password\": \"my-password\",\n  \"verified\": false\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{ \n  \"_id\": \"1234567890\",\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\",\n  \"email\": \"john.doe@example.com\",\n  \"verified\": false \n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/userController.js",
    "groupTitle": "Users"
  },
  {
    "type": "delete",
    "url": "/users/:id",
    "title": "Delete User",
    "version": "1.0.0",
    "name": "DeleteUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p> "
          }
        ]
      }
    },
    "filename": "controllers/userController.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Get user by ID",
    "version": "1.0.0",
    "name": "GetUserById",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \n  \"_id\": \"1234567890\",\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\",\n  \"email\": \"john.doe@example.com\",\n  \"verified\": false \n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/userController.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "List all users",
    "version": "1.0.0",
    "name": "GetUsers",
    "group": "Users",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\"_id\": 1234567890,\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\",\n  \"email\": \"john.doe@example.com\"\n  \"verified\": false\n},{\"_id\": 1234567890,\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\",\n  \"email\": \"john.doe@example.com\"\n  \"verified\": false\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/userController.js",
    "groupTitle": "Users"
  },
  {
    "type": "patch",
    "url": "/users/:id",
    "title": "Patch User",
    "version": "1.0.0",
    "name": "PatchUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"verified\": true\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \n  \"_id\": \"1234567890\",\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\",\n  \"email\": \"john.doe@example.com\",\n  \"verified\": true \n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/userController.js",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "/users/:id",
    "title": "Update User",
    "version": "1.0.0",
    "name": "UpdateUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\",\n  \"email\": \"john.doe@example.com\",\n  \"password\": \"my-password\",\n  \"verified\": false\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \n  \"_id\": \"1234567890\",\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\",\n  \"email\": \"john.doe@example.com\",\n  \"verified\": false \n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/userController.js",
    "groupTitle": "Users"
  }
] });