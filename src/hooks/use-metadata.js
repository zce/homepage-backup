import { useStaticQuery, graphql } from 'gatsby'

export default () =>
  useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          slogan
          description
          logo
          cover
          author {
            name
            email
            url
          }
          menus {
            text
            link
          }
        }
      }
    }
  `).site.siteMetadata
