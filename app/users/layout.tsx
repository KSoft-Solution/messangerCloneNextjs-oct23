import { Sidebar } from "@/components";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default async function UserLayout({ children }: Props) {
  return (
    <Sidebar>
      <div className="h-full">{children}</div>
    </Sidebar>
  );
}
