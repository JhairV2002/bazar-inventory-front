import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICustomIconProps } from "./PropComponents";

export const CustomIcon = (props: ICustomIconProps) => {
  const defaultClassName = "w-8 h-8";
  return (
    <>
      <FontAwesomeIcon
        icon={props.icon}
        size="xs"
        className={props.className ? props.className : defaultClassName}
      />
    </>
  );
};
