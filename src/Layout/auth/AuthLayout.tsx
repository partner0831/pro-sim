import React from "react";
import AuthSidebar from "./AuthSidebar";

export function AuthContent({ children }: any) {
  return <div className="flex flex-row">{children}</div>;
}
type AuthLayoutProps = { children: any };
const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
}: AuthLayoutProps) => {
  return (
    <AuthContent>
      <AuthSidebar />
      {children}
    </AuthContent>
  );
};

export default AuthLayout;
