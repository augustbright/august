import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CenterProps {
  children: React.ReactNode;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
`;

export function Center({ children }: CenterProps) {
  return <Container>{children}</Container>;
}

export default Center;
