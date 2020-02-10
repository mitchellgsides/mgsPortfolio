import React, { Component } from 'react'
import { withRouter, Route } from 'react-router-dom'
import CalculatorPage from './components/CalculatorPage/index'
import FileAnalysis from './components/FileAnalysis/index'
import ContactPage from './components/ContactPage'
import DemoAppDisplay from './components/DemoAppDisplay'
import About from './components/About'
import Projects from './components/ProjectsPage'
import NavBar from './components/NavBar'
import mountain from './assets/icon-images/Tetons.jpg'
import { colors } from './utils/colors'
import {
  AppContainer,
  SubContainer,
  MainContainer,
  InnerContainer,
  ContactSection,
  InfoSection,
  ImageContainer
} from './Styles'

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
      { path: '/projects/file-analysis', title: 'Ride File Analysis', component: FileAnalysis, description: '' },
      { path: '/projects/triathlon', title: 'Triathlon Pace', component: CalculatorPage, description: 'This app allows you to set a distance, time, and pace, and see your total time for a triathlon.' },
      { path: '/projects/strava-pr', title: 'Strava PR Lister', component: () => DemoAppDisplay(stravaProps), description: 'Strava PR Grabs Data from Strava and shows brief overview of your last several rides or runs.' }
    ]
  }
]

class App extends Component {
  render () {
    const title = 'Mitchell G Sides'
    return (
      <AppContainer>
        <SubContainer color={colors.dark} flex={1}>
          <NavBar routes={routes.filter(route => route.title !== 'Contact')} />
          <InfoSection>
            <h2>{title.toUpperCase()}</h2>
            <h5>Full Stack Engineer</h5>
            <p>Under Construction. Check Back for Updates!</p>
          </InfoSection>
          <ContactSection>
            <h2>Contact Me:</h2>
            <ContactPage />
          </ContactSection>
        </SubContainer>

        <MainContainer flex={4}>
          <ImageContainer>
            <img href={mountain} alt='mountains' />
          </ImageContainer>
          {routes.map((route, index) => {
            return !route.children
              ? (
                <InnerContainer
                  depth={index}
                  key={`${index}-${route.path}-route`}
                >
                  {route.title}
                  <Route
                    path={route.path}
                    component={route.component}
                  />
                </InnerContainer>
              )
              : (
                <InnerContainer
                  key={`${index}-${route.path}-route`}
                  depth={index}
                >
                  {route.children.map((child, index) => (
                    <Route
                      key={`${index}-${child.path}-child-route`}
                      depth={index}
                      path={child.path}
                      component={child.component}
                    />
                  ))}
                </InnerContainer>)
          }
          )}
        </MainContainer>
      </AppContainer>
    )
  }
}

export default withRouter(App)
