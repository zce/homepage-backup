import openColors from './open-colors'

const logo = document.querySelector('.logo')
const color = logo.querySelector('#color')

const interval = 2222
const now = Date.now() / interval

const change = (type, level) => {
  console.log('%cOC- %c  %c %c  ',
    `color: ${openColors[0][7]}`,
    `border-radius: 3px; background: ${openColors[type][7]}`,
    '',
    `border-radius: 3px; background: ${openColors[0][level]}`
  )
  color.setAttribute('fill', openColors[type][level])
}

change(~~(now / 10 % 13), ~~(now % 10))

logo.addEventListener('click', () => change(~~(Math.random() * 13), ~~(Math.random() * 10)))
