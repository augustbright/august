import { render } from '@testing-library/react';

import QueryError from './query-error';

describe('QueryError', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<QueryError />);
    expect(baseElement).toBeTruthy();
  });
});
