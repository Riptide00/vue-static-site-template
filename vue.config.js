// vue.config.js
module.exports = {
    css: {
        loaderOptions: {
            scss: {
                additionalData: `@import "~@/reset.scss"; @import "~@/variables.scss";`
            }
        }
    }
}