/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const { metadata } = require('./config')

module.exports = {
  siteMetadata: {
    ...metadata,
    // for gatsby-plugin-sitemap
    siteUrl: metadata.url
  },
  plugins: [
    // source
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`
      }
    },
    // transformer
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: `attachments`
            }
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-prismjs`
        ]
      }
    },
    `gatsby-transformer-yaml`,
    `gatsby-transformer-sharp`,
    // plugin
    // `gatsby-plugin-sharp`, useless?
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles`
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#1ca086`,
        showSpinner: false
      }
    },
    // `gatsby-plugin-feed`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`
  ],
  // https://www.gatsbyjs.org/docs/path-prefix/
  // pathPrefix: '',
  mapping: {
    // https://www.gatsbyjs.org/docs/gatsby-config/#mapping-node-types
    'MarkdownRemark.frontmatter.authors': `AuthorsYaml`,
    'MarkdownRemark.frontmatter.categories': `CategoriesYaml`,
    'MarkdownRemark.frontmatter.tags': `TagsYaml`,
  }
}
