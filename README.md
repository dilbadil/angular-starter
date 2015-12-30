# README #

This Pluto ui.

### Get started ###

* Clone this repo to your machine.
* Copy environment example
```php
cp env.js.example env.js
```
* Install dependencies.
```php
npm install
bower install
```
* Run Gulp to generate scripts, styles
```php
gulp
```

### Working ###

* Create new branch for each feature or bug or revision.
to access the environments variable you can use: 
```php
git branch -b feature/my-work-feature
git branch -b bug/airport-cache
```

* Always run gulp watch
```php
gulp watch
```
If the server is production add --production option
```php
gulp --production
gulp watch --production
```

* Running tests
```php
node_modules/karma/bin/karma start
```
or
```php
karma start
```
