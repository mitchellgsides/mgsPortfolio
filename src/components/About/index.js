import React, { useState } from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/colors'
import { PageTitle } from '../../Styles'
import mountain from '../../assets/icon-images/maroon_bells.jpg'
import elevate from '../../assets/icon-images/Elevate-reduced.jpg'

const AboutDetails = styled.div`
  padding: 0.5rem;
  border: 1px solid ${colors.gunmetal};
  height: 80vh;
  border-radius: 1rem;
  margin: 0.5rem;
  background-color: rgba(0, 0, 0, 0.2);
  @media (max-width: 600px) {
    width: 320px;
  }
`

const AboutText = styled.p`
  padding: 0.5rem;
  max-width: 500px;
  text-align: left;
`

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
    width: 320px;
  }
  overflow-x: auto;
  @media (max-width: 600px) {
  margin-top: 5rem;
  margin-bottom: 5rem;
  }
`

const StyledImgIcon = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 0.5rem;
  margin: 0.6rem;
  box-shadow: ${(p) => p.selected ? '0 4px 8px 0 rgba(200, 200, 200, 0.4), 0 6px 20px 0 rgba(200, 200, 200, 0.29)' : ''};

  @media (max-width: 600px) {
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgba(200, 200, 200, 0.4), 0 6px 20px 0 rgba(200, 200, 200, 0.29);
  }
`

const SelectedImage = styled.img`
  max-width: 70vw;
  max-height: 80vh;
  margin: 0.5rem;
  border-radius: 1rem;
  @media (max-width: 600px) {
    max-width: 320px;
  }
`
const ImageIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 70vw;
  padding: 0.25rem;
  margin: 0.25rem;
`

const ImageContainer = styled.div`
  margin-top: 1rem;
`

const pictures = [
  {
    title: 'Elevate Cycling Training Camp',
    alt: 'cycling on a mountain road',
    source: elevate
  },
  {
    title: 'Maroon Bells',
    alt: 'alpine mountain lake with Lydia',
    source: mountain
  }
]

export default function About (props) {
  const [selectedPic, setSelectedPic] = useState(null)

  return (
    <AboutContainer>
      <AboutDetails>
        <PageTitle>About</PageTitle>
        <AboutText>
        I'm a full stack developer and student of programming languages and technology. I have experience working with fast-paced, collaborative teams
        developing production-ready features very quickly. I've been successful with Agile methodologies, in particular at my first startup, where I really enjoyed the daily challenges of a rapidly evolving and
        demanding environment.
        Prior to development, I was a professional cyclist and coach, as well as a high school
        teacher of science and physical education. While coaching elite athletes using advanced
        analytical software targeted at individualizing coaching, I discovered a passion for coding, which led me to a career in software development.
        </AboutText>
        <AboutText>
          Before falling in love with the challenge of problem solving with code, I learned that a dedication to consistency and building
        on strong foundations with the help of skilled mentors leads to success, and I've carried these lessons forward
        into my pursuit of new skills and technical knowledge. When I'm not coding, I still enjoy training and
        racing my bike across the US with the development team I own and direct. To relax, I
        value spending time outdoors with my wife, Lydia, and our labrador retriever, Solomon. We
        particularly enjoy backpacking, camping, and hiking in the Rocky Mountains and across
        Texas.
        </AboutText>
      </AboutDetails>
      <ImageIconContainer>
        {pictures.map((pic, index) =>
          <StyledImgIcon selected={selectedPic && selectedPic.title === pic.title} onClick={() => setSelectedPic(selectedPic && selectedPic.title === pic.title ? null : pic)} key={`${pic.title}-${index}-icon`} src={pic.source} alt={pic.alt} />
        )}
      </ImageIconContainer>
      {selectedPic ? (
        <ImageContainer>
          <h5>{selectedPic.title}</h5>
          <SelectedImage src={selectedPic.source} alt={selectedPic.source} />
        </ImageContainer>
      )
        : null}
    </AboutContainer>
  )
}
