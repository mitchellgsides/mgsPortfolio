import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { colors } from '../../utils/colors'
import { PageTitle } from '../../Styles'
import TechItem from '../TechExperience/TechItem'
import reactIcon from '../../assets/icon-images/react-original.svg'
import css from '../../assets/icon-images/css3-icon.svg'
import javascript from '../../assets/icon-images/javascript-icon.svg'
import html from '../../assets/icon-images/html5-icon.png'
import jQuery from '../../assets/icon-images/jquery-icon.svg'
import git from '../../assets/icon-images/git-original.svg'
import npm from '../../assets/icon-images/npm-original-wordmark.svg'
import redux from '../../assets/icon-images/redux-original.svg'
import typescript from '../../assets/icon-images/typescript-original.svg'
import postgresql from '../../assets/icon-images/postgresql-original.svg'
import github from '../../assets/icon-images/github-icon.svg'
// import { colors } from '../../utils/colors'

const ProjectsContainer = styled.div`
  max-width: 500px;
`

const ProjectItem = styled.div`
    border-radius: 1rem;
    padding: 2rem;
    margin: 1rem;
    border: 1px solid ${colors.gunmetal};
    &:hover {
      background-color: ${colors.gunmetal};
    }
`

const ProjectItemName = styled.div`
  padding: 1rem;
`

const ProjectTitleLink = styled(NavLink)`
    text-decoration: none;
    cursor: pointer;
    color: ${colors.light};
    font-size: 1.5rem;
    font-weight: 600;
`

const TechnologiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

const projects = [
  {
    name: 'Triathlon Calculator',
    pathname: 'triathlon',
    description: 'As a triathlete, I wanted to make a quick app for determining overall time, distance, and pace requirements because none of those I\'d found worked as smoothly and accessibly as I wanted. In the future, I\'ll be adding additional resources for determining best practices for pacing.',
    imageSrc: '../',
    imageAlt: 'triathletes running'
  },
  {
    name: 'File Analysis',
    pathname: 'file-analysis',
    description: 'This project allows you to analyze a single power file and evaluate different training metrics such as average power over a given duration',
    imageSrc: '../',
    imageAlt: 'Power Symbol, Watts'
  }
]

const technologies = [
  { title: 'React', projects: ['Triathlon Calculator', 'File Analysis'], icon: reactIcon },
  { title: 'Javascript', projects: ['Triathlon Calculator', 'File Analysis'], icon: javascript },
  { title: 'Redux', projects: [], icon: redux },
  { title: 'TypeScript', projects: [], icon: typescript },
  { title: 'CSS3', projects: ['Triathlon Calculator', 'File Analysis'], icon: css },
  { title: 'HTML5', projects: ['Triathlon Calculator', 'File Analysis'], icon: html },
  { title: 'jQuery', projects: [], icon: jQuery },
  { title: 'Git', projects: ['Triathlon Calculator', 'File Analysis'], icon: git },
  { title: 'PostgreSQL', projects: [], icon: postgresql },
  { title: 'Npm', projects: [], icon: npm },
  { title: 'GitHub', projects: [], icon: github }
]

export default function Projects (props) {
  return (
    <ProjectsContainer>
      <PageTitle>Projects</PageTitle>
      {projects.map((project, index) => (
        <ProjectItem
          key={`${project.name}-${index}`}
        >
          <ProjectTitleLink to={`/projects/${project.pathname}`}>
            <ProjectItemName>
              {project.name}
            </ProjectItemName>
          </ProjectTitleLink>
          <p>{project.description}</p>
          <TechnologiesContainer>
            {technologies.filter(tech => tech.projects.includes(project.name)).map((tech, index) => <TechItem small key={`${tech.title}-${index}`} title={tech.title} icon={tech.icon} />)}
          </TechnologiesContainer>
        </ProjectItem>
      ))}
    </ProjectsContainer>
  )
}
