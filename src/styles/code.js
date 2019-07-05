import { colors } from './theme'

export default ({ rhythm }) => ({
  pre: {
    background: colors.lighter,
    borderRadius: '3px',
    lineHeight: 1.42,
    overflow: 'auto',
    wordWrap: 'normal', // So code will scroll on Safari.
    padding: rhythm(0.75)
  },
  'tt,code': {
    backgroundColor: colors.lighter,
    borderRadius: '3px',
    fontFamily:
      '"SFMono-Regular", Consolas,"Roboto Mono","Droid Sans Mono","Liberation Mono",Menlo,Courier,monospace',
    padding: 0,
    paddingTop: '0.2em',
    paddingBottom: '0.2em'
  },
  'pre code': {
    background: 'none',
    lineHeight: 1.42
  },
  // Add space before and after code/tt elements.
  'code:before,code:after,tt:before,tt:after': {
    letterSpacing: '-0.2em',
    content: '"\u00A0"'
  },
  // But don't add spaces if the code is inside a pre.
  'pre code:before,pre code:after,pre tt:before,pre tt:after': {
    content: 'none'
  },
  '.namespace': {
    opacity: 0.7
  },
  '.token.comment, .token.prolog, .token.doctype, .token.cdata': {
    color: '#708090'
  },
  '.token.punctuation': {
    color: '#999'
  },
  '.token.property, .token.tag, .token.boolean, .token.number, .token.constant, .token.symbol, .token.deleted': {
    color: '#905'
  },
  '.token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted': {
    color: '#690'
  },
  '.token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string': {
    color: '#a67f59'
  },
  '.token.atrule, .token.attr-value, .token.keyword': {
    color: '#07a'
  },
  '.token.function': {
    color: '#dd4a68'
  },
  '.token.regex, .token.important, .token.variable': {
    color: '#e90'
  },
  '.token.important, .token.bold': {
    fontWeight: 'bold'
  },
  '.token.italic': {
    fontStyle: 'italic'
  },

  '.token.entity': {
    cursor: 'help'
  }
})
