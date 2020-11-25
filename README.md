# E-commerce Site  ![GitHub version doc](https://img.shields.io/badge/Version-1.0.0-red) ![GitHub last commit](https://img.shields.io/github/last-commit/dcc5235/EComm_Shop?style=flat-square) 

**HTML5, Bulma CSS, JavaScript**

A responsive, application which utilizes JS to allow administrators to add, edit, and remove products from the site. It also allows users of the product site to add, remove, and view their cart total.

![](https://bit.ly/37auFU0)

---

## Installation & Technologies
- Download the full package, select the Code button, choose the "Download ZIP" option.
- Requires Node.js: install [Node.js](https://nodejs.org/en/), current version.
- Install dependencies: run script <code>npm install express nodemon</code>
  - express helps run web server
  - nodemon auto restarts web server when project file changes
- [Bulma](https://bulma.io/) CSS framework required

## Admin Users Repository Method
Method | Input Args | Return | Description
------------ | ------------- | ------------- | ------------- 
getAll | - | [user] | gets a list of all users
getOne | id | user | finds the user with the given id
getOneBy | filters | user | finds one user with the given filters
create | attributes | null | creates a user with the given attributes
update | id, attributes | null | updates user with given id usin gthe given attributes
delete | id | null | delete the user with the given id
randomId | - | id | generates a random id
writeAll | - | null | writes all user to a user.json file
comparePasswords | string, string | boolean | returns true if the passwords match

[Admin Users Sign Up](http://localhost:3000/signup)
  - Run script <code>npm run dev</code> 

## Products Repository
Code reuse with classes - see repository.js

## Requirements for SignUp & SignIn
- Hashing and salting passwords for user security to prevent [rainbow table attacks](https://bit.ly/3lIGyXn)
- Password validator & sanitization with [npm express-validator library](https://www.npmjs.com/package/express-validator)

## Image and upload files
- middleware [multer](https://www.npmjs.com/package/multer) installation (accessing uploaded files)
  - <code> npm install multer</code> in the command line

## Shopping cart
- http://localhost:3000
