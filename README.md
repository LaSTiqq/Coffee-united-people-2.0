# Coffee united people 2.0

> This is expected to be more complex and advanced version of what I did before [here](https://github.com/LaSTiqq/coffee-united-people)

## What are done currently

- Added preventing registering with an existing login (username) on server-side
- Added propper CORS configuration to retrieve JWT Token as a cookie from server-side to client-side
- Added client-side part on React.js with [Bootstrap](https://getbootstrap.com/) CDN
- Added feature to keep user logged in, even if page is being reloaded
- Added logout route both on server-side and client-side
- Added all-to-all chat based on [Socket.io](https://socket.io/)
  - The author decided that storing messages in a database here is not necessary
- Added welcome message and button to logged in users in navigation bar to return to the protected page if user suddenly clicked go back button in browser
- Moved all client-side to [Vite](https://vitejs.dev/) react app
- Implemented [Redux](https://react-redux.js.org/) instead of Context Hook
  - Cookies and localStorage is now cleared after logging out
- Added jsconfig.json and modified vite.config.js to resolve relative import paths
- Added [react-hot-toast](https://react-hot-toast.com/) package instead of boring Bootstrap alerts
- Added pretty loader while user is registering/signing in
- Separated multiple old app parts to independent components at the client-side
- Username field for registering/signing in is changed to email field
- Fixed very old bug according to differently working token verification on the server-side and on the client-side
  - The author decided that challenging security measures (such as verifying that token was modified) here is not necessary
- Reviewed all returning HTTP status codes according to [HTTP Cats](https://http.cat/)

## What are expected further

- Refactor as much as possible both server-side and client-side code
- Expand user model to more detailed profile (username, gender etc.)
- Add accordingly deletion and editing functionalities to an existing users
- Add verification for password complexity requirements
- Explore and implement [TypeScript](https://www.typescriptlang.org/) (maybe)
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
  - react-hot-toast
  - socket.io-client
  - js-cookie
  - axios
  - redux
  - react-redux
  - @reduxjs/toolkit
  - @uiball/loaders

## Prerequsites

##### In this project are implemented dotenv package so the sensitive information such as `MONGO_URL` for connection to database and `SECRET_KEY` for JWT Token are hidden in environment file and aren't uploaded to this repository. Make sure to provide them (create `.env` file at the server side) if you're going to use this codebase.

## Inspired by

- [Accenture Bootcamp](https://bootcamp.lv/)
- [ChatGPT](https://chat.openai.com/chat)

## Find and contact me

- [My personal website](https://laurisstirna.eu.pythonanywhere.com/)

<sub>I'm currently looking for a job opportunities</sub>
