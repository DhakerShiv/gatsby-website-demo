module.exports = {
  siteMetadata: {
    title: 'Gatsby Contentstack starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-contentstack',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-contentstack',
      options:{
        'api_key':'blt06040edec3ef3ebf',
        'access_token':'blt0b44a6a6076336d5',
        'environment':'production'
      },
    },
    'gatsby-plugin-offline',
  ],
}
