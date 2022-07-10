import { useState } from 'react';
import { Provider } from 'react-redux';
import { createStore } from './create-store';

export { apiController } from './api-controller/api-controller';

/* eslint-disable-next-line */
export interface StoreProps {
  children: React.ReactNode;
}

export function Store({ children }: StoreProps) {
  const [store] = useState(() => createStore());
  return <Provider store={store}>{children}</Provider>;
}

export default Store;
