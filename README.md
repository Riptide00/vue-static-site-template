
[![Known Vulnerabilities](https://snyk.io/test/github/Riptide00/vue-static-site-template/badge.svg?targetFile=package.json)](https://snyk.io/test/github/Riptide00/vue-static-site-template?targetFile=package.json)
[![Netlify Status](https://api.netlify.com/api/v1/badges/1c567290-48cd-4c1d-b3ad-10bb39933461/deploy-status)](https://app.netlify.com/sites/zealous-nightingale-80fed5/deploys)
# Vue static site template

This is my shot at a static site template for Vue.js.

It has simple a simple routing setup, a structure to add pages and a dynamic theme color system.

(By adjusting the '--main-color' CSS variable.)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Deployment

We deploy Vue.js projects on [Netlify](https://www.netlify.com).

Redirect all routes to 'index.html'.

(the '_Redirect' file handles this for Netlify, but if u host it somewhere else or locally keep this in mind).