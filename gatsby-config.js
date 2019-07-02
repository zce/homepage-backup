/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    url: `http://localhost:8000`,
    lang: 'en',
    title: `Lei's Personal Website`,
    slogan: `MAKE IT BETTER!`,
    description: `Thoughts, stories and ideas.`,
    cover: `https://img.zce.me/cover/00.jpg`,
    author: {
      name: `Lei Wang`,
      email: `w@zce.me`,
      url: `https://zce.me`
    }
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
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#1ca086`,
        showSpinner: false
      }
    },
    `gatsby-plugin-offline`
  ],
  mapping: {
    // https://www.gatsbyjs.org/docs/gatsby-config/#mapping-node-types
    'MarkdownRemark.frontmatter.authors': `AuthorsYaml`,
    'MarkdownRemark.frontmatter.categories': `CategoriesYaml`,
    'MarkdownRemark.frontmatter.tags': `TagsYaml`,
  }
}
