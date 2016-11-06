# One page website structure

Initial structure to develop one page website

## What I using?

[Gulp](http://gulpjs.com)<br />
[Sass](http://sass-lang.com)<br />
[Browsersync](https://www.browsersync.io)<br />
[Bower](https://bower.io/)<br />

## Gulp plugins

[gulp-sass](https://www.npmjs.com/package/gulp-sass)<br />
[gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps)<br />
[gulp-watch](https://www.npmjs.com/package/gulp-watch)<br />
[gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css)<br />
[gulp-rename](https://www.npmjs.com/package/gulp-rename)<br />
[gulp-concat](https://www.npmjs.com/package/gulp-concat)<br />
[gulp-uglify](https://www.npmjs.com/package/gulp-uglify)<br />
[gulp-delete-lines](https://www.npmjs.com/package/gulp-delete-lines)<br />
[gulp-insert-lines](https://www.npmjs.com/package/gulp-insert-lines)<br />
[gulp-plumber](https://www.npmjs.com/package/gulp-plumber)<br />

## Installation

```
npm install
```

```
bower install
```

## Command line

# To dev...

```
gulp
``` 
This command will start a server, load the page in Google Chrome and watch all files to reload the browser when saved.

# To prepare files for production...<br />

```
gulp production
```

This command will create a directory called <i>production</i> in the root of the project with the files and folders inside it.