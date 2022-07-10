import { render } from '@testing-library/react';

import QueryProgress from './query-progress';

describe('QueryProgress', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<QueryProgress />);
    expect(baseElement).toBeTruthy();
  });
});
