import { render } from '@testing-library/react';

import AppInit from './app-init';

describe('AppInit', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppInit />);
    expect(baseElement).toBeTruthy();
  });
});
