"use client";
import React, { ReactElement, FC, ReactNode, useEffect } from "react";
import DesktopSidebar from "./deskTopSidebar";
import MobileFooter from "./mobileFooter";
import getSession from "@/actions/getSession";
interface Props {
  children: ReactNode;
}

const Sidebar: FC<Props> = ({ children }): ReactElement => {
 const getCurrentUser = getSession()
 console.log({getCurrentUser})
  return (
    <div className="h-full">
      <DesktopSidebar
      //   currentUser={currentUser}
      />
      <MobileFooter />
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
};

export default Sidebar;
