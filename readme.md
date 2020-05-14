# Setting up your project for react

## Initialise project

- type npm install
- you already have the package.json file

# project structure

this is a starter package for react.js
take a monent to look at the package.json file and you'll see a bunch of dependencies installed.

if you want to know more visit.

- for webpack and the dependancies installed
  - https://webpack.js.org/
- for react.js

  - https://reactjs.org/

## styles

- this project is configured to work with sass and css
  - /src/css/
  - /src/sass/
  - feel free to delete all the styles in /sass/ except for main.scss
  - this is linked in app.js
  - app.js is found in /src/components/App.js

## main file structure (root files required)

- the main entry for this project is

  - /src/index.js

  - this in turn renders out content to

    - /src/index.html

    - there is a container ["div id="app"] which is accessed by index.js

    - next app.js is the main file which is referenced by index.js

    - pages/
      - this is where pages are created there are some exampels home.js and page2.js

- favicon.ico is required for the project to run feel free to make your own version of this file.

- .gitignore

  - this file is used to exclude the dependencies installed in [node-modules] when pushing this file to the git repo

- readme.md

  - that is this file giving the basics of what this project includes

- prettierrc.json

  - this is a configuration file for prettier
  - read more here https://prettier.io/docs/en/configuration.html

- .babelrc

  - configuration file for babel
  - read more here https://babeljs.io/docs/en/config-files#file-relative-configuration

- webpack.config.js
  - webpack configuration file needed to run and compile this project
  - read more here https://webpack.js.org/configuration/

# scrpits

### youll find scripts in the panel [npm scripts]

- the scripts are prepared in package.json
- [this file was created with the command npm init -y]

- check scripts
  - used to cherck your scripts and see waht is being used
- update scripts
  - used to update the scripts [there is a warning if you might break your code]
- start
  - starts the local server with hot reloading
- build
  - react.js has 2 modes [ development and production ] it relies on webpack to bundle the files into a compiled site
  - the build command will compile a production [reacy to deploy site]
  - the start command will start up a local server for you to develop your website on.
