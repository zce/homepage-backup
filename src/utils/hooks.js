/**
 * https://reactjs.org/docs/hooks-intro.html
 */

import { useStaticQuery, graphql } from 'gatsby'

// hooks/metadata.js
export const useMetadata = () =>
  useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          url
          title
          slogan
          description
          keywords
          logo
          cover
          author
          language
          menus {
            text
            link
          }
        }
      }
    }
  `).site.siteMetadata
