import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { CustomIcon } from "./CustomIcon";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { ChangeEvent } from "react";

const Input = (props: {
  type: string;
  placeholder: string;
  icon: IconDefinition;
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  iconSize?: string;
  className?: string;
}) => {
  return (
    <label
      className={
        "input input-bordered flex items-center gap-2 " + props.className ?? " "
      }
    >
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={"grow"}
        value={props.value}
        onChange={props.onChange}
      />
      <CustomIcon icon={props.icon} className={props.iconSize ?? "w-4 h-4"} />
    </label>
  );
};

export default Input;
