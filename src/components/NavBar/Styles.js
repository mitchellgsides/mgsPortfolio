import styled, { keyframes } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { colors } from '../../utils/colors'

export const NavLinkItem = styled(NavLink)`
  padding: 1rem;
  color: ${colors.light};
  text-decoration: none;
  font-weight: 600;
  display: none;
  align-items: center;
  &:hover {
    text-shadow: 2px 2px rgba(80, 80, 80, 0.2);
    font-weight: 600;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`

export const NavLinkItemMobile = styled(NavLinkItem)`
  display: flex;
`

export const NavIcon = styled.div`
  display: flex;
  cursor: pointer;
  color: ${colors.light};
  align-items: center;
  justify-content: center;
`

export const NavIconMobile = styled(NavIcon)`
  width: 100%;
  padding: 1rem;
`

export const NavChildren = styled.div`
  display: none;
  flex-direction: column;
`
export const ChildNavTitle = styled.div`
  cursor: pointer;
`
export const ParentNav = styled.div`
  cursor: pointer;       
  animation-iteration-count: 1;
  animation-fill-mode: both;
  &:hover {
      ${NavChildren} {
          display: flex;
      }
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      background-image: linear-gradient(to right, rgba(90, 0, 0, 1), rgba(90, 0, 0, 0.5));

  }
`
export const ParentNavTitle = styled.div`
  padding: 1rem;
  cursor: pointer;
  font-weight: 600;
`

const NavBarKeyframeIn = keyframes`
    0% {
      height: 10%;
      background-image: linear-gradient(to right, rgba(90, 0, 0, 0), rgba(90, 0, 0, 0.1));

    }

    30% {
      background-image: linear-gradient(to right, rgba(90, 0, 0, 0.3), rgba(90, 0, 0, 0.1));
    }

    50% {
      background-image: linear-gradient(to right, rgba(90, 0, 0, 0.5), rgba(90, 0, 0, 0.1));
    }

    60% {
      background-image: linear-gradient(to right, rgba(90, 0, 0, 0.6), rgba(90, 0, 0, 0.1));
    }

    100% {
      height: 60%;
      background-image: linear-gradient(to right, rgba(90, 0, 0, 1), rgba(90, 0, 0, 0.1));
    }
`

const NavBarKeyframeOut = keyframes`
    0% {
      height: 60%;
      background-image: linear-gradient(to right, rgba(90, 0, 0, 1), rgba(90, 0, 0, 0.1));
    }

    30% {
      background-image: linear-gradient(to right, rgba(90, 0, 0, 0.6), rgba(90, 0, 0, 0.1));
    }

    50% {
      background-image: linear-gradient(to right, rgba(90, 0, 0, 0.5), rgba(90, 0, 0, 0.1));
    }

    60% {
      background-image: linear-gradient(to right, rgba(90, 0, 0, 0.3), rgba(90, 0, 0, 0.1));
    }


    100% {
      height: 10%;
      background-image: linear-gradient(to right, rgba(90, 0, 0, 0), rgba(90, 0, 0, 0.1));
    }
`
export const NavBarContainerMobile = styled.div`
  display: none;
  background-image: linear-gradient(to bottom, rgba(90, 0, 0, 1), rgba(90, 0, 0, 0.5));
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    display: flex;
  }
`

export const NavBarContainer = styled.div`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10%;
  padding: 1rem;
  animation: ${NavBarKeyframeOut} 300ms ease-in;
  animation-iteration-count: 1;
  animation-fill-mode: both;
  background-image: linear-gradient(to right, rgba(90, 0, 0, 0) 30%, rgba(90, 0, 0, 0.1));
  @media (max-width: 600px) {
    background-image: linear-gradient(to right, rgba(90, 0, 0, 0) 30%, rgba(90, 0, 0, 0.1));
    width: 100%;
    height: 100%;
    display: none;
  }
  &:hover {
    animation: ${NavBarKeyframeIn} 300ms ease-in;
    animation-iteration-count: 1;
    animation-fill-mode: both;
    ${NavLinkItem} {
        display: flex;
    }
    ${NavIcon} {
        display: none;
    }
  }
`
