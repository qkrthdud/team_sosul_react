import React from "react";
import {  useLocation } from 'react-router-dom'
import classNames from "classnames";

import Hd from './Hd'
import Ft from './Ft'
import Quick from "./Quick";


interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  isMember: boolean;
  setIsMember : React.Dispatch<React.SetStateAction<boolean>>; // isMember 상태를 업데이트하는 함수
}


const Layout: React.FC<LayoutProps> = ({ children, className, isMember, setIsMember }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';


  const subcontentH = classNames({
    'pt-[0] indexpage': isHome,
    'pt-[100px] subpage': !isHome,
  });

  return (
    <div className={`${className} min-h-[100vh] flex flex-col`}>
        <Hd isHome={isHome} isMember={isMember} setIsMember={setIsMember} ></Hd>
        <div className={`${subcontentH} flex-grow  flex flex-col jusitfy-center align-center` }>
           {children}
        </div>      
        <Quick></Quick>
        <Ft></Ft>        
    </div>
  );
};

export default Layout;