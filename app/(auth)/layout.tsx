import React from "react";
import '@/styles/globals.css'

type RootLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default AuthLayout;
