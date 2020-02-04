import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    grid-template-columns: ${(p) => p.columns.join(' ')};
    background-color: rgb(40, 40, 40);
    width: 100vw;
`

const NavItem = styled.div`
    font-weight: 450;
    padding: 0.5rem;
    cursor: pointer;
`

const items = ['Home', 'Menu', 'Stuff']

export default function TitleBar () {
  return (
    <Container columns={items.map(i => '1fr')}>
      {items.map((item, i) => <NavItem key={`${item}-${i}`}>{item}</NavItem>)}
    </Container>
  )
}
