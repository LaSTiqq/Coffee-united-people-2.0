# Coffee united people 2.0

> This is expected to be more complex and advanced version of what I did before [here](https://github.com/LaSTiqq/coffee-united-people)

## What are done currently

- Reviewed all returning HTTP status codes according to [HTTP Cats](https://http.cat/)
- Added preventing registering with an existing login (username) on backend side
- Added additional try-catch returning messages on frontend side
- Added jsonwebtoken (JWT) with expiration time and other security flags
- Added basic frontend part on React.js with [Bootstrap](https://getbootstrap.com/) CDN and deletion of all testing packages
- Added ContextHook hook to protect routes only accesible for authorized users
- Added propper CORS configuration to retrieve JWT Token as a cookie from backend to frontend

## What are expected further

- Get rid of unnecessary controllers and middlewares which were used for testing on backend side
- Add feature to keep user logged in even if page is refreshed
- Replace default JavaScript alert messages with Bootstrap alerts
- Continue improving and styling frontend side
- Implement fully working all-to-all chat based on [Socket.io](https://socket.io/)
- and more..

## Technologies used

- [MongoDB](https://www.mongodb.com/) as a database
- [Express.js](https://expressjs.com/) for backend

  - bcrypt
  - cookie-parser
  - cors
  - dotenv
  - express
  - jsonwebtoken
  - mongoose
  - mongoose-unique-validator
  - nodemon

- [React.js](https://reactjs.org/) for frontend

  - axios
  - react-router-dom

<sub>These are currently used packages. You can find actual list of them in package.json file both on backend and frontend folders</sub>

## Prerequsites

##### In this project are implemented dotenv package so the sensitive information such as `MONGO_URL` for connection to database and `SECRET_KEY` for JWT Token are hidden in environment file and aren't uploaded to this repository. Make sure to provide them if you are going to use this codebase.

## Inspired by

- [Accenture Bootcamp](https://bootcamp.lv/)
- [ChatGPT](https://chat.openai.com/chat)

## Find and contact me

- [My personal website](https://laurisstirna.eu.pythonanywhere.com/)

<sub>I'm currently looking for a job opportunities :)</sub>
