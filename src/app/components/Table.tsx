import { ProductResDTO } from "../dtos/ProductResDTO";
import { ITableProps } from "./PropComponents/ITableProps";

const Table = (props: ITableProps) => {
  if (!props.children) return <div>No hay products</div>;

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            {props.columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>{props.children}</tbody>
      </table>
    </div>
  );
};

export default Table;
