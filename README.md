# Ecommerce
work in progress. 

## Installations & Considerations

- Requires node.js
- Install depencies: run script <code>npm install express nodemon</code>
  - express helps run web server
  - nodemon auto restarts web server when project file changes

## UsersRepository
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

## Requirements for SignUp & SignIn
- Hashing and salting passwords for user security to prevent [rainbox table attacks](https://bit.ly/3lIGyXn)
