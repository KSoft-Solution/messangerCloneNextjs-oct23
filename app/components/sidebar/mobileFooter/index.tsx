"use client";
import { useConversation, useRouter } from "@/hooks";
import _ from "lodash";
import React, { FC, ReactElement } from "react";
import MobileItem from "../mobileItem";

interface Props {}

const MobileFooter: FC<Props> = ({}): any => {
  const routes = useRouter();
  const { isOpen } = useConversation();
  if (isOpen) {
    return null;
  }
  return (
    <div
      className="
  fixed
  justify-between
  w-full
  bottom-0
  z-40
  flex
  items-center bg-white
  border-t-[1px]
  lg:hidden
  "
    >
      {_.map(routes, (item) => (
        <MobileItem
          key={item?.label}
          href={item?.href}
          icon={item?.icon}
          label={item?.label}
          active={item?.active}
          onClick={item?.onClick}
        />
      ))}
    </div>
  );
};

export default MobileFooter;
