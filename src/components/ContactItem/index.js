import React from 'react'
import styled from 'styled-components'
import LinkedIn from '../../assets/icon-images/linkedin-icon.svg'
import GitHub from '../../assets/icon-images/github-icon.svg'
import Gmail from '../../assets/icon-images/gmail-icon.png'
import { colors } from '../../utils/colors'

const ContactItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const ContactItem = styled.a`
  font-size: 35px;
  text-decoration: none;
  color: ${colors.light};
  &:hover {
    color: ${colors.light};
  }
`

const ContactIcon = styled.img`
  color: whitesmoke;
  fill: whitesmoke;
  padding: 1rem;
`

export default function ContactPage (props) {
  return (
    <ContactItemContainer>
      <ContactItem href='https://linkedin.com/in/mitchell-sides/' rel='noopener noreferrer' target='_blank'>
        <ContactIcon src={LinkedIn} height='30' />
      </ContactItem>

      <ContactItem href='https://github.com/mitchellgsides' rel='noopener noreferrer' target='_blank' class='soc-icon'>
        <ContactIcon src={GitHub} height='30' />
      </ContactItem>

      <ContactItem href='mailto:mitchellgsides@gmail.com' rel='noopener noreferrer' target='_blank'>
        <ContactIcon src={Gmail} height='30' />
      </ContactItem>
    </ContactItemContainer>
  )
}
