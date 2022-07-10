import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FlexAreaProps {
  children: React.ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export function FlexArea({ children }: FlexAreaProps) {
  return <Container>{children}</Container>;
}

export default FlexArea;
