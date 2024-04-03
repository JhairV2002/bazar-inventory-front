"use client";

import { useEffect } from "react";

const BrandErrorHanlder = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div>
      <h2>Algo salio mal</h2>
      <button onClick={() => reset()} className="btn btn-active btn-accent">
        Reintentar
      </button>
    </div>
  );
};

export default BrandErrorHanlder;
