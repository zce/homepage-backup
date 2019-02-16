export default props => (
  <>
    <h1 style={{
      fontFamily: 'Againts',
      fontSize: '5rem',
      fontWeight: 100,
      margin: '0 0 1rem',
      color: '#fff',
      textShadow: '0 0 .5rem rgba(0, 0, 0, .8)',
      visibility: 'hidden',
      animation: 'fadeIn 1s ease .25s forwards'
    }}>{props.children}</h1>
  </>
)