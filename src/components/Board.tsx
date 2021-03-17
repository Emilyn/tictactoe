import * as React from 'react';
import { BoardState } from './State';
import { CellProps, Cell } from './Cell';
import { Column, Row } from "./Layout";
type BoardProps = {
  board: BoardState;
  onClick: (square: number) => void;
};
export function Board({ board, onClick }: BoardProps) {
  const cellOnClick = (square: number): CellProps => {
    return {
      value: board[square],
      onClick: () => onClick(square),
    };
  };
  return (
    <Column gap={0}>
      <Row gap={0}>
        <Cell {...cellOnClick(0)} />
        <Cell {...cellOnClick(1)} />
        <Cell {...cellOnClick(2)} />
      </Row>
      <Row gap={0}>
        <Cell {...cellOnClick(3)} />
        <Cell {...cellOnClick(4)} />
        <Cell {...cellOnClick(5)} />
      </Row>
      <Row gap={0}>
        <Cell {...cellOnClick(6)} />
        <Cell {...cellOnClick(7)} />
        <Cell {...cellOnClick(8)} />
      </Row>
    </Column>
  );
}
