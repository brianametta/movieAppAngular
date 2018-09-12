# MovieApp

A simple movie app that allows you to add, update, and delete a movie list through modal form windows with Angular, Express, and MongoDB.

To use the MongoDB database (set up to use the mLab MongoJS app), edit the api.js db variable with a link to your database in this format:

`var db = mongojs( "mongodb://[yourSpecialMongoJSLink]/[databaseName]", ["collectionName"] );`

![Alt text](/src/assets/table.PNG)

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

`ng build`

## Run

`node server`

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
