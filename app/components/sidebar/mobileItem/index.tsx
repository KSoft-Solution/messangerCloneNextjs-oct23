"use client";
import _ from "lodash";
import React, { FC, ReactElement } from "react";
import { IconType } from "react-icons";
import Link from "next/link";
import clsx from "clsx";

interface Props {
  href: string;
  icon: IconType;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const MobileItem: FC<Props> = ({
  href,
  icon: Icon,
  label,
  active,
  onClick,
}): ReactElement => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };
  return (
    <Link
      href={href}
      onClick={() => handleClick()}
      className={clsx(
        `
      group 
      flex 
      gap-x-3 
       text-sm 
       leading-6 
       font-semibold
        text-gray-500
        hover:text-black
        hover:bg-gray-100
        w-full
        p-4
        justify-center
        items-center
      `,
        active && "bg-gray-100 text-black"
      )}
    >
      <Icon />
      <span className="h-6 w-6">{label}</span>
    </Link>
  );
};

export default MobileItem;
