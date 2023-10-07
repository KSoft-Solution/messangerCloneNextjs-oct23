import { useRouter } from "@/hooks";
import _ from "lodash";
import React, { FC, ReactElement, useState } from "react";
import DesktopItem from "../desktopItem";

interface Props {}

const DesktopSidebar: FC<Props> = ({}): ReactElement => {
  const routes = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 xl:px-6 lg:overflow-y-auto lg:bg-white lg:border-r-[1px] lg:pb-4 lg:flex lg:flex-col justify-between">
      <nav className="mt-4 flex flex-col justify-between">
        <ul role="list" className="flex flex-col items-center space-y-1">
          {_.map(routes, (item) => (
            <DesktopItem
              key={item?.label}
              href={item?.href}
              icon={item?.icon}
              label={item?.label}
              active={item?.active}
              onClick={item?.onClick}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default DesktopSidebar;
