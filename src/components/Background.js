import React, { useState } from 'react'

import './Background.css'

// `https://picsum.photos/${window.innerWidth}/${window.innerHeight}?random&blur`
// `https://source.unsplash.com/random/${window.innerWidth}x${window.innerHeight}`

export default () => {
  const [loading, setLoading] = useState(true)

  const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
  const img = new window.Image()
  img.src = `https://source.unsplash.com/random/${width}x${height}`
  img.onload = () => setLoading(false)

  const classes = ['background']
  loading && classes.push('loading')

  return (
    <div className={classes.join(' ')} style={{ backgroundImage: `url(${img.src})` }} />
  )
}
