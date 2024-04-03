import { useEffect, useState } from "react";

const useToast = (show: boolean) => {
  const [timer, setTimer] = useState<any>();
  const [isShow, setIsShow] = useState(show);

  const showToast = () => {
    setIsShow(true);
    setTimer(
      setTimeout(() => {
        setIsShow(false);
      }, 3000)
    );
  };

  useEffect(() => {
    showToast();
    console.log("useToast", isShow, show);
    return () => clearTimeout(timer);
  }, [isShow]);

  return { isShow };
};

export default useToast;
