# Coffee united people 2.0
> This is expected to be more complex and advanced version of what I did before
## What are done currently
* Added preventing registering with an existing login (username)
* Added jsonwebtoken (JWT) with expiration time and a middleware to verify it to adjust security further
* Reviewed all returning HTTP status codes according to [HTTP Cats](https://http.cat/)
## What are expected further
* Set and improve further frontend side based on React.js
* Test and implement fully working all-to-all chat based on [Socket.io](https://socket.io/)
* Set loggedInContext hook to protect routes only accesible for authorized users
* and more..
## Technologies used
* [MongoDB](https://www.mongodb.com/) as a database
* [Express.js](https://expressjs.com/) for backend

  - bcrypt
  - cookie-parser
  - cors
  - dotenv
  - express
  - jsonwebtoken
  - mongoose
  - mongoose-unique-validator
  - nodemon
* [React.js](https://reactjs.org/) for frontend

<sub>These are currently used packages. You can find actual list of them in package.json file both on backend and frontend (in future) folders</sub>
## Prerequsites
##### In this project are implemented dotenv package so the sensitive information such as ```MONGO_URL``` for connection to database and ```SECRET_KEY``` for JWT Token are hidden in environment file and aren't uploaded to this repository. Make sure to provide them if you are going to use this codebase. As well as node_modules folder is ignored.
## Inspired by
* [Accenture Bootcamp](https://bootcamp.lv/)
* [ChatGPT](https://chat.openai.com/chat)
## Find and contact me
* [LinkedIn](https://www.linkedin.com/in/lauris-stirna-ab4898254/)
* [My portfolio website](https://laurisstirna.eu.pythonanywhere.com/)

<sub>I am currently looking for a job opportunities :)</sub>
