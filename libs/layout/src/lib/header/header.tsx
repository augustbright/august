import React from "react";
import styled from "styled-components";

/* eslint-disable-next-line */
export interface HeaderProps {
  header: React.ReactNode;
  children: React.ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Top = styled.div`
  flex: 0 0 auto;
`;

const Bottom = styled.div`
  flex: 1 1 auto;
`;

export function Header({children, header}: HeaderProps) {
  return (
    <Container>
      <Top>
        {header}
      </Top>
      <Bottom>
        {children}
      </Bottom>
    </Container>
  );
}

export default Header;
