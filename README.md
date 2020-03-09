# keepit
A simple web app to create, edit and structure notes.

# What this Repo is for..

This Repo was created to strengthen the basics of modern web dev beyond coding. Therefore, I tried to provide some sources and infos in the issues I used to organize the project. Feedback is highly appreciated!

# Getting started

In order to use the APP in dev mode, use the following commands:

```
npm run install:dep
npm run dev
```

In order to connect to a DB create a `.env` file in your root directory and set the following variables:

```
DB_URL=<connection-url_of_your_DB>
ACCESS_TOKEN_SECRET=<save_String_for_creation_of_JWT>
```

If you want to know how and why this APP uses JWT visit https://jwt.io/ or have a look at [this issue](https://github.com/j-toscani/keepit/issues/34).

Visit the app here: https://keep-it-test.herokuapp.com
