import React from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/colors'

const AboutContainer = styled.div`
  ${'' /* background-color: ${colors.gunmetal}; */}
`
const AboutText = styled.p`
  padding: 12px;
  max-width: 500px;
`

export default function About (props) {
  return (
    <AboutContainer>
      <h2>About Me</h2>
      <AboutText>
        I'm a full stack developer and student of programming languages and technology.
        Prior to development, I was a professional cyclist and coach, as well as a high school
        teacher in science and physical education. While coaching elite athletes using advanced
        analytical software targeted at individualizing coaching, I discovered a passion for nuanced software.
        With Bloc, I found an effective educational structure and a support system of mentors to
        acquire the knowledge and skills necessary to develop my own applications. I'm currently
        seeking careers where I can integrate non-technical knowledge with my passion
        for code to develop powerful and effective solutions across various domains.
          Before falling in love with the challenge of problem solving with code, I learned that a dedication to consistency and building
        on strong foundations with the help of skilled mentors leads to success, and I've carried these lessons forward
        into my pursuit of new skills and technical knowledge. When I'm not coding, I still enjoy training and
        racing my bike across the US with the development team I own and direct. To relax, I
        value spending time outdoors with my wife, Lydia, and our labrador retriever, Solomon. We
        particularly enjoy backpacking, camping, and hiking in the Rocky Mountains and across
        Texas.
      </AboutText>
    </AboutContainer>
  )
}
