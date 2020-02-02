import React from 'react'

export default function DemoAppDisplay (props) {
  const {
    title,
    link,
    name
  } = props
  return (
    <div style={{ maxWidth: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>
      {title}
      <a style={{ textDecoration: 'none', color: 'red' }} href={link} rel='noopener noreferrer' target='_blank'>{name} Demo</a>
    </div>
  )
}
