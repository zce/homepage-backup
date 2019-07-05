/**
 * Site theme
 */

import oc from 'open-color'

// quaternary, quinary, senary, septenary, octonary, nonary, denary
export const colors = {
  primary: oc.red[5],
  secondary: oc.grape[4],
  tertiary: oc.pink[4],
  darkest: oc.gray[9],
  darker: oc.gray[8],
  dark: oc.gray[7],
  muted: oc.gray[6],
  light: oc.gray[3],
  lighter: oc.gray[1],
  lightest: oc.gray[0]
}

// https://getbootstrap.com/docs/4.3/layout/overview/#responsive-breakpoints
export const breakpoints = {
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

// https://github.com/KyleAMathews/typography.js#configuration
export const options = {
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
  headerColor: colors.darker,
  bodyColor: colors.dark,
  headerWeight: 200,
  bodyWeight: 400,
  boldWeight: 700,
  blockMarginBottom: 1,
  includeNormalize: true
}
