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
  cursor: pointer;
  color: ${colors.light};
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
      background-color: ${colors.gold};
  }
`
export const ParentNavTitle = styled.div`
  padding: 1rem;
  cursor: pointer;
  font-weight: 600;

`
const NavBarKeyframeIn = keyframes`
    0% {
        height: 10vh;
        color: rgba(0, 0, 0, 0);

    }
    100% {
        height: 100%;
        top: 0;
        background-color: ${colors.gold};
    }
`
const NavBarKeyframeOut = keyframes`
    100% {
        height: 10vh;
        color: rgba(0, 0, 0, 0);
    }
    0% {
        height: 100%;
        top: 0;
        background-color: ${colors.gold};
    }
`

export const NavBarContainer = styled.div`
  width: 100%;
  background-color: ${colors.navbar};
  animation: ${NavBarKeyframeOut} 200ms ease-in;
  animation-iteration-count: 1;
  animation-fill-mode: both;
  @media (max-width: 400px) {
    top: 0;
  }
  &:hover {
    animation: ${NavBarKeyframeIn} 200ms ease-in;
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
