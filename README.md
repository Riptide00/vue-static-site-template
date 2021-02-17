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