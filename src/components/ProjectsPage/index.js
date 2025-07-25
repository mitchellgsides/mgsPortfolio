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

const ProjectsContainer = styled.div`
  @media (max-width: 600px) {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
`

const ProjectsGrid = styled.div`
  border-radius: 1rem;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const ProjectItem = styled(NavLink)`
    border-radius: 1rem;
    text-decoration: none;
    color: inherit;
    padding: 0.5rem;
    margin: 0.5rem;
    max-width: 320px;
    border: 1px solid ${colors.gunmetal};
    &:hover {
      background-color: ${colors.gunmetal};
    }
    cursor: pointer;
`

const ProjectItemName = styled.div`
  padding: 1rem;
`

const ProjectTitle = styled.div`
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
  },
  {
    name: 'React Sandbox',
    pathname: 'sandbox',
    description: 'React Sandbox for developing features, trying out new things, and exploring React and other libraries\' capabilities.',
    imageSrc: '../',
    imageAlt: 'React Logo'
  },
  {
    name: 'Physiology Quiz App',
    pathname: 'quiz-app',
    description: 'This project uses jQuery and CSS for a simple quiz application',
    imageSrc: '../',
    imageAlt: 'Quiz Applet Logo'
  },
  {
    name: 'Strava PR Analysis',
    pathname: 'strava-pr',
    description: 'Strava PR Grabs Data from Strava and shows brief overview of your last several rides or runs.',
    // link: 'https://mitchellgsides.github.io/Strava-PR-Lister/',
    imageSrc: '../',
    imageAlt: 'Strava Logo'
  }
]

const technologies = [
  { title: 'React', projects: ['Triathlon Calculator', 'File Analysis', 'React Sandbox'], icon: reactIcon },
  { title: 'Javascript', projects: ['Physiology Quiz App', 'Physiology Quiz App', 'Triathlon Calculator', 'File Analysis', 'React Sandbox'], icon: javascript },
  { title: 'Redux', projects: [], icon: redux },
  { title: 'TypeScript', projects: [], icon: typescript },
  { title: 'CSS3', projects: ['Physiology Quiz App', 'Strava PR Analysis', 'Triathlon Calculator', 'File Analysis'], icon: css },
  { title: 'HTML5', projects: ['Triathlon Calculator', 'File Analysis'], icon: html },
  { title: 'jQuery', projects: ['Physiology Quiz App', 'Strava PR Analysis'], icon: jQuery },
  { title: 'Git', projects: [], icon: git },
  { title: 'PostgreSQL', projects: [], icon: postgresql },
  { title: 'Npm', projects: [], icon: npm },
  { title: 'GitHub', projects: [], icon: github }
]

export default function Projects (props) {
  return (
    <ProjectsContainer>
      <PageTitle>Projects</PageTitle>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectItem
            key={`${project.name}-${index}`}
            to={`/projects/${project.pathname}`}
          >
            <ProjectTitle>
              <ProjectItemName>
                {project.link ? <a href={project.link}>{project.name}</a> : project.name}
              </ProjectItemName>
            </ProjectTitle>
            <p>{project.description}</p>
            <TechnologiesContainer>
              {technologies.filter(tech => tech.projects.includes(project.name)).map((tech, index) => <TechItem small key={`${tech.title}-${index}`} title={tech.title} icon={tech.icon} />)}
            </TechnologiesContainer>
          </ProjectItem>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  )
}
