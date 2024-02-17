import { ICardProps } from "./PropComponents/index";

export const Card = ({ title, description }: ICardProps) => {
  return (
    <div className="card">
      <div className="card-body">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
