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
export const NavIcon = styled.div`
  display: flex;
  cursor: pointer;
  color: ${colors.light};
  align-items: center;
  justify-content: center;
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
      background-color: rgba(75, 0, 0, 0.5);
  }
`
export const ParentNavTitle = styled.div`
  padding: 1rem;
  cursor: pointer;
  font-weight: 600;
`

const NavBarKeyframeIn = keyframes`
    from {
      height: 10%;
    }

    to {
      height: 60%;
      background-image: linear-gradient(to right, rgba(90, 0, 0, 1), rgba(90, 0, 0, 0.5));
    }
`

const NavBarKeyframeOut = keyframes`
    from {
      height: 60%;
    }

    to {
      height: 10%;
      background-image: linear-gradient(to right, rgba(90, 0, 0, 1), rgba(90, 0, 0, 0.5));
    }
`
export const NavBarContainerMobile = styled.div`
  display: none;
  background-color: ${colors.darker_red};
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
  @media (max-width: 600px) {
    background-image: linear-gradient(to right, rgba(90, 0, 0, 1), rgba(90, 0, 0, 0.5));
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
