# SBA 319 - MongoDB Database Application

https://github.com/jdobbs34/SBA.319

## About
This database is for people who want to create an account to share their recipes for others to share and use as well as to rate other peoples recipes and give feedback on what they thought.

- You have User database where you create you account.
- A database for where you create and share your recipe.
- And a database where you can rate other people recipes and give feedback.

Each user has the ability in all three databases to create, update, and delete their account and info they share.

There are 3 categories each in the recipes and reviews that are breakfast, lunch and dinner. Fir user data only name, date of birth, and email will be required. The API's that I am using are for users, recipes, and reviews. 

### CRUD operation were used in mmaking this database for all 3 API's

- Create a document using Post.
- Read a document using Get.
- Update a document using Put.
- Delete a document using Delete.

## Technologies Used

- Node.js - JavaScript runtime
- Express.js - Web framework
- MongoDB - Database
- Mongoose - ODM (Object Data Modeling)
- dotenv - Environment variables

## Folders
- DB conatins set up for Mongoose connection.
- Middleware contains the Middleware.
- Model contains the Schemas.
- Routes contain the CRUD operations.
- Utilities contain some sample start up data and seeds.

## Issue with server.js
If I comment out the routes and import links above my Mongoose will connect besides that it does not.

