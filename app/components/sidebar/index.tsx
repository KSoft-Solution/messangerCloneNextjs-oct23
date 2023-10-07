"use client";
import React, { ReactElement, FC, ReactNode } from "react";
import DesktopSidebar from "./deskTopSidebar";
import MobileFooter from "./mobileFooter";

interface Props {
  children: ReactNode;
}

const Sidebar: FC<Props> = ({ children }): ReactElement => {
  return (
    <div className="h-full">
      <DesktopSidebar />
      <MobileFooter/>
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
};

export default Sidebar;
