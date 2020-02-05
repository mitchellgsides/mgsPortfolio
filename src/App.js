import React, { Component } from 'react'
import { withRouter, Route } from 'react-router-dom'
import CalculatorPage from './components/CalculatorPage/index'
import FileAnalysis from './components/FileAnalysis/index'
import ContactItem from './components/ContactItem'
import DemoAppDisplay from './components/DemoAppDisplay'
import About from './components/About'
import Projects from './components/ProjectsPage'
import NavBar from './components/NavBar'
import {
  AppContainer,
  TopHalf,
  BottomHalf,
  HeaderItem,
  HomePageContainer,
  BottomHalfMainContainer,
  BottomHalfContainer
} from './Styles'

const stravaProps = {
  title: 'StravaPR',
  link: 'https://mitchellgsides.github.io/Strava-PR-Lister/'
}

const routes = [
  { path: '/', title: 'Home', component: null, children: null },
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
  },
  {
    path: '/contact',
    title: 'Contact',
    component: null,
    children: [
      { path: '/contact/linkedin', title: 'LinkedIn', component: () => ContactItem({ title: 'linkedin' }) },
      { path: '/contact/github', title: 'GitHub', component: () => ContactItem({ title: 'github' }) },
      { path: '/contact/gmail', title: 'Gmail', component: () => ContactItem({ title: 'gmail' }) }
    ]
  }
]

class App extends Component {
  render () {
    return (
      <AppContainer>
        <HomePageContainer>
          <TopHalf>
            <NavBar routes={routes} />
            {routes.filter(route => route.title !== 'Contact').map((route, index) => {
              return !route.children
                ? (
                  <Route
                    key={`${index}-${route.path}-route`}
                    path={route.path}
                    exact
                    component={route.component}
                  />
                )
                : route.children.map((child, index) => (
                  <Route
                    key={`${index}-${child.path}-child-route`}
                    path={child.path}
                    exact
                    component={child.component}
                  />
                ))
            }
            )}
          </TopHalf>
          <BottomHalf>
            <BottomHalfContainer>
              <HeaderItem>
                <h1>Mitchell G Sides</h1>
                <HeaderItem>
                  <h6><em>Currently Under Construction. Check Back For Updates Daily!</em></h6>
                </HeaderItem>
              </HeaderItem>
            </BottomHalfContainer>
            <BottomHalfMainContainer>
              {routes.filter(route => route.title === 'Contact')[0].children.map((child, index) => {
                return (
                  <Route
                    key={`${index}-${child.path}-child-route`}
                    path={child.path}
                    exact
                    component={child.component}
                  />)
              })}
            </BottomHalfMainContainer>
            <BottomHalfContainer>
              {routes.filter(route => route.title === 'Contact')[0].children.map((child, index) => {
                return (
                  child.component())
              })}
            </BottomHalfContainer>
          </BottomHalf>
        </HomePageContainer>
        <NavBar routes={routes} />
      </AppContainer>
    )
  }
}

export default withRouter(App)
