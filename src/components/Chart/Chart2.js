import React from 'react'
import styled from 'styled-components'
import Tooltip from '@material-ui/core/Tooltip'

const ChartItemLegend = styled.div`
 padding: 0.25rem;
 display: none;
`
const RotateNotate = styled.div`
  color: darkred;
  display: none;
  @media (orientation: portrait) {
    display: block;
  }
`
const ChartContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0.5rem;
  @media (max-width: 500px) {
    display: none;
  }
`
const ChartItem = styled.div`
  height: ${p => p.power * 0.2}px;
  border: 2px solid whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 20px;
  :hover {
    ${ChartItemLegend} {
      display: block;
    }
  }
`

export default function Chart2 (props) {
  const { locations } = props
  return (
    <>
      <RotateNotate>Please Rotate To View the Chart</RotateNotate>
      <ChartContainer>
        {locations.filter(i => i != null && i.power > 0).map((i, index) => (
          <Tooltip title={`Duration: ${i.duration}s, ${i.power}w`} key={`${index}-${i.duration}-${i.power}`}>
            <ChartItem columns={locations.length} power={i.power}>
              {/* <ChartItemLegend>
                    Duration: {i.duration}s, {i.power}w
              </ChartItemLegend> */}
            </ChartItem>
          </Tooltip>
        ))}
      </ChartContainer>
    </>
  )
}
