import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  params: Promise<{ workspaceId: string }>;
}

const WorkspaceIdLayout = ({}: Props) => {
  return <></>;
};

export default WorkspaceIdLayout;
