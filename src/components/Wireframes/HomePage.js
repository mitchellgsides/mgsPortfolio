import React from 'react'
import styled from 'styled-components'
import NavBar from '../NavBar'

const HomePageContainer = styled.div`
    box-style: border-box;
`
const TopHalf = styled.div`
  background-color: rgb(100, 100, 100);
  height: 49.5vh;
`
const BottomHalf = styled.div`
  background-color: darkred;
  height: 50vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const BottomHalfContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25vw;
    height: 100%;
    border: 1px solid white;
`
const BottomHalfMainContainer = styled(BottomHalfContainer)`
  width: 50vw;
`
const HomePageTitle = styled.h1`
    border-bottom: 3px solid whitesmoke;
    font-weight: 500;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
`

export default function HomePage (props) {
  const { title, routes } = props
  return (
    <HomePageContainer>
      <TopHalf>
        Picture up in here
      </TopHalf>
      <BottomHalf>
        <BottomHalfContainer>
          <HomePageTitle>
            {title.toUpperCase()}
          </HomePageTitle>
        </BottomHalfContainer>
        <NavBar routes={routes} />
        <BottomHalfMainContainer>
          <p>Description of me</p>
        </BottomHalfMainContainer>

        <BottomHalfContainer>
            Contact Info
          <div>LinkedIn Icon</div>
          <div>GitHub Icon</div>
          <div>GMail Icon</div>
        </BottomHalfContainer>
      </BottomHalf>
    </HomePageContainer>
  )
}
