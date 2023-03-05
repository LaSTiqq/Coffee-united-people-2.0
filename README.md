# Coffee united people 2.0

> This is expected to be more complex and advanced version of what I did before [here](https://github.com/LaSTiqq/coffee-united-people)

## What are done currently

- Reviewed all returning HTTP status codes according to [HTTP Cats](https://http.cat/)
- Modified all routes and controllers to be more readable on server-side
- Added additional try-catch returning messages on client-side
- Added preventing registering with an existing login (username) on server-side
- Added jsonwebtoken (JWT) with expiration time
- Added client-side part on React.js with [Bootstrap](https://getbootstrap.com/) CDN
- Added Context Hook hook to protect routes only accesible for authorized users
- Added propper CORS configuration to retrieve JWT Token as a cookie from backend to frontend
- Added feature to keep user logged in, even if page is being reloaded
- Added logout route on server-side with deletion of token if user logs out
- Added token verification while user is on protected pages (currently just one page)
- Moved logout component to the navigation bar so it's functionality could be used in every protected page
- Added welcome message to logged in users with their username in navigation bar
- Added all-to-all chat based on [Socket.io](https://socket.io/) without storing messages in database
- Added button to logged in users in navigation bar to get back to the protected page if user suddenly clicked go back button in browser
- Fixed some incorrect alert messages according to what user did wrong exactly
- Added Bootstrap alerts instead of default JavaScript alerts at login and register
- Moved all client-side to [Vite](https://vitejs.dev/) react app, returning back later is possible if some errors appears
- Implemented [Redux](https://react-redux.js.org/) instead of Context Hook to prevent accesing protected pages, stay logged in if page reloads
- Added jsconfig.json and modified vite.config.js to resolve relative import paths

## What are expected further

- Refactor as much as possible both server-side and client-side code
- Expand user model to more detailed profile (email, age etc.)
- Add accordingly deletion and editing functionalities to an existing users
- Add verification for password complexity requirements
- Explore and implement [TypeScript](https://www.typescriptlang.org/) (maybe)
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
  - socket.io

- [React.js](https://reactjs.org/) for frontend

  - react-router-dom
  - react-bootstrap
  - socket.io-client
  - axios
  - redux
  - react-redux
  - @reduxjs/toolkit

<sub>Actual list of packages can be found in package.json file both on backend and frontend folders</sub>

## Prerequsites

##### In this project are implemented dotenv package so the sensitive information such as `MONGO_URL` for connection to database and `SECRET_KEY` for JWT Token are hidden in environment file and aren't uploaded to this repository. Make sure to provide them if you're going to use this codebase.

## Inspired by

- [Accenture Bootcamp](https://bootcamp.lv/)
- [ChatGPT](https://chat.openai.com/chat)

## Find and contact me

- [My personal website](https://laurisstirna.eu.pythonanywhere.com/)

<sub>I'm currently looking for a job opportunities :)</sub>
