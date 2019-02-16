// import Link from 'next/link'

export default props => (
  <>
    <ul className="nav">
      {props.links.map(item => (
        <li key={item.href}><a href={item.href} target="_blank">{item.title}</a></li>
      ))}
    </ul>
    <style jsx>{`
      .nav {
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
        justify-content: center;
        visibility: hidden;
        animation: fadeIn 1s ease .5s forwards;
      }

      .nav li + li::before {
        margin: .5rem;
        content: "·";
        color: #aaa;
      }

      .nav a {
        font-family: 'Exo 2', sans-serif;
        transition: color .5s, text-shadow .5s;
        text-decoration: none;
        color: #99e9f2;
      }

      .nav a:hover {
        color: #22b8cf;
        text-shadow: 0 0 .5rem rgba(255, 255, 255, .5);
      }

      .nav a:focus {
        color: #3bc9db;
        outline: 0;
        text-shadow: 0 0 .5rem rgba(255, 255, 255, .5);
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(2rem) scale(.8);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
          visibility: visible;
        }
      }
    `}</style>
  </>
)