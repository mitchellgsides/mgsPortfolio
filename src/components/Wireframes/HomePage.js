import React from 'react'
import styled from 'styled-components'
import NavBar from '../NavBar'
import ContactPage from '../ContactPage'
import { Route } from 'react-router'
import { PageTitle } from '../../Styles'

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`
const SubContainer = styled.div`
  flex: ${(p) => p.flex};
  background-color: ${(p) => p.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`
const InnerContainer = styled(SubContainer)`
  border: 1px solid red;
  width: 99%;
  justify-content: center;
  &:hover {
    flex: 2
  }
`

const MainContainer = styled(SubContainer)`
  justify-content: space-between;
`
const InfoSection = styled.section`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const ContactSection = styled(InfoSection)`
  border-top: 2px solid blue;
`

export default function HomePage (props) {
  const { title, routes } = props
  return (
    <HomePageContainer>
      <NavBar routes={routes} />

      <SubContainer color='red' flex={1}>
        <InfoSection>
          <PageTitle>{title.toUpperCase()}</PageTitle>
          <h5>Full Stack Engineer</h5>
        </InfoSection>
        <ContactSection>
          <PageTitle>Contact Me:</PageTitle>
          <ContactPage />
        </ContactSection>
      </SubContainer>

      <MainContainer color='green' flex={4}>
        {routes.map((route, index) => (
          <InnerContainer flex={1} key={`${route.title}-${index}`}>
            <Route
              path={route.path}
              component={route.component}
              exact
            />
          </InnerContainer>
        ))}
      </MainContainer>
    </HomePageContainer>
  )
}

// container will be column unless open
