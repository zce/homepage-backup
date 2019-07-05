import { colors, breakpoints } from './theme'

export default ({ rhythm, scale }, options) => ({
  body: {
    border: `${rhythm(0.5)} solid ${colors.lighter}`,
    minHeight: '100vh'
  },
  'h1 a,h2 a,h3 a,h4 a,h5 a,h6 a': {
    fontWeight: options.headerWeight
  },
  a: {
    fontWeight: 400,
    color: colors.primary,
    textDecoration: 'none'
  },
  'a:hover': {
    opacity: 0.8,
    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 0.1em, ${colors.primary} 0.1em, ${colors.primary} 0.15em, rgba(0, 0, 0, 0) 0.15em)`
  },
  'a:active': {
    opacity: 0.95
  },
  blockquote: {
    padding: `${rhythm(1 / 2)} ${rhythm(3 / 4)}`,
    marginLeft: 0,
    marginRight: 0,
    borderLeft: `${rhythm(1 / 4)} solid ${colors.light}`,
    color: colors.muted
  },
  [breakpoints.down.sm]: {
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
