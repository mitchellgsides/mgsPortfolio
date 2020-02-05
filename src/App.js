import React, { Component } from 'react'
import { withRouter, Route } from 'react-router-dom'
import CalculatorPage from './components/CalculatorPage/index'
import FileAnalysis from './components/FileAnalysis/index'
import ContactItem from './components/ContactItem'
import DemoAppDisplay from './components/DemoAppDisplay'
import About from './components/About'
import Projects from './components/ProjectsPage'
import NavBar from './components/NavBar'
import mountain from './assets/icon-images/Tetons 2.jpg'
import {
  AppContainer,
  TopHalf,
  BottomHalf,
  HeaderItem,
  HomePageContainer,
  BottomHalfMainContainer,
  BottomHalfContainerOne,
  BottomHalfContainer
} from './Styles'
import styled from 'styled-components'

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
      { path: '/contact/linkedin', title: 'LinkedIn', component: (props) => ContactItem(props) },
      { path: '/contact/github', title: 'GitHub', component: (props) => ContactItem(props) },
      { path: '/contact/gmail', title: 'Gmail', component: (props) => ContactItem(props) }
    ]
  }
]

export const ImageContainer = styled.div`
  width: 500px;
  height: 500px;
  z-index: 0;
  position: absolute;
  background-attachment: scroll;
    background-attachment: fixed;
    background-image: linear-gradient(
        rgba(0, 0, 0, 0.75),
        rgba(0, 0, 0, 0.75)
        ),
        url(${mountain});
`

class App extends Component {
  render () {
    const open = this.props.location.pathname !== '/'
    return (
      <AppContainer>
        <HomePageContainer>
          {/* <ImageContainer><img style={{ height: '100vh', width: '100vw' }} src={mountain} alt='mountains' /></ImageContainer> */}
          <TopHalf open={open}>
            <Route
              path='/about'
              exact
              component={About}
            />
            <NavBar open={open} routes={routes.filter(route => route.title !== 'Contact')} />
            {routes.filter(route => route.title !== 'Contact' && route.title !== 'About').map((route, index) => {
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
          <BottomHalf open={open}>

            <BottomHalfContainerOne open={open}>
              <HeaderItem>
                <h1>Mitchell G Sides</h1>
                <h6>Currently Under Construction. Check Back For Updates Daily!</h6>
              </HeaderItem>
            </BottomHalfContainerOne>

            <BottomHalfMainContainer open={open}>
              {open ? <div>tagline Stuff!!</div> : null}
            </BottomHalfMainContainer>

            <BottomHalfContainer open={open}>
              {routes.filter(route => route.title === 'Contact')[0].children.map((child, index) => {
                return (
                  <div key={`${child}-${index}`}>
                    {child.component({ title: child.title, showDescription: false })}
                  </div>
                )
              })}
            </BottomHalfContainer>
          </BottomHalf>
        </HomePageContainer>
      </AppContainer>
    )
  }
}

export default withRouter(App)
