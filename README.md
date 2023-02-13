# Coffee united people 2.0

> This is expected to be more complex and advanced version of what I did before [here](https://github.com/LaSTiqq/coffee-united-people)

## What are done currently

- Reviewed all returning HTTP status codes according to [HTTP Cats](https://http.cat/)
- Modified all backend routes and controllers to be more readable on backend side
- Added additional try-catch returning messages on frontend side
- Added preventing registering with an existing login (username) on backend side
- Added jsonwebtoken (JWT) with expiration time
- Added basic frontend part on React.js with [Bootstrap](https://getbootstrap.com/) CDN and deletion of all testing packages
- Added ContextHook hook to protect routes only accesible for authorized users
- Added propper CORS configuration to retrieve JWT Token as a cookie from backend to frontend
- Added feature to keep user logged in even if page is refreshed
- Added logout route on backend side with deletion of token if user logs out, both on backend and frontend side
- Added token verification while user is on protected pages (currently just one page), both on backend side and frontend side
- Added styling for welcome, register, and login pages
- Moved logout component to the navigation bar so it's functionality could be used in every protected page
- Added welcome message to logged in users with their username, also in navigation bar

## What are expected further

- Continue improving and styling frontend side
- Replace default JavaScript alert messages with Bootstrap alerts
- Explore and implement fully working all-to-all chat based on [Socket.io](https://socket.io/)
- Explore and implement [MUI](https://mui.com/) instead of Bootstrap (maybe)
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
  - js-cookie

<sub>You can find actual list of packages in package.json file both on backend and frontend folders</sub>

## Prerequsites

##### In this project are implemented dotenv package so the sensitive information such as `MONGO_URL` for connection to database and `SECRET_KEY` for JWT Token are hidden in environment file and aren't uploaded to this repository. Make sure to provide them if you are going to use this codebase.

## Inspired by

- [Accenture Bootcamp](https://bootcamp.lv/)
- [ChatGPT](https://chat.openai.com/chat)

## Find and contact me

- [My personal website](https://laurisstirna.eu.pythonanywhere.com/)

<sub>I'm currently looking for a job opportunities :)</sub>
