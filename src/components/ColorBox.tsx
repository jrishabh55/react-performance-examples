import { FC, MouseEventHandler, PropsWithChildren, useEffect } from 'react';
import styled from 'styled-components';

const ColorBoxWrapper = styled.span<Pick<ColorBoxProps, 'color'>>`
  display: flex;
  aspect-ratio: 1/1;
  background-color: ${({ color }) => color ?? 'lightblue'};
  justify-content: center;
  align-items: center;
  border: 2px dashed #333333;
  cursor: pointer;

  span {
    color: white;
    font-size: 2rem;
  }

  :focus-within {
    outline: 2px solid #333333;
  }

  :hover {
    border-color: red;
  }

  :hover span {
    color: red;
  }
`;

export type ColorBoxProps = PropsWithChildren & {
  color?: string;
  onClick: MouseEventHandler<HTMLSpanElement>;
};

const ColorBox: FC<ColorBoxProps> = ({ color, children, onClick }) => {
  useEffect(() => {
    console.info('ColorBox rendered', children);
    return () => {
      console.info('ColorBox unmounted', children);
      console.timeEnd(`remove item ${children}`);
    };
  }, [children]);

  return (
    <ColorBoxWrapper color={color} onClick={onClick}>
      <span>{children}</span>
    </ColorBoxWrapper>
  );
};

export default ColorBox;
