import React from "react";
import {  useLocation } from 'react-router-dom'
import classNames from "classnames";

import Hd from './Hd'
import Ft from './Ft'
import Quick from "./Quick";


interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}


const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';


  const subcontentH = classNames({
    'pt-[0]': isHome,
    'pt-[100px]': !isHome,
  });

  return (
    <div className={className}>
        <Hd isHome={isHome} ></Hd>
        <div className={subcontentH }>
           {children}
        </div>      
        <Quick></Quick>
        <Ft></Ft>        
    </div>
  );
};

export default Layout;