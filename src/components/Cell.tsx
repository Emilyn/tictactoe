import * as React from 'react';
import styled from 'styled-components';
import { Value } from './State';
const StyledCellComponent = styled.button`
  width: 150px;
  height: 150px;
  background: #fff;
  border: 1px solid #999;
  padding: 0;
  font-size: 24px;
  font-weight: bold;
`;
export type CellProps = {
  value: Value;
  onClick: () => void;
};
export function Cell(props: CellProps) {
  return (
    <StyledCellComponent onClick={props.onClick}>
      {props.value}
    </StyledCellComponent>
  );
}
