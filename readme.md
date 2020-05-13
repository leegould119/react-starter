#  Setting up your project for react

## Initialise npm
- open the console
- type [npm init -y]
- this will generate a package.json file

## Install webpack and webpack cli 

- type [npm install webpack webpack-cli --save-dev]

### Create the following file structure 

- root of the project 
- |- index.html
- |- / src
-    |-index.js


## Webpack dev server 

- npm install webpack-dev-server

## React and react dom 

- npm install react react-dom

## Install core and Javscript loaders

- npm install --save-dev @babel/core babel-loader @babel/preset-env @babel/preset-react

  - Babel is a third party library that is used to convert ECMAScript 2015+ code into a backward-compatible version of JavaScript in current and older browsers or environments.

  - babel/core: The core babel library
  - babel/preset-env: Is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s)This is also known as browser polyfills
  - babel/preset-react: Transform React JSX into regular JavaScript code
  - babel-loader: Webpack loader helper

## Install CSS loaders

- npm install --save-dev css-loader style-loader postcss-loader --save-dev

  - CSS-loader: Handle CSS files
  - style-loader: The style-loader takes CSS and actually inserts it into the page so that the styles are active on the page.
  - postcss-loader: Will process CSS to work on older browsers



## Install Image loaders
- npm install --save-dev file-loader url-loader

 - URL-loader: Will load the image files. Url loader depends on file-loader

## Install Plugins

-npm install --save-dev autoprefixer
 - autoprefixer: Autoprefixer is a PostCSS plugin which parses your CSS and adds vendor prefixes
 
-npm install --save-dev html-webpack-plugin
 - HTML-webpack-plugin: The HtmlWebpackPlugin simplifies the creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation.


 # Create a webpack.config.js in the root folder
- entry: webpack will start from index.js as the entry point
- output: all files will be bundled into a file called  bundle.js and copied to /dist folder
- resolve: webpack will resolve to .js and .jsx extensions
- module: this are the loader rules that will be considered. For js files, webpack should use the babel-loader. For css, use style-loader with css-loader and postcss-loader. Finally for images, use the url-loader.
- plugins: use the HtmlWebpackPlugin with index.html to inject the body

