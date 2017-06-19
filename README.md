# ExtReact Library Example

This example project shows how to multiple libraries of React components based on ExtReact.  This project is a lerna monorepo containing three packages:

* my-grids - A library of React data grids components built with ExtReact.
* my-forms - A library of React forms components built with ExtReact.
* my-app - An app that uses my-lib.  Note that my-lib does not list ext-react or any related Sencha packages as dependencies.

## Environment Setup

This project requires a valid license or trial of Sencha ExtReact.  If you have not already, run the following to sign into Sencha's npm registry:

```
npm login --registry=https://npm.sencha.com --scope=@extjs
```

## Running

```
npm install
npm start
```

## Screenshot

![screenshot](screenshot.png)

