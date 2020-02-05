import React from 'react'

export default function ContactItem (props) {
  const { title } = props
  console.log(props)
  return (
    <div>
      <h2>Contact</h2>
      <h5>{title}</h5>
    </div>
  )
}
