import React from 'react';
import styled from 'styled-components';

const TitleBar = () => {
  return (
    <Container>
      <Title>TitleBar</Title>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #eee;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

export default TitleBar
