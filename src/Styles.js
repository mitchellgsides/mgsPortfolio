import styled from 'styled-components'
import { colors } from './utils/colors'

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
export const MobileContactSection = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: ${colors.darker_red};
`

export const InfoSectionMobile = styled(InfoSection)`
`
export const ContactSectionMobile = styled(ContactSection)`
`

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  @media (max-width: 420px) {
    flex-direction: column;
    ${InfoSection} {
      display: none;
    }
    ${ContactSection} {
      display: none;
    }
    ${MobileContactSection} {
      display: flex;
      flex: 1;
    }
    ${ContactSectionMobile} {
      display: flex;
      flex: 1;
    }    
    ${InfoSectionMobile} {
      display: flex;
      flex: 1;
    }
  }
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
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Box = styled.div`
  width: 100vw;
  flex: 1;
`

export const MainContainer = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
`
