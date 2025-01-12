The steps to make a mern project

1- Create a folder for backend in a folder


2- Now then initialize the backend project 
   npm init-y

3- Now install necessary models for backend 
   npm i express jsonwebtoken mongoose dotenv bcrypt body-parser joi cors


Here's a one-line explanation of each module you mentioned:

1. **express**: A fast and minimalist web framework for Node.js used to build web applications and APIs.  
2. **jsonwebtoken**: A library for creating and verifying JSON Web Tokens (JWT) for secure authentication.  
3. **mongoose**: An Object Data Modeling (ODM) library for MongoDB, simplifying database interactions with schemas and models.  
4. **dotenv**: A module for loading environment variables from a `.env` file into `process.env`.  
5. **bcrypt**: A library for hashing and securely storing passwords.  
6. **body-parser**: Middleware to parse incoming request bodies in a middleware before your handlers, now included in Express.  
7. **joi**: A data validation library for defining and validating schemas.  
8. **cors**: Middleware to enable Cross-Origin Resource Sharing (CORS), allowing controlled access to resources from different domains.  

4- Now create the main file in the backend that is index.js

5- Now import express then config.env file so create a .env file

6- Now call app.listen file

7- Now inorder to maintain the folder structure we will create some folders within bacakend as follows -
   -Models
   -Controllers
   -Middlewares
   -Routes

8- At first we will create a database connection for which we create a file in models as db.js
