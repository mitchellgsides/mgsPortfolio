import React, { useState } from 'react'
import TechItem from './TechItem'
import styled from 'styled-components'
import css from '../../assets/icon-images/css3-icon.svg'
import javascript from '../../assets/icon-images/javascript-icon.svg'
import html from '../../assets/icon-images/html5-icon.png'
import jQuery from '../../assets/icon-images/jquery-icon.svg'
import git from '../../assets/icon-images/git-original.svg'
import reactIcon from '../../assets/icon-images/react-original.svg'
import node from '../../assets/icon-images/nodejs-original.svg'
import npm from '../../assets/icon-images/npm-original-wordmark.svg'
import redux from '../../assets/icon-images/redux-original.svg'
import typescript from '../../assets/icon-images/typescript-original.svg'
import postgresql from '../../assets/icon-images/postgresql-original.svg'
import github from '../../assets/icon-images/github-icon.svg'
import { PageTitle } from '../../Styles'
// import { colors } from '../../utils/colors'

const TechExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TechItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 60vw;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`

const TechNote = styled.div`
  padding: 0.5rem;
  margin: 1rem;
`

const TechDescription = styled.div`
  padding: 0.5rem;
  margin: 1rem;
  display: flex;
  width: 300px;
  height: 200px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  border-radius: 1rem;
  @media (max-width: 600px) {
  }
`

const TechIcon = styled.img`
    padding: 0.25rem;
    margin: 0.25rem;
    width: 75px;
    border-radius: 5px;
`

export default function TechExperience () {
  const technologies = [
    { title: 'React', description: 'Saas Application in the cybersecurity space with React, Redux, Node', icon: reactIcon },
    { title: 'Javascript', description: 'javascript', icon: javascript },
    { title: 'Redux', description: 'Redux', icon: redux },
    { title: 'TypeScript', description: 'TypeScript', icon: typescript },
    { title: 'Node', description: 'Node', icon: node },
    { title: 'CS3S', description: 'CSS3', icon: css },
    { title: 'HTML5', description: 'HTML5', icon: html },
    { title: 'jQuery', description: 'jQuery', icon: jQuery },
    { title: 'Git', description: 'VCS with experience using git in Jira and GitHub', icon: git },
    { title: 'PostgreSQL', description: 'PostgreSQL', icon: postgresql },
    { title: 'Npm', description: 'npm', icon: npm },
    { title: 'GitHub', description: 'GitHub', icon: github }
  ]
  const [selectedTech, setSelectedTech] = useState(null)
  return (
    <TechExperienceContainer>
      <PageTitle>Tech Experience</PageTitle>
      <TechDescription>
        {selectedTech ? (
          <>
            <TechIcon src={selectedTech.icon} />
            {selectedTech.description}
          </>
        )
          : <TechNote>Select an Icon to Learn More</TechNote>}
      </TechDescription>
      <TechItemsContainer>
        {technologies.map((tech, index) => <TechItem key={`${tech.title}-${index}`} tech={tech} title={tech.title} icon={tech.icon} currentlySelected={selectedTech} onSelect={setSelectedTech} />)}
      </TechItemsContainer>
    </TechExperienceContainer>
  )
}
