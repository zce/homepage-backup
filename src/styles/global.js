import { createGlobalStyle } from 'styled-components'
import { rhythm } from '../utils/typography'

export default createGlobalStyle`
  body {
    border: ${rhythm(0.25)} solid #e6e6e6;
    min-height: 100vh;
  }

  @media (min-width: 580px) {
    body {
      border-width: ${rhythm(0.5)};
    }
  }
`
