import styled from 'styled-components'
import { colors } from './utils/colors'
import mountain from './assets/icon-images/Tetons .jpg'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`

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

export const Image = styled.img`
  width: 100%;
  height: 100%;
`
export const SubContainer = styled.div`
  flex: ${(p) => p.flex};
  background-color: ${(p) => p.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`
export const InnerContainer = styled(SubContainer)`
  width: 99%;
  justify-content: center;
  flex: 1;
  background-color: rgb(200, ${(p) => 150 - p.depth * 9}, ${(p) => 150 - p.depth * 9});
  &:hover {
    flex: 3
  }
`

export const MainContainer = styled(SubContainer)`
  justify-content: space-between;
`
export const InfoSection = styled.section`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const ContactSection = styled(InfoSection)`
  border-top: 2px solid ${colors.light};
`
