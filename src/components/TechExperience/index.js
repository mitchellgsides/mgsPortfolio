import React, { useState } from 'react'
import TechItem from './TechItem'
import styled from 'styled-components'
import css from '../../assets/icon-images/css3-icon.svg'
import javascript from '../../assets/icon-images/javascript-icon.svg'
import html from '../../assets/icon-images/html5-icon.png'
import jQuery from '../../assets/icon-images/jquery-icon.svg'
import git from '../../assets/icon-images/git-original.svg'
import reactIcon from '../../assets/icon-images/react-original.svg'
// import node from '../../assets/icon-images/nodejs-original.svg'
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
    { title: 'React', description: 'Saas Application in the cybersecurity space primarily using React and Redux to build simple, clean, and effective UI through the use of reusable and customizable components', icon: reactIcon },
    { title: 'Javascript', description: 'JavaScript experience with core JS data structures and common algorithms including some experience with OOD in JavaScript', icon: javascript },
    { title: 'Redux', description: 'I used Redux for React state management, using  a complicated RxJs, epic, action, and reducer flow to handle asynchronous streaming across multiple components in a single page web application', icon: redux },
    { title: 'TypeScript', description: 'Primarily used for bug prevention, I\'ve used TypeScript to tighten up React applications and make catching, fixing, and preventing bugs simpler', icon: typescript },
    { title: 'CSS3', description: 'CSS3 for a variety of clean UI. With React, I primarily used styled-components, a library for building and managing component styles written in CSS-like format, and Material-UI, Google\'s user interface library', icon: css },
    { title: 'HTML5', description: 'Layouts, inputs, and other HTML5 tags for both standalone web pages and as part of development in React', icon: html },
    { title: 'jQuery', description: 'I used jQuery to build a simple quiz application, which you can check out on the projects page', icon: jQuery },
    { title: 'Git', description: 'I use Git for Version control both personally and professionally, with experience using git in conjunction with Jira (Bitbucket) and GitHub', icon: git },
    { title: 'PostgreSQL', description: 'For fullstack applications, I used PostgreSQL as my primary database software', icon: postgresql },
    { title: 'npm', description: 'npm and node development packages have powered most of my projects and professional builds', icon: npm },
    { title: 'GitHub', description: 'GitHub, including issues, PR and code review, all linked to Agile methodologies and workflow', icon: github }
  ]
  const [selectedTech, setSelectedTech] = useState(null)
  return (
    <TechExperienceContainer>
      <PageTitle>Tech Experience</PageTitle>
      <TechDescription>
        {selectedTech ? (
          <>
            <TechIcon src={selectedTech.icon} />
            <div style={{ display: 'flex', flexDirection: 'column', margin: '0.5rem' }}>
              <h3>{selectedTech.title}</h3>
              {selectedTech.description}
            </div>
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
