// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwindcss = require("tailwindcss")



module.exports = {
  siteName: 'BENZ & NAY STORE',
  plugins: [
    {
      use: '@gridsome/source-graphql',
      options: {
        url:
        'https://api-ap-northeast-1.graphcms.com/v2/ckroytqkv02gj01xj38244y0s/master',
        fieldName: 'gcms',
        typeName: 'gcmsTypes'
      }
    }
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss
        ],
      },
    },
  }
}
