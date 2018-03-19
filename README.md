# [sequelizedBurger Application](https://guarded-bastion-61918.herokuapp.com/)

### Overview
In this assignment, we re-created our [Burger app](https://github.com/acarrillo4/Burger) using Sequelize (yum!). 

### How it works
* Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `DEVOUR` button. When the user clicks it, the burger will move to the right side of the page.

* The app stores every burger in a database, whether devoured or not.

### Burger App Screenshot
![App_screenshot](/public/assets/images/screenshot.jpg)

### Directory Structure
```
├── config
|  └── config.json
├── controllers
|  └── burgersController.js
├── db
|  └── schema.sql
├── models
|  ├── burger.js
|  └── index.js
├── node_modules
├── public
|   └── assets
|       └── css
|       └── images
|       └── js
├── views
|   ├── index.handlebars
|   └── layouts
|       └── main.handlebars
├── package.json
├── package-lock.json
└── server.js
```
