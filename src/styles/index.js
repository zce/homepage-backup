/**
 * https://github.com/KyleAMathews/typography.js
 *
 * Themes:
 * - typography-theme-fairy-gates
 * - typography-theme-funston
 */

import Typography from 'typography'
import theme from './theme'
import global from './global'
import code from './code'
import sample from './sample'

theme.plugins = [global, code, sample]

const styles = new Typography(theme)

export const { scale, rhythm, options } = styles

// for gatsby-plugin-typography
export default styles
