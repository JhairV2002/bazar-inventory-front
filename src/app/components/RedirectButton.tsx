"use client";
import { useRouter } from "next/navigation";
import { IredirectButtonProps } from "./PropComponents/IRedirectButton";

const RedirectButton = (props: IredirectButtonProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(props.route);
  };
  return (
    <button className="btn btn-active btn-accent my-6" onClick={handleClick}>
      {props.children}
    </button>
  );
};

export default RedirectButton;
