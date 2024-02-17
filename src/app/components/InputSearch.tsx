import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { CustomIcon } from "./CustomIcon";

const InputSearch = () => {
  const iconSize = "w-4 h-4";
  return (
    <label className="input input-bordered flex items-center gap-2">
      <input type="text" className="grow" placeholder="Buscar" />
      <CustomIcon icon={faMagnifyingGlass} className={iconSize} />
    </label>
  );
};

export default InputSearch;
