# Base Template - Web, No UI
A basic webpack bundler to run code


## *"Just let me run the thing!"*
```
yarn
yarn run watch
```
*There! Ya happy?*


## Commands

Building 

```
// build the UI (dev mode)
yarn run buildDev

//build the UI (prod mode)
yarn run buildProd

// build the webpack server (dev mode)
// will build the UI, no watch feature
yarn run devServer

// DEV MODE
// This is what you want
yarn run watch
// build the dev server which will build the UI


//PROD
yarn run buildServer
yarn run build buildProd
// Deploy the /dist folder

```


## Testing
```
yarn run test

and

yarn run coverage
//this is a base boiler. Adding tests is your job.
```

## Utility
```
//nuke the built files
yarn run clean

//start the prod build
yarn run start
```