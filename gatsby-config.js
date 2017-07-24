module.exports = {
  siteMetadata: {
    title: 'Stormtour'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
  ]
}
