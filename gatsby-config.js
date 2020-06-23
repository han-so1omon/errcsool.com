require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `errcsool | -`,
    author: `Eric Solomon`,
    description: `A whole bunch of stuff.`,
    siteUrl: `https://errcsool.com`,
    social: {
      github: `han-so1omon`,
      email: `errcsool@engineer.com`,
      stackoverflow: `errolflynn`,
    },
  },
  plugins: [
    'gatsby-plugin-top-layout',
    {
      resolve: 'gatsby-plugin-material-ui',
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
      {
          resolve: `gatsby-source-cosmicjs`,
          options: {
              bucketSlug: process.env.COSMIC_BUCKET_SLUG,
              objectTypes: [ 'posts', 'projects', 'settings' ],
              apiAccess: {
                  read_key: process.env.COSMIC_READ_KEY,
              },
              localMedia: true
          }
      },
      {
          resolve: `gatsby-plugin-google-analytics`,
          options: {
              trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
          }
      },

  ],
};
