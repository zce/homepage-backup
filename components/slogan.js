export default props => (
  <p style={{
    fontFamily: 'Againts',
    fontSize: '2rem',
    fontWeight: 100,
    margin: '0 0 4rem',
    color: '#eee',
    textShadow: '0 0 .5rem rgba(0, 0, 0, .6)',
    visibility: 'hidden',
    animation: 'fadeIn 1s ease .25s forwards'
  }}>{props.children}</p>
)