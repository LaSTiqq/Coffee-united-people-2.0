# Coffee united people 2.0

> This is expected to be more advanced MERN webapp of what I did before [here](https://github.com/LaSTiqq/coffee-united-people) while participating at [Accenture Bootcamp](https://bootcamp.lv/)

## What are done currently (mainly)

- Added client-side part on [React.js](https://reactjs.org/) using [Bootstrap](https://getbootstrap.com/) CDN
- Added all-to-all chat based on [Socket.io](https://socket.io/)
  - The author decided that storing messages in a database here is not necessary
- Implemented [Redux toolkit](https://redux-toolkit.js.org/) instead of Context Hook
  - Cookies and localStorage is now cleared after logging out
- Fixed very old bug according to differently working [JWT token](https://www.npmjs.com/package/jsonwebtoken) verification on the server-side and on the client-side
  - The author decided that challenging security measures (such as verifying that token was modified) here isn't necessary

## What are expected further (mainly)

- Refactor as much as possible both server-side and client-side code
- Expand user model to more detailed profile (username, gender etc.)
- Add profile pictures (maybe)
- Add deletion and editing functionalities for existing users
- Add password validation and verification for complexity requirements while registering

<sub>See the commit messages to see what exactly are done</sub>

## Prerequisites

#### To install this repository:

1. Clone the repository to a dedicated folder using command `git clone https://github.com/LaSTiqq/Coffee-united-people-2.0.git`
2. Navigate terminal that you use to a created folder above, and run both on 'server' and 'client' folders `npm install` or `npm i`
3. Create at the 'server' folder `.env` file and fill it with two variables: `MONGO_URL` for connection to cloud database and `SECRET_KEY` for properly working JWT Token. For example:

```
MONGO_URL='mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/?retryWrites=true&w=majority'
SECRET_KEY='<random_symbol_row>'
```

3. Run the server using command `npm start` in 'server' folder and `npm run dev` in 'client' folder. Use two different terminals at the same time

## Powered by

- [ChatGPT](https://chat.openai.com/chat)
- [Vite](https://vitejs.dev/)

## Find and contact me

- [My portfolio website](https://laurisstirna.eu.pythonanywhere.com/)

<sub>I'm currently looking for a job opportunities</sub>
