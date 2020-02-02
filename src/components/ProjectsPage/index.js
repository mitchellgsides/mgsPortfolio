import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { colors } from '../../utils/colors'

const ProjectsContainer = styled.div`
  max-width: 500px;
`
const ProjectsList = styled.ul`
  list-style-type: none;
  text-decoration: none;
`
const ProjectItem = styled.li`
    background-color: ${colors.link};
    padding: 1rem;
    margin: 0.5rem;
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
  },
  {
    name: 'Strava PR Lister',
    pathname: 'strava-pr',
    description: 'One of my first web applications, this is a simple and straightforward introductory cycling power analysis tool. It allows you to quickly reference the average power, normalized power, 5min max, and 20min max power of your last Strava rides.',
    imageSrc: '../',
    imageAlt: 'Strava Logo Thing'
  }
]

export default function Projects (props) {
  return (
    <ProjectsContainer>
      <ProjectsList>
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
      </ProjectsList>
    </ProjectsContainer>
  )
}
