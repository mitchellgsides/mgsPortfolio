import React from 'react'
import styled from 'styled-components'

const DogContainer = styled.div`
    background-color: blue;
    align-self: stretch;
    flex: 1;
`

const DogHead = styled.div`
    width: 100px;
    height: 100px;
    position: absolute;
    top: 26%;
    left: 48%;
    border-radius: 40%;
    background-color: brown;
`

const DogNeck = styled.div`
  width: 60px;
  height: 120px;
  background-color: brown;
  position: absolute;
  top: 30%;
  left: 48%;
  transform: rotate(67deg);
`

const DogEar = styled.div`
  width: 60px;
  height: 30px;
  transform: rotate(60deg);
  position: absolute;
  top: 25%;
  left: 48%;
  background-color: brown;
`

const DogEarTwo = styled(DogEar)`
    left: 47%;
    top: 28%;
    transform: rotate(15deg);
`

const DogNose = styled.div`
  width: 100px;
  height: 50px;
  position: absolute;
  top: 33%;
  left: 51%;
  border-radius: 10%;
  background-color: brown;
`

const DogNoseTip = styled.div`
    position: absolute;
    width: 20px;
    height: 20px;
    top: 32.5%;
    left: 56.5%;
    border-radius: 50%;
    background-color: black;
`

const DogBody = styled.div`
  width: 200px;
  height: 100px;
  position: absolute;
  top: 37%;
  left: 38%;
  border-radius: 15%;
  background-color: brown;
`

const DogLegBack = styled(DogBody)`
  width: 30px;
  height: 200px;
  top: 39%;
  left: 37%;
`
const DogLegMiddleBack = styled(DogLegBack)`
    left: 40%;
`

const DogLegFront = styled(DogLegBack)`
    left: 50%;
`
const DogLegFrontMiddle = styled(DogLegBack)`
    left: 47%;
`

const DogTail = styled.div`
  background-color: brown;
  height: 150px;
  width: 20px;
  position: absolute;
  transform: rotate(-15deg);
  border-radius: 20%;
  left: 36%;
  top: 22%;
  transform: rotate 45deg;
`

export default function DogBox () {
  return (
    <DogContainer>
      <DogHead />
      <DogEar />
      <DogEarTwo />
      <DogNose />
      <DogNoseTip />
      <DogNeck />
      <DogBody />
      <DogTail />
      <DogLegBack />
      <DogLegMiddleBack />
      <DogLegFront />
      <DogLegFrontMiddle />
    </DogContainer>
  )
}
