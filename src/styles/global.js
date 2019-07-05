/**
 * vr
 * - rhythm
 * - establishBaseline
 * - linesForFontSize
 * - adjustFontSizeTo
 * - scale
 */
export default ({ rhythm, scale }, options) => ({
  body: {
    border: `${rhythm(0.5)} solid ${options.colors.lighter}`,
    minHeight: '100vh'
  },
  'h1 a,h2 a,h3 a,h4 a,h5 a,h6 a': {
    fontWeight: options.headerWeight
  },
  a: {
    fontWeight: 400,
    color: options.colors.primary,
    textDecoration: 'none'
  },
  'a:hover': {
    opacity: 0.85,
    textDecoration: 'underline'
  },
  blockquote: {
    padding: `${rhythm(1 / 2)} ${rhythm(3 / 4)}`,
    marginLeft: 0,
    marginRight: 0,
    borderLeft: `${rhythm(1 / 4)} solid ${options.colors.light}`,
    color: options.colors.muted
  },
  [options.breakpoints.down.sm]: {
    body: {
      borderWidth: rhythm(0.25)
    },
    blockquote: {
      marginLeft: rhythm(-3 / 4),
      marginRight: 0,
      paddingLeft: rhythm(1 / 2)
    },
    table: {
      ...scale(-1 / 5)
    }
  }
})
