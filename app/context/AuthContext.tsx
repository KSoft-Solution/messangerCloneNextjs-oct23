"use client";
import React, { ReactNode, FC, ReactElement } from "react";
import { SessionProvider } from "next-auth/react";

interface Props {
  children: ReactNode;
}

const AuthContext: FC<Props> = ({ children }): ReactElement => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthContext;
