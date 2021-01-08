# E-commerce Site  ![GitHub version doc](https://img.shields.io/badge/Version-1.0.0-red) ![GitHub last commit](https://img.shields.io/github/last-commit/dcc5235/EComm_Shop?style=flat-square) 

**HTML5, Bulma CSS, JavaScript**

A responsive, application which utilizes JS to allow administrators to add, edit, and remove products from the site. It also allows users of the product site to add, remove, and view their cart total.

![](https://scontent.fdpa1-1.fna.fbcdn.net/v/t1.0-9/127220379_1267840890260416_393458326415392942_o.jpg?_nc_cat=100&ccb=2&_nc_sid=0debeb&_nc_ohc=RE0aVnZY7tEAX_HKiD8&_nc_ht=scontent.fdpa1-1.fna&oh=0a3ff9ad6d0ad90c3e330c509c3e8c46&oe=601EE185)

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

**Admin Users Sign Up**: http://localhost:3000/signup
  - Run script <code>npm run dev</code> to deploy

## Products Repository Method
- Reuse code from Admin Users Repository Method excluding the comparePasswords method
  - See repository.js for code reuse with classes

## Requirements for SignUp & SignIn
- Hashing and salting passwords for user security to prevent [rainbow table attacks](https://bit.ly/3lIGyXn)
- Password validator & sanitization with [npm express-validator library](https://www.npmjs.com/package/express-validator)

## Image and Upload Files
- Middleware [multer](https://www.npmjs.com/package/multer) installation needed for accessing uploaded image files
  - Run script <code> npm install multer</code> in the command line

## Shopping Cart
**Product List**: http://localhost:3000
  - Run script <code>npm run dev</code> to deploy
  - When buyers click on a product, they are redirected to their shopping cart
  ![](https://scontent.fdpa1-1.fna.fbcdn.net/v/t1.0-9/126867886_1267857883592050_1389238540960618538_n.jpg?_nc_cat=100&ccb=2&_nc_sid=0debeb&_nc_ohc=ngcabC3jsZAAX83U4Ax&_nc_ht=scontent.fdpa1-1.fna&oh=d5fea4796f416107f8f3daaaf1ab1468&oe=601C167E)
