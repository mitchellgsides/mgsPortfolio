import React from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/colors'
import { Icon } from '../Icon/index'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const ContactItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const ContactItem = styled.a`
  font-size: 1.5rem;
  text-decoration: none;
  color: ${colors.light};
  &:hover {
    color: ${colors.light};
  }
`

export default function ContactPage (props) {
  return (
    <ContactItemContainer>
      <ContactItem href='https://linkedin.com/in/mitchell-sides/' rel='noopener noreferrer' target='_blank'>
        <Icon icon={faLinkedin} size='lg' />
      </ContactItem>

      <ContactItem href='https://github.com/mitchellgsides' rel='noopener noreferrer' target='_blank'>
        <Icon icon={faGithub} size='lg' />
      </ContactItem>

      <ContactItem href='mailto:mitchellgsides@gmail.com' rel='noopener noreferrer' target='_blank'>
        <Icon icon={faEnvelope} size='lg' />
      </ContactItem>
    </ContactItemContainer>
  )
}
