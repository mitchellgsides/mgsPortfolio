import React, { Component } from 'react'
import { withRouter, Route } from 'react-router-dom'
import CalculatorPage from './components/CalculatorPage/index'
import FileAnalysis from './components/FileAnalysis/index'
import DemoAppDisplay from './components/DemoAppDisplay'
import styled from 'styled-components'
import About from './components/About'
import Projects from './components/ProjectsPage'
import NavBar from './components/NavBar'
import { colors } from './utils/colors'

const AppContainer = styled.main`
  background-color: ${colors.dark};
  color: ${colors.light};
`
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const stravaProps = {
  title: 'StravaPR',
  link: 'https://mitchellgsides.github.io/Strava-PR-Lister/'
}

const routes = [
  { path: '/about', title: 'About', component: About, parent: true },
  { path: '/projects', title: 'Projects', component: Projects, parent: true },
  { path: '/projects/triathlon', parent: false, title: 'Triathlon Pace', component: CalculatorPage },
  { path: '/projects/file-analysis', parent: false, title: 'Ride File Analysis', component: FileAnalysis },
  { path: '/projects/strava-pr', parent: false, title: 'Strava PR Lister', component: () => DemoAppDisplay(stravaProps) }
]

class App extends Component {
  render () {
    return (
      <AppContainer>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h1>Mitchell G Sides</h1>
          <h4><em>Currently Under Construction!</em></h4>
        </div>
        <NavBar routes={routes} />
        <MainContainer>
          {routes.map((route, index) =>
            <Route
              key={`${index}-${route.path}-route`}
              path={route.path}
              exact
              component={route.component}
            />
          )}
        </MainContainer>
      </AppContainer>
    )
  }
}

export default withRouter(App)
