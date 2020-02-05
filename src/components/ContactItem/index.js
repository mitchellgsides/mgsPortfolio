import React from 'react'
import styled from 'styled-components'

const ContactItemContainer = styled.div`
  padding: 1rem;
`

export default function ContactItem (props) {
  const { title, showDescription } = props
  return (
    <ContactItemContainer>
      {showDescription ? null : title}
      {showDescription ? <div>You can find my {title} here: <div>Icon</div> </div> : null}
    </ContactItemContainer>
  )
}
