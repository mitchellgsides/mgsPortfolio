import React, { useState } from 'react'
import styled from 'styled-components'
import NavBar from '../NavBar'
// import ContactItem from '../ContactItem'
// import About from '../About'

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: ${(p) => p.open ? 'row' : 'column'};
`
const BottomHalfContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${(p) => p.open ? 'flex-end' : 'center'};
    align-items: center;
    width: 30vw;
    height: ${(p) => p.open ? '100vh' : '100%'};
    background-color: ${(p) => p.color};
`
const BottomHalfContainerOne = styled(BottomHalfContainer)`
    width: 20vw;
    height: 100vh;
`
const BottomHalfMainContainer = styled(BottomHalfContainer)`
  width: ${(p) => p.open ? 80 : 50}vw;
`
const HomePageTitle = styled.h1`
    border-bottom: 3px solid whitesmoke;
    font-weight: 500;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    cursor: pointer;
`
const ContactIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`

const TopHalf = styled.div`
  background-color: rgb(100, 100, 100);
  height: ${(p) => p.open ? 50 : 100}vh;
  width: ${(p) => p.open ? 100 : 20}vw;
`
const BottomHalf = styled.div`
  background-color: darkred;
  height: ${(p) => p.open ? 50 : 100}vh;
  width: ${(p) => p.open ? 80 : 100}vw;
`

export default function HomePage (props) {
  const [open, setOpen] = useState(false)
  const { routes } = props
  const title = 'Mitchell G Sides'
  return (
    <HomePageContainer open={open}>
      <NavBar routes={routes} />
      <TopHalf open={open} />
      <BottomHalf open={open}>

        <BottomHalfContainerOne color='red' open={open}>
          <HomePageTitle onClick={() => setOpen(!open)} open={open}>
            {title.toUpperCase()}
          </HomePageTitle>
          <h5>Tagline</h5>
          <ContactIconsContainer>
            {['linkedin', 'github', 'gmail'].map((i, index) => <ContactItem key={`${i}-${index}`} title={i} />)}
          </ContactIconsContainer>
        </BottomHalfContainerOne>

        <BottomHalfMainContainer color='green' open={open}>
          {open ? <About /> : null}
        </BottomHalfMainContainer>

        {open
          ? null
          : <BottomHalfContainer color='goldenrod' open={open} />}

      </BottomHalf>
    </HomePageContainer>
  )
}

// container will be column unless open
