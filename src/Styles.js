import styled from 'styled-components'
import { colors } from './utils/colors'

export const InfoSection = styled.div`
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
  padding: 1rem;
  flex: 1;
  background-image: linear-gradient(to top, rgba(90, 0, 0, 1), rgba(90, 0, 0, 0.5));
`

export const InfoSectionMobile = styled(InfoSection)`
`
export const ContactSectionMobile = styled(ContactSection)`
`

export const PageTitle = styled.h2`
  padding: 0.5rem;
  margin: 0.5rem;
`

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  @media (max-width: 600px) {
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

export const ContactContainer = styled(SubContainer)`
  background-image: linear-gradient(to right, rgba(0, 0, 0, .7), rgba(0, 0, 0, 0.3));
`
export const InnerContainer = styled(SubContainer)`
  flex: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Box = styled.div`
  width: 100vw;
  flex: 1;
`
export const InfoSectionContainer = styled.div`
  flex: 3;
`
export const MainContainer = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
`
