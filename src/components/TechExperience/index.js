import React, { useState, useRef } from 'react'
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
import { motion } from 'framer-motion'

const TechExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
`

const TechItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media (max-width: 600px) {
    position: relative;
    height: 200px;
    overflow-y: auto;
    width: 100%;
  }
`

const TechDescription = styled.div`
  padding: 0.25rem;
  margin: 0.25rem;
  display: flex;
  flex-direction: row;
  height: 250px;
  max-width: 500px;
  border-radius: 1rem;
  @media (max-width: 600px) {
    max-width: 320px;
    height: 200px;
  }
`
const TechNote = styled.div`
  padding: 0.5rem;
  margin: 1rem;
`

const TechContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
`
const TechDetailsContainer = styled.div`
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`
const TechIcon = styled.img`
    padding: 0.25rem;
    margin: 0.25rem;
    width: 75px;
    border-radius: 5px;
`

export const technologies = [
  { title: 'React', description: 'Saas Application in the cybersecurity space primarily using React and Redux to build simple, clean, and effective UI through the use of reusable and customizable components', icon: reactIcon },
  { title: 'Javascript', description: 'JavaScript experience with core JS data structures and common algorithms including some experience with OOD in JavaScript', icon: javascript },
  { title: 'Redux', description: 'I used Redux for React state management, using  a complicated RxJs, epic, action, and reducer flow to handle asynchronous streaming across multiple components in a single page web application', icon: redux },
  { title: 'TypeScript', description: 'Primarily used for bug prevention, I\'ve used TypeScript to tighten up React applications and make catching, fixing, and preventing bugs simpler', icon: typescript },
  { title: 'CSS3', description: 'CSS3 for a variety of clean UI. With React, I primarily used styled-components, a library for building and managing component styles written in CSS-like format, and Material-UI, Google\'s user interface library', icon: css },
  { title: 'HTML5', description: 'Layouts, inputs, and other HTML5 tags for both standalone web pages and as part of development in React', icon: html },
  { title: 'jQuery', description: 'I used jQuery to build a simple quiz application, which you can check out on the projects page', icon: jQuery },
  { title: 'Git', description: 'I use Git for version control both personally and professionally, with experience using git in conjunction with Jira (Bitbucket) and GitHub', icon: git },
  { title: 'PostgreSQL', description: 'For fullstack applications, I used PostgreSQL as my primary database software', icon: postgresql },
  { title: 'npm', description: 'npm and node development packages have powered most of my projects and professional builds', icon: npm },
  { title: 'GitHub', description: 'GitHub, including issues, PR and code review, all linked to Agile methodologies and workflow', icon: github }
]

export default function TechExperience() {
  const [selectedTech, setSelectedTech] = useState(null)
  const containerRef = useRef(null)
  return (
    <TechExperienceContainer ref={containerRef}>
      <PageTitle>Tech Experience</PageTitle>
      <TechDescription>
        {selectedTech ? (
          <TechDetailsContainer>
            <TechIcon src={selectedTech.icon} />
            <TechContent>
              <h3>{selectedTech.title}</h3>
              {selectedTech.description}
            </TechContent>
          </TechDetailsContainer>
        )
          : <TechNote>Click for a brief overview, drag icons around (just for fun)</TechNote>}
      </TechDescription>
      <TechItemsContainer>
        {technologies.map((tech, index) => (
          <motion.div
            key={`${tech.title}-${index}`}
            drag
            dragConstraints={containerRef}
          >
            <TechItem
              selected={selectedTech && selectedTech.title === tech.title}
              tech={tech}
              title={tech.title}
              icon={tech.icon}
              currentlySelected={selectedTech}
              onSelect={setSelectedTech}
            />
          </motion.div>
        ))}
      </TechItemsContainer>
    </TechExperienceContainer>
  )
}
