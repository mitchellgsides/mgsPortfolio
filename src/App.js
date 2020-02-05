import React, { Component } from 'react'
import { withRouter, Route } from 'react-router-dom'
import CalculatorPage from './components/CalculatorPage/index'
import FileAnalysis from './components/FileAnalysis/index'
import DemoAppDisplay from './components/DemoAppDisplay'
import About from './components/About'
import Projects from './components/ProjectsPage'
import NavBar from './components/NavBar'
import {
  AppContainer,
  HeaderBar,
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
    component: Projects,
    children: [
      { path: '/contact/linkedin', title: 'LinkedIn', component: null },
      { path: '/contact/github', title: 'Github', component: null },
      { path: '/contact/gmail', title: 'Gmail', component: null }
    ]
  }
]

class App extends Component {
  render () {
    return (
      <AppContainer>
        <HomePageContainer>
          <TopHalf>
            <HeaderBar>
              <HeaderItem>
                <h1>Mitchell G Sides</h1>
              </HeaderItem>

              <HeaderItem>
                <h6><em>Current as of February 4, 2020, Check Back For Updates Daily!</em></h6>
                <h4><em>Currently Under Construction!</em></h4>
              </HeaderItem>
            </HeaderBar>
            <NavBar routes={routes} />
            {routes.map((route, index) => {
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
                Bottom Half 1
            </BottomHalfContainer>
            <BottomHalfMainContainer>
                Bottom Half 2 \Main/
            </BottomHalfMainContainer>
            <BottomHalfContainer>
                Bottom Half 3
            </BottomHalfContainer>
          </BottomHalf>
        </HomePageContainer>
        <NavBar routes={routes} />
      </AppContainer>
    )
  }
}

export default withRouter(App)
