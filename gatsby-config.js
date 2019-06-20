/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    url: `http://localhost:8000/`,
    title: `Gatsby Starter Blog`,
    description: `A starter blog demonstrating what Gatsby can do.`,
    author: `Lei Wang`,
    social: {
      twitter: `w_zce`,
      github: `zce`
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-copy-linked-files`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#ff0',
        showSpinner: true
      }
    },
    {
      resolve: `gatsby-plugin-react-helmet`
    }
  ]
}
