import * as React from 'react';
import { useGameState } from './State';
import { Board } from './Board';
import { Row, Column } from './Layout';
import styled from 'styled-components';

const StyledResetButton = styled.button`
  width: 100px;
  height: 50px;
  background: #fff;
  border: 1px solid #999;
  padding: 0;
  font-size: 24px;
  font-weight: bold;
`;

const StyledText = styled.button`
  background: #000;
  font-size: 24px;
  font-weight: bold;
`;

function Game() {
  const {
    current,
    xIsNext,
    jumpTo,
    winner,
    handleClick,
  } = useGameState();

  return (
    <Row gap={20}>
      <Column gap={20}>
        <div>{
          winner
            ? `Winner ${winner}`
            : `Next Player ${xIsNext ? 'X' : 'O'}`
        }</div>   <StyledResetButton onClick={() => jumpTo(0)}>Reset</StyledResetButton>
        <Board board={current} onClick={handleClick} />
      </Column>
   
    </Row>
  );
}
export default Game;