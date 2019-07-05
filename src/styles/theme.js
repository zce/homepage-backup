import colors from 'open-color'

/**
 * Site theme
 */
const theme = {
  // quaternary, quinary, senary, septenary, octonary, nonary, denary
  colors: {
    primary: colors.red[5],
    secondary: colors.grape[4],
    tertiary: colors.pink[4],
    darkest: colors.gray[9],
    darker: colors.gray[8],
    dark: colors.gray[7],
    muted: colors.gray[6],
    light: colors.gray[3],
    lighter: colors.gray[1],
    lightest: colors.gray[0]
  },
  // https://getbootstrap.com/docs/4.3/layout/overview/#responsive-breakpoints
  breakpoints: {
    up: {
      // Small devices (landscape phones, 576px and up)
      sm: '@media (min-width: 576px)',
      // Medium devices (tablets, 768px and up)
      md: '@media (min-width: 768px)',
      // Large devices (desktops, 992px and up)
      lg: '@media (min-width: 992px)',
      // Extra large devices (large desktops, 1200px and up)
      xl: '@media (min-width: 1200px)'
    },
    down: {
      // Extra small devices (portrait phones, less than 576px)
      sm: '@media (max-width: 575.98px)',
      // Small devices (landscape phones, less than 768px)
      md: '@media (max-width: 767.98px)',
      // Medium devices (tablets, less than 992px)
      lg: '@media (max-width: 991.98px)',
      // Large devices (desktops, less than 1200px)
      xl: '@media (max-width: 1199.98px)'
    }
  }
}

/**
 * Typography.js options
 *
 * See: https://github.com/KyleAMathews/typography.js#configuration
 */
const options = {
  title: 'zce.me',
  baseFontSize: '18px',
  baseLineHeight: 1.56,
  googleFonts: [
    {
      name: 'Source Sans Pro',
      styles: ['200', '400', '400i', '700']
    }
  ],
  scaleRatio: 2.5,
  headerFontFamily: ['Source Sans Pro', 'sans-serif'],
  bodyFontFamily: ['Source Sans Pro', 'sans-serif'],
  headerColor: theme.colors.darker,
  bodyColor: theme.colors.dark,
  headerWeight: 200,
  bodyWeight: 400,
  boldWeight: 700,
  blockMarginBottom: 1,
  includeNormalize: true
}

export default Object.assign(options, theme)
