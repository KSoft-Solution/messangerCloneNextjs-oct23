"use client";
import { User } from "@prisma/client";
import Image from "next/image";
import React, { ReactElement, FC } from "react";

interface Props {
  user?: User;
}

const Avatar: FC<Props> = ({ user }): ReactElement => {
  return (
    <div className="relative">
      <div className="relative inline-block rounded-full overflow-hidden h-9 w-9 md:h-11 md:w-11">
        <Image alt="avatar" src={user?.image || '/images/placeholder.jpg'} width={200} height={200}/>
      </div>
    </div>
  );
};

export default Avatar;
