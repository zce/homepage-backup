export default () => (
  <>
    <svg className="logo" viewBox="0 0 472 450" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="shadow-filter" x="-12.7%" y="-13.4%" width="125.4%" height="126.7%" filterUnits="objectBoundingBox">
          <feOffset dx="0" dy="0" in="SourceAlpha" result="offset-outer"></feOffset>
          <feGaussianBlur stdDeviation="20" in="offset-outer" result="blue-outer"></feGaussianBlur>
          <feComposite in="blue-outer" in2="SourceAlpha" operator="out" result="blue-outer"></feComposite>
          <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 1 0" type="matrix" in="blue-outer"></feColorMatrix>
        </filter>
      </defs>
      <mask id="mask" fill="white">
        <polygon points="472 114.26 203.028853 335.74 407.1 335.74 472 449.48 64.9 449.48 0 335.74 268.971147 114.26 64.9 114.26 0 0.52 407.1 0.52"></polygon>
      </mask>
      <g id="background" mask="url(#mask)" fill="#339AF0">
        <rect x="0" y="0" width="472" height="449"></rect>
      </g>
      <g id="shadow" mask="url(#mask)">
        <polygon points="0 335.74 64.9 449.48 472 114.26 407.1 0.52" filter="url(#shadow-filter)"></polygon>
      </g>
    </svg>
    <style jsx>{`
    .logo {
      width: 12.5rem;
      height: 12.5rem;
      margin: 0 auto 4rem;
      animation: fadeIn 1s ease 0s forwards;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    `}</style>
  </>
)