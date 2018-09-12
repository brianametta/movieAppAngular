# MovieApp

A simple movie app that allows you to add, update, and delete a movie list through modal form windows with Angular, Express, and MongoDB.

To use the MongoDB database (set up to use the mLab MongoJS app), edit the api.js db variable with a link to your database in this format:

`var db = mongojs( "mongodb://[yourSpecialMongoJSLink]/[databaseName]", ["collectionName"] );`

![Alt text](/src/assets/tableView.PNG)

![Alt text](/src/assets/add.PNG)

![Alt text](/src/assets/edit.PNG)

## Technology Used

Angular CLI
`npm install -g @angular/cli`

Express & MongoDB (MongoJS)
`npm install express body-parser ejs mongojs --save`

Bootstrap
`npm install bootstrap --save`

Font Awesome
`npm install --save font-awesome angular-font-awesome`

jQuery
`npm install jquery --save`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Run

`node server`

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.1.
