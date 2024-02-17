import { ICommonParentProps } from "./PropComponents";

const MainContent = ({ children }: ICommonParentProps) => {
  return <div className="p-7">{children}</div>;
};

export default MainContent;
