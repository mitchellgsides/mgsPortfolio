import styled from 'styled-components'

export const StyledNumberInput = styled.input`
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    ::-webkit-outer-spin-button {
        -webkit-appearance: none;
    }
    padding: 0.25rem;
    font-size: 1.1rem;
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

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
`
