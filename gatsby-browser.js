/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// Use CSS-in-JS instead
// import './src/styles/global.css'

// or:
// require('./src/styles/global.css')

// https://www.gatsbyjs.org/docs/browser-apis/#wrapRootElement
// https://www.gatsbyjs.org/blog/2019-01-31-using-react-context-api-with-gatsby/
export const wrapRootElement = ({ element }) => element

// https://www.gatsbyjs.org/docs/browser-apis/#wrapPageElement
export const wrapPageElement = ({ element, props }) => element
