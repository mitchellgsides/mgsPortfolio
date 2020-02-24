import React, { useState } from 'react'
// import DogBox from './DogBox'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const SandboxContainer = styled.div`
  flex: 1;
  display: flex;
  background-color: rgba(100, 100, 100, 0.5);
`

// const TicTacToeBoard = styled.div`
//   display: grid;
//   grid-template-rows: 1fr 1fr 1fr;
//   grid-template-columns: 1fr 1fr 1fr;
//   background-color: rgba(200, 200, 200, 0.4);
//   height: 500px;
//   width: 500px;
// `

// const TTTBox = styled.div`
//   border: 1px solid red;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `
// const Marker = styled.div`
//     font-weight: 600;
//     padding: 2rem;
//     font-size: 2rem;
// `
// const Legend = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   padding: 1rem;
//   margin: 0.5rem;
// `

export default function Sandbox () {
//   const [X, setX] = useState([])
//   const [O, setO] = useState([])
//   const [currentTurn, setTurn] = useState('X')

  //   const handleSelectBox = (box) => {
  //     if (currentTurn === 'X') {
  //       setX([...X, box])
  //       setTurn('O')
  //     } else if (currentTurn === 'O') {
  //       setO([...O, box])
  //       setTurn('X')
  //     }
  //   }
  //   const TicTacToe = (
  //     <>
  //       <Legend>
  //         <div>
  //       React Sandbox
  //         </div>
  //         <div>
  //       Current Turn: {currentTurn}
  //         </div>
  //       </Legend>
  //       <TicTacToeBoard>
  //         {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i =>
  //           (
  //             <TTTBox
  //               key={`${i}-box`}
  //               onClick={() => handleSelectBox(i)}
  //             >
  //               <Marker>
  //                 {X.includes(i) ? 'X' : O.includes(i) ? 'O' : ''}
  //               </Marker>
  //             </TTTBox>)
  //         )}
  //       </TicTacToeBoard>
  //     </>)

  return (
    <SandboxContainer>
      <motion.div
        drag
        dragConstraints={{
          left: 0,
          right: 100,
          top: 0,
          bottom: 100
        }}
      >
            Mitchell
      </motion.div>
    </SandboxContainer>
  )
}
