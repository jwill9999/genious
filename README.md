# Genious starter Developer Framework

## Prerequisites

This theme relies on **NPM** and **Composer** in order to load dependencies and packages.
**Gulp** should always be running and watching during the development process, in order to properly compile and update files.

* Install [Composer](https://getcomposer.org/)
* Install [Node](https://nodejs.org/)
* Install [Gulp](http://gulpjs.com/)

## Installation

* Move the `.env.example` to your WordPress root directory, rename it as `.env`, and setup your website variables
* Move the `wp-config.example.php` to your WordPress root directory and rename it as `wp-config.php`, to replace the default one
* Open a Terminal window on the location of the theme folder
* Execute `composer install`
* Execute `npm install`

## Gulp

* Run `npm run gulp` at the beginning of every development session to run and watch files for changes
* This will compile you files into the public folder ready for production deployment.
* ONLY CHANGE FILES situated inside the assets folder. Here you will find Javascript and sass files. Your personal added Javascript can be added to the genious.js file. All sass files are imported into the index.scss file

```
> git clone https://github.com/jwill9999/recipe-app.git
> cd recipe-app
> npm install
> ng serve

To Log In to example project

> User :      admin@admin.com
> password:   123456
```

## Project View

![](./src/assets/images/recipebook.png)

# RecipeApp

A comprehensive Angular application covering all of the Angular 4 updates. The project focuses on the key features and skills required to successfully implement a modern angular application. The code is commented for easy reference and links below provide additional resources. Fully functional CRUD operations with http access using RxJs observables.

## Key features

> Genious Wordpress developer theme

> Gulp task runner

> browser-sync for live reloading in development

> Sass CSS compilation

> Uses Underscore Base theme

> Bootstrap 4

> The latest jQuery library

> Normalizer.js

> CDN delivered core assets

> HTML5 Ready

> Use Global Environmental Variables for easy wp-configuration.

> Uses DotEnv

... to name a few

## Links

[Underscore base theme](https://underscores.me/)

[Bootstrap 4](https://getbootstrap.com/)

[getComposer](https://getcomposer.org/)

[Composer Packages](https://packagist.org/)

[DotEnv package required ](https://packagist.org/packages/vlucas/phpdotenv)

[Uses Normaize css](https://github.com/necolas/normalize.css/)

This project was generated with [Underscore.io](https://underscores.me/), [Bootstrap 4](https://getbootstrap.com/), as well as [vlucas/phpdotenv](https://packagist.org/packages/vlucas/phpdotenv)

<hr>

## Development server
