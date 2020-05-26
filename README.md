# Component Library

Start of a component library

Stack: Node (ES6+), Express, Webpack, React, Jest, and Enzyme that has Hot Module Reloading and can be deployed to Google App Engine with a single command. It has dev and prod builds, where the prod build outputs a minified, uglified bundle where images are encoded in Base64 directly into the css file.


## Installation

    yarn install

## Create a Development build

    yarn run buildDev

## Create a Production build

    yarn run buildProd

## Run the code on a local webserver

    yarn start

Then navigate to `http://localhost:8080`

## Deploy to Google App Engine Flex

    npm run deploy

## Run test

    npm test

## Generate coverage report

    npm run coverage

