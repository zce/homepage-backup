import Typography from 'typography'
import fairyGateTheme from 'typography-theme-fairy-gates'

// fairyGateTheme.baseFontSize = '12px'
const overrideStyles = fairyGateTheme.overrideStyles
fairyGateTheme.overrideStyles = (...args) => {
  const styles = overrideStyles(...args)
  delete styles.a.backgroundImage
  return styles
}

// Fairy Gatesn Theme https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-fairy-gates/src/index.js
const typography = new Typography(fairyGateTheme)

export const { scale, rhythm, options } = typography

export default typography
