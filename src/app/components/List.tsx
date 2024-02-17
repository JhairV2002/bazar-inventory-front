import { ICommonParentProps } from "./PropComponents";

const List = (props: ICommonParentProps) => {
  if (!props.children) return <div>No hay productos</div>;
  return (
    <ul className="rounded shadow-sm shadow-slate-400">{props.children}</ul>
  );
};

export default List;
