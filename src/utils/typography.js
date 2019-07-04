/**
 * https://github.com/KyleAMathews/typography.js
 *
 * Themes:
 * - typography-theme-fairy-gates
 * - typography-theme-funston
 */

import Typography from 'typography'
import theme from 'typography-theme-moraga'
import CodePlugin from 'typography-plugin-code'

theme.plugins = [new CodePlugin()]

// theme.baseFontSize = '16px'
// const themeOverride = theme.overrideStyles
// theme.overrideStyles = (...args) => {
//   return themeOverride(...args)
// }

const typography = new Typography(theme)

export const { scale, rhythm, options } = typography

export default typography
