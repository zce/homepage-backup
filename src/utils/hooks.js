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
