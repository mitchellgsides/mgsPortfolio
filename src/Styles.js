import styled from 'styled-components'
import { colors } from './utils/colors'

export const AppContainer = styled.div`
  background-color: ${colors.dark};
  color: ${colors.light};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0;
`
export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
`
export const HeaderBar = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 20vw;
  height: 100vh;
  align-items: center;
  justify-content: space-around;
`
export const HeaderItem = styled.div`
  padding: 1rem;
  margin: 0.5rem;
`
export const HomePageContainer = styled.div`
    box-style: border-box;
`
export const TopHalf = styled.div`
  background-color: rgb(100, 100, 100);
  height: 49.5vh;
`
export const BottomHalf = styled.div`
  background-color: darkred;
  height: 50vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const BottomHalfContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25vw;
    height: 100%;
    border: 1px solid white;
`
export const BottomHalfMainContainer = styled(BottomHalfContainer)`
  width: 50vw;
`
