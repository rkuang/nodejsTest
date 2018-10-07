# Node.js Test

This repository is just for self reference and notes while I familiarize myself with Node.js.

## Why Node.js

Node.js provides <b>single-threaded, non-blocking, asynchronous programming</b> to your web app.

### Functionalities
* Generate dynamic page content
* Interact with the file system on the server
* Collect form data
* Interact with database on the server


## Getting Started

Node.js files are denoted by the extension `.js`. They contain tasks that will be executed on certain events. Typically, an event is fired by accessing a specified port.

Node modules can be stored in the folder `node_modules`. When doing so, you can simply do `require('my_module')` instead of specifying the directory as well. Make sure you don't name your module "`module`", that's reserved by Node.js.

`npm init`
* Creates `package.json`, which holds various metadata relevant to the project
    * Used to give information to `npm` that allows it to identify the project as well as handle dependencies.

