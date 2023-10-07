import React, { FC, ReactElement } from "react";
import { EmptyState } from "@/components";

interface Props {}

const Users: FC<Props> = ({}): ReactElement => {
  return (
    <div className="hidden lg:block lg:pl-80 h-full">
      <EmptyState />
    </div>
  );
};

export default Users;
