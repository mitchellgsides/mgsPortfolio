import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { colors } from '../../utils/colors'

const ProjectsContainer = styled.div`
  max-width: 500px;
`

const ProjectItem = styled.div`
    border-radius: 1rem;
    padding: 2rem;
    margin: 1rem;
    cursor: pointer;
    border: 1px solid ${colors.gunmetal};
    &:hover {
      background-color: ${colors.gunmetal};
    }
`

const ProjectTitleLink = styled(NavLink)`
    text-decoration: none;
    cursor: pointer;
    color: ${colors.light};
    font-size: 1.5rem;
    font-weight: 600;
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

export default function Projects (props) {
  return (
    <ProjectsContainer>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <ProjectItem
          key={`${project.name}-${index}`}
        >
          <ProjectTitleLink to={`/projects/${project.pathname}`}>
            {project.name}
          </ProjectTitleLink>
          <p>{project.description}</p>

        </ProjectItem>
      ))}
    </ProjectsContainer>
  )
}
