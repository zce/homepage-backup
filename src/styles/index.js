/**
 * Typography.js
 */

import Typography from 'typography'

import global from './global'
import code from './code'
import sample from './sample'

import * as theme from './theme'

// load module styles as plugin
// TODO: plugin toolbox
theme.options.plugins = [global, code, sample]

const styles = new Typography(theme.options)

// export utilities
export const { colors, breakpoints } = theme
export const { options, rhythm, scale } = styles

// for gatsby-plugin-typography
export default styles
