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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: 'content'
      }
    },
    // transformer
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800
            }
          },
          'gatsby-remark-responsive-iframe',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-autolink-headers',
          'gatsby-remark-smartypants',
          'gatsby-remark-prismjs'
        ]
      }
    },
    'gatsby-transformer-yaml',
    'gatsby-transformer-sharp',
    // plugin
    // 'gatsby-plugin-sharp', useless?
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/styles'
      }
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        // sync with ./src/styles/theme.js:9:12
        color: '#ff6b6b'
      }
    },
    // 'gatsby-plugin-feed',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline'
  ],
  // https://www.gatsbyjs.org/docs/path-prefix/
  // pathPrefix: '',
  mapping: {
    // https://www.gatsbyjs.org/docs/gatsby-config/#mapping-node-types
    'MarkdownRemark.frontmatter.authors': 'AuthorsYaml',
    'MarkdownRemark.frontmatter.categories': 'CategoriesYaml',
    'MarkdownRemark.frontmatter.tags': 'TagsYaml',
  }
}
