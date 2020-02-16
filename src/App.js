import React, { Component } from 'react'
import { withRouter, Route } from 'react-router-dom'
import CalculatorPage from './components/CalculatorPage/index'
import FileAnalysis from './components/FileAnalysis/index'
import ContactPage from './components/ContactPage'
import DemoAppDisplay from './components/DemoAppDisplay'
import TechExperience from './components/TechExperience'
import About from './components/About'
import Projects from './components/ProjectsPage'
import NavBar from './components/NavBar'
// import { colors } from './utils/colors'
import mountain from './assets/icon-images/Tetons.jpg'
// import prism from './assets/icon-images/prism.png'
import {
  AppContainer,
  // SubContainer,
  MainContainer,
  InnerContainer,
  ContactSection,
  ContactContainer,
  InfoSection,
  InfoSectionMobile,
  ContactSectionMobile,
  MobileContactSection,
  PageTitle
} from './Styles'
import { Icon } from './components/Icon'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const stravaProps = {
  title: 'StravaPR',
  link: 'https://mitchellgsides.github.io/Strava-PR-Lister/'
}

const quizProps = {
  title: 'Physiology Quiz App',
  link: 'https://mitchellgsides.github.io/quiz-app/'
}

const routes = [
  { path: '/', exact: true, title: 'Home', component: About },
  { path: '/experience', exact: true, title: 'Experience', component: TechExperience },
  {
    path: '/projects',
    exact: true,
    title: 'Projects',
    component: Projects
  },
  { path: '/projects/file-analysis', exact: true, title: 'Ride File Analysis', component: FileAnalysis, description: '', requiresParent: true },
  { path: '/projects/triathlon', exact: true, title: 'Triathlon Pace', component: CalculatorPage, description: 'This app allows you to set a distance, time, and pace, and see your total time for a triathlon.', requiresParent: true },
  { path: '/projects/strava-pr', exact: true, title: 'Strava PR Lister', component: () => DemoAppDisplay(stravaProps), description: 'Strava PR Grabs Data from Strava and shows brief overview of your last several rides or runs.', requiresParent: true },
  { path: '/projects/quiz-app', exact: true, title: 'Physiology Quiz', component: () => DemoAppDisplay(quizProps), description: 'This is a simple quiz application built using jQuery, JavaScript, HTML, and CSS.', requiresParent: true }
]

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: null,
      mobileContactOpen: false
    }
  }

  render () {
    const title = 'Mitchell G Sides'
    return (
      <AppContainer
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${mountain})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <ContactContainer
          flex={1}
        >
          <NavBar routes={routes.filter(route => !route.requiresParent)} />
          <InfoSection style={{ flex: 2 }}>
            <PageTitle>{title.toUpperCase()}</PageTitle>
            <h5>Full Stack Engineer</h5>
            <p>Under Construction. Check Back for Updates!</p>
          </InfoSection>
          <ContactSection style={{ flex: 2 }}>
            <PageTitle>Contact:</PageTitle>
            <ContactPage />
          </ContactSection>
        </ContactContainer>

        <MainContainer
          flex={5}
        >
          <InnerContainer>
            {routes.map((route, index) => {
              return (
                <Route
                  key={`${index}-${route.title}`}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              )
            })}
          </InnerContainer>
        </MainContainer>
        <MobileContactSection onClick={() => this.setState({ mobileContactOpen: !this.state.mobileContactOpen })}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <PageTitle>Contact</PageTitle>
            <div onClick={() => this.setState({ mobileContactOpen: false })}>{this.state.mobileContactOpen ? <Icon icon={faChevronDown} /> : null}</div>
          </div>
          {
            this.state.mobileContactOpen ? (
              <>
                <InfoSectionMobile>
                  <PageTitle>{title.toUpperCase()}</PageTitle>
                  <h5>Full Stack Engineer</h5>
                  <p>Under Construction. Check Back for Updates!</p>
                </InfoSectionMobile>
                <ContactSectionMobile>
                  <ContactPage />
                </ContactSectionMobile>
              </>
            )
              : null
          }
        </MobileContactSection>
      </AppContainer>
    )
  }
}

export default withRouter(App)
