# Node.js
Node.js
===
## What is Node.js
Node.js is an open source platform built on Chrome's JavaScript runtime and can be run on Microsoft Windows, OS X and Linux.

## What is Node.js used for?
Node.js is useful for easily building fast and scalable JavaScript applications.

## Install NPM on Windows
- [Download Node.js installer](https://nodejs.org/en/download/current/)
- Select Windows Installer to download the 64-bit version
- Run Node.js instalation and follow the instructions.
- Open the command prompt and check Node.js version with the command `node -v`.

TypeScript with Node.js
===
## Prerequisites
- Node.js installed on your computer.
- Basic understanding of Node.js.
- Basic understanding of Typescript.

## Setting up Node.js
### Check if the installation was successful.
```
node –v
```
### Create a project folder and point to this new project folder.
```
mkdir project-name
cd project-name
```
### Generate the Node.js package.json file.
```
npm init -y
```
This will generate file with the default values.
```
{
  "name": "nodejs",
  "version": "1.0.0",
  "description": "Node.js is an open source platform built on Chrome's JavaScript runtime ",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/user/repo.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/user/repo/issues"
  },
  "homepage": "https://github.com/user/repo#readme"
}
```
## Setting up Typescript
### Install the Typescript globally
```
npm install -g typescript
```
### Check if Typescript compiler is installed
```
tsc --version
```
### Create a Typescript config file
```
tsc --init
```
This automatically create `tsconfig.json` file with specific compile options

## Using Typescript with Node.js
Create dist folder:
```
mkdir dist
```
Run the following command to install typescript localy:
```
npm install -D typescript
```
Create an `index.ts` file inside `src` folder and write some code. For example:
```
function sumMe(nomOne:number, numTwo:number){
    return numOne + numTwo;
}
console.log(sumMe(2,5));
```
and run the following command to build Typescript into JavaScript:
```
tsc
```
Now execute the JavaScript code:
```
$ node dist/index.js
7
```

## Links
- [How to use TypeScript with Node.js](https://www.section.io/engineering-education/how-to-use-typescript-with-nodejs/)
- Official Website of [Node.js](https://nodejs.org/)
- [Guides](https://nodejs.org/en/docs/guides/)