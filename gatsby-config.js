module.exports = {
  siteMetadata: {
    title: `CV Maher Chaabani`,
    description: `Mini Projet Cloud Ciomputing`,
    author: `@mahernenjo`,
  },
  plugins: [
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `resume`,
        path: `./resume`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
   {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#d3cadb`,
        theme_color: `#d3cadb`,
        display: `minimal-ui`,
        icon: `src/images/MC.jpg`, // This path is relative to the root of the site.
      },
    },

  ],
};
