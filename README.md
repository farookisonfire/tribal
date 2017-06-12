# tribal
[![Build Status](https://travis-ci.org/farookkhan/tribal.svg?branch=master)](https://travis-ci.org/farookkhan/tribal)
A React-Redux web-app that displays and sorts list of users.

## Development

* Install dependencies.
```bash
$ npm install
```

* Start the project. This will also start lint:watch and test:watch.
```bash
$ npm start
```

* Once project has been built, and served, navigate to `localhost:3030` in your browser.

## Project Summary
My overall approach entailed breaking the project into the following pieces:
* Setting up development environment and UI boilerplate.
* Feature - User can view a list of users.
* Feature - User can sort users by last or first name.
* Feature - User can search for other users.
* Feature - User can open a user profile.
* Refactor code and address any bugs.
* Creat a production build and deploy the UI.

My workflow consisted of the following:
* File issue, and when relevent, include Motivation, Implementation Details, and Task List.
* Create a local branch, and begin writing code to fulfill issue requirements.
* Write unit-tests.
* Push Branch
* Run CI-check and merge. 

Completed Features
* User can view a list of users.
* User can sort users by last or first name.
* User can search for other users.
* User can open a user profile.

Incomplete
* Getting test coverage to 90% at least. I estimate that getting here would take an additional 30 - 60 minutes.

Given More Time...
* I would improve the aesthetic (layout, colors) of the app. It's currently minimal and bland. 
* I would implement my own REST API and deploy it separetely from the UI (perhaps with Heroku).
* I would store users in a db.
* I would implement React-Router as the feature-set increased allowing for more views.
