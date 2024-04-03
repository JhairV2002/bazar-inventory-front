import { ICommonParentProps } from "./PropComponents";

const MainContent = ({ children }: ICommonParentProps) => {
  return (
    <div className="lg:max-w-none prose prose-md lg:prose p-7">{children}</div>
  );
};

export default MainContent;
