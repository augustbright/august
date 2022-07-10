import styled from 'styled-components';
import { Store } from '@august/store';
import AppInit from './app-init/app-init';
import { FlexArea } from '@august/layout';
import MainLayout from './main-layout/main-layout';
import { ThemeProvider } from '@mui/material';
import {lime} from './themes/lime';

const StyledApp = styled.div`
  width: 100%;
  height: 100%;
`;

export function App() {
  return (
    <StyledApp>
      <ThemeProvider theme={lime}>
        <Store>
          <FlexArea>
            <AppInit>
              <MainLayout />
            </AppInit>
          </FlexArea>
        </Store>
      </ThemeProvider>
    </StyledApp>
  );
}

export default App;
