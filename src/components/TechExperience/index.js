import React from 'react'
import TechItem from './TechItem'
import styled from 'styled-components'
import css from '../../assets/icon-images/css3-icon.svg'
import javascript from '../../assets/icon-images/javascript-icon.svg'
import html from '../../assets/icon-images/html5-icon.png'
import jQuery from '../../assets/icon-images/jquery-icon.svg'
import github from '../../assets/icon-images/github-icon.svg'
import reactIcon from '../../assets/icon-images/react-original.svg'

const TechItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`

export default function TechExperience (props) {
  const items = [
    { title: 'React', description: 'Saas Application in the cybersecurity space with React, Redux, Node', icon: reactIcon },
    { title: 'CS3S', description: 'CSS', icon: css },
    { title: 'HTML5', description: 'HTML5', icon: html },
    { title: 'jQuery', description: 'jQuery', icon: jQuery },
    { title: 'Javascript', description: 'javascript', icon: javascript },
    { title: 'GitHub', description: 'VCS with experience using git in Jira and GitHub', icon: github }
  ]
  return (
    <div>
      <h2>Tech Experience</h2>
      <TechItemsContainer>
        {items.map((tech, index) => <TechItem key={`${tech.title}-${index}`} title={tech.title} description={tech.description} icon={tech.icon} />)}
      </TechItemsContainer>
    </div>
  )
}
