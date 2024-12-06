import React, { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
  }
  
const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">{children}</div>
    );
};

export default Layout;