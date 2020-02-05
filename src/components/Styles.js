import styled from 'styled-components'
import { colors } from '../utils/colors'

export const CalculatorContainer = styled.div`
    display: grid;
    grid-template-rows: 4fr 1fr;
    padding: 0.5rem;
    margin: 0.5rem;
`

export const SportTabContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
  background-color: ${colors.transition_bg};
`
export const SportTab = styled.div`
    cursor: pointer;
    text-align: center;
`
export const SportTabTitle = styled.div`
    color: ${(p) => !p.selected ? colors.transition_bg : colors.transition_font};
    background-color: ${(p) => !p.selected ? colors.transition_font : colors.transition_bg};
    padding: 1rem;
`
export const SportItem = styled.div`
    margin-left: 0;
    color: ${colors.light};
    background-color: ${colors.main_bg};
`
export const CalculatorPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
`

export const UnitLabel = styled.div`
    font-size: 1rem;
    align-self: center;
    margin: 0.3rem;
`

export const Label = styled.h5`
    margin: 0.25rem;
    padding: 0.125rem;
    text-align: left;
`

export const Title = styled.div`
    font-size: 2rem;
    font-weight: bold;
    margin: 1rem;
`

export const TimeBox = styled.div`
    color: ${colors.totalTime_font};
    background-color: ${colors.totalTime_bg};
    font-size: 1.75rem;
    font-weight: bold;
    text-align: center;
    padding: 0.5rem;
`

export const DistanceContainer = styled.div`
    padding: 0.25rem;
    display: grid;
    flex: 1;
    align-items: center;
    justify-content: center;
    grid-template-columns: 1fr 2fr 1fr;
`

export const TimeInputContainer = styled.div`
    display: grid;
    padding: 0.25rem;
    grid-template-columns: 1.5fr 1fr 1fr 1fr;
    flex: 1;
    text-align: left; 
    justify-content: space-evenly;
    align-items: center;
`

export const PaceInputContainer = styled(TimeInputContainer)`
`

export const AppContainer = styled.div`
    text-align: center;
    background-color: ${colors.main_bg};
    min-height: 99vh;
    display: flex;
    margin: 0;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    font-size: calc(10px + 2vmin);
    color: ${colors.main_font};
`

export const DistanceSelectorList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    border: 1px solid red;
    margin-bottom: 0.25rem;
    @media (max-width: 360px) {
        grid-template-columns: 1fr 1fr;
  }
`
export const UnitSelectorList = styled(DistanceSelectorList)`
    grid-template-columns: 1fr 1fr;
`
export const DistanceInputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`
export const CustomDistanceField = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.25rem;
  @media (max-width: 400px) {
    flex-direction: column;
  }
`

export const DistanceSelectorTitleList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0.5rem;
`

export const DistanceItem = styled.div`
    list-style-type: none;
    cursor: pointer;
    background-color: ${(p) => p.selected ? colors.selected : ''};
    color: ${(p) => p.selected ? colors.selected_font : ''};
    font-size: 1rem;
    font-weight: 600;
    padding: 0.65rem;
    margin: 0.25rem;
`

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const TitleRow = styled.div`
    display: grid;
    grid-template-columns: 30vw 30vw 30vw;
    margin: 0rem;
    padding: 0.25rem;
`

export const StyledNumberInput = styled.input`
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    ::-webkit-outer-spin-button {
        -webkit-appearance: none;
    }
`
