import styled from 'styled-components'
import { colors } from './utils/colors'
// import mountain from './assets/icon-images/Tetons .jpg'

export const AppContainer = styled.div`
  background-color: ${colors.dark};
  color: ${colors.light};
  box-sizing: border-box;
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
`
export const HeaderItem = styled.div`
  padding: 0.5rem;
  font-size: smaller;
`
export const HomePageContainer = styled.div`
    box-style: border-box;
`
export const TopHalf = styled.div`
  height: ${(p) => p.open ? 79.5 : 59.5}vh;
  display: flex;
  flex-direction: row;
  margin-left: ${(p) => p.open ? '20vw' : 0};
  align-items: ${(p) => p.open ? 'flex-start' : 'flex-end'};
  justify-content: ${(p) => p.open ? 'flex-start' : 'flex-end'};
`
export const BottomHalf = styled.div`
  background-color: darkred;
  height: ${(p) => p.open ? 20 : 40}vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const BottomHalfContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30vw;
    height: 100%;
`
export const BottomHalfContainerOne = styled(BottomHalfContainer)`
  width: 20vw;
`
export const BottomHalfMainContainer = styled(BottomHalfContainer)`
  width: 50vw;
`
