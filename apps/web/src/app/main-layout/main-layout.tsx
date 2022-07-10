import { Header } from "@august/layout";
import ApplicationHeader from "../application-header/application-header";

/* eslint-disable-next-line */
export interface MainLayoutProps {}

export function MainLayout(props: MainLayoutProps) {
  return (
    <Header header={<ApplicationHeader />}>
      application content
    </Header>
  );
}

export default MainLayout;
