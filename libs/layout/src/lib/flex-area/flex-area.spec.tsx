import { render } from '@testing-library/react';

import FlexArea from './flex-area';

describe('FlexArea', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FlexArea />);
    expect(baseElement).toBeTruthy();
  });
});
