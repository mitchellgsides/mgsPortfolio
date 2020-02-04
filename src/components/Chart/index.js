import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'

const Canvas = styled.canvas`
  margin: 2rem;
  border: 2px solid whitesmoke;
`
// draw function
function draw (ctx, location, width, height) {
  ctx.beginPath()
  console.log(location)
  const SCALE_X = 20
  const SCALE_Y = 20
  const OFFSET_X = 0
  const OFFSET_Y = 0
  ctx.lineWidth = 20
  ctx.strokeStyle = `rgb(${location.x * 10}, 100, ${location.y * 20})` // Green path
  ctx.moveTo((location.x * SCALE_X) - OFFSET_X, (location.y * SCALE_Y) - OFFSET_Y)
  ctx.lineTo(location.x * SCALE_X - OFFSET_X, location.y * SCALE_Y - OFFSET_Y)
  ctx.stroke()
}

// custom hook
function usePersistentState (init) {
  const [value, setValue] = React.useState(
    JSON.parse(localStorage.getItem('draw-chart')) || init
  )
  React.useEffect(() => {
    localStorage.setItem('draw-chart', JSON.stringify(value))
  })
  return [value, setValue]
}

// custom hook 2: a composition of the first custom hook // and React's useEffect + useRef
function usePersistentCanvas () {
  const [locations, setLocations] = usePersistentState([])
  const canvasRef = React.useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, window.innerWidth - 50, window.innerHeight - 50)
    locations.forEach(location => draw(ctx, location))
  })
  return [locations, setLocations, canvasRef]
}

export default function Chart (props) {
  const canvasRef = useRef(null)
  const points = [{ x: 1, y: 2 }, { x: 2, y: 3 }, { x: 3, y: 4 }, { x: 4, y: 5 }, { x: 5, y: 6 }]
  return (
    <>
      <Canvas
        ref={canvasRef}
        width={window.innerWidth - 50}
        height={window.innerHeight - 100}
        onClick={e => {
          const canvas = canvasRef.current
          const ctx = canvas.getContext('2d')
          ctx.beginPath()
          points.forEach(i => draw(ctx, i, window.innerWidth - 50, window.innerHeight - 100), props.locations)
        }}
      />

    </>
  )
}
