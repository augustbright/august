import { apiController } from "@august/store";
import { Center } from '@august/layout';
import { QueryProgress } from "@august/components";

/* eslint-disable-next-line */
export interface AppInitProps {
  children: React.ReactElement;
}

export function AppInit({ children }: AppInitProps) {
  const query = apiController.useGetUserInfoQuery({}, {});
  if (query.data) return children;

  return (
    <Center>
      <QueryProgress query={query}>
        {children}
      </QueryProgress>
    </Center>
  );
}

export default AppInit;
