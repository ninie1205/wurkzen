module.exports = {
  css: {
    loaderOptions: {
      sass: {
         sassOptions: {
            prependData: `
               @import "@/scss/_colors.scss";
               @import "@/scss/_fonts.scss";
            `
         }
      }
    }
  }
}