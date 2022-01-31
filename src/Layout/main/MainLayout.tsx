import React from "react";
import MainSidebar from "./MainSidebar";

export function MainContent({ children }: any) {
  return <div className="flex flex-row">{children}</div>;
}
type MainLayoutProps = { children: any };
const MainLayout: React.FC<MainLayoutProps> = ({
  children,
}: MainLayoutProps) => {
  return (
    <MainContent>
      <MainSidebar />
      {children}
    </MainContent>
  );
};

export default MainLayout;
