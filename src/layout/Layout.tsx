import React from "react";
import Hd from './Hd'
import Ft from './Ft'
import Quick from "./Quick";


interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <div className={className}>
        <Hd></Hd>
      {children}
        <Quick></Quick>
        <Ft></Ft>        
    </div>
  );
};

export default Layout;