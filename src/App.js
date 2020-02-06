import React, { Component } from 'react'
import { withRouter, Route } from 'react-router-dom'
import CalculatorPage from './components/CalculatorPage/index'
import FileAnalysis from './components/FileAnalysis/index'
import ContactPage from './components/ContactPage'
import DemoAppDisplay from './components/DemoAppDisplay'
import About from './components/About'
import Projects from './components/ProjectsPage'
import NavBar from './components/NavBar'
import { colors } from './utils/colors'
import {
  AppContainer,
  SubContainer,
  MainContainer,
  InnerContainer,
  ContactSection,
  InfoSection
} from './Styles'
import styled from 'styled-components'

const stravaProps = {
  title: 'StravaPR',
  link: 'https://mitchellgsides.github.io/Strava-PR-Lister/'
}

const routes = [
  { path: '/about', title: 'About', component: About, children: null },
  {
    path: '/projects',
    title: 'Projects',
    component: Projects,
    children: [
      { path: '/projects/file-analysis', title: 'Ride File Analysis', component: FileAnalysis },
      { path: '/projects/triathlon', title: 'Triathlon Pace', component: CalculatorPage },
      { path: '/projects/strava-pr', title: 'Strava PR Lister', component: () => DemoAppDisplay(stravaProps) }
    ]
  }
]

class App extends Component {
  render () {
    const open = this.props.location.pathname !== '/'
    const title = 'Mitchell G Sides'
    return (
      <AppContainer>

        <SubContainer color={colors.dark} flex={1}>
          <NavBar routes={routes.filter(route => route.title !== 'Contact')} />
          <InfoSection>
            <h2>{title.toUpperCase()}</h2>
            <h5>Full Stack Engineer</h5>
          </InfoSection>
          <ContactSection>
            <h2>Contact Me:</h2>
            <ContactPage />
          </ContactSection>
        </SubContainer>

        <MainContainer flex={4}>
          {routes.map((route, index) => {
            return !route.children
              ? (
                <InnerContainer depth={index}>
                  {route.title}
                  <Route
                    key={`${index}-${route.path}-route`}
                    path={route.path}
                    component={route.component}
                  />
                </InnerContainer>
              )
              : (
                <InnerContainer depth={index}>
                  {route.title}
                  {route.children.map((child, index) => (
                    <Route
                      depth={index}
                      key={`${index}-${child.path}-child-route`}
                      path={child.path}
                      component={child.component}
                    />))}
                </InnerContainer>)
          }
          )}
        </MainContainer>
      </AppContainer>
    )
  }
}

export default withRouter(App)
