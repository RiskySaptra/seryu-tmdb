import { useState, useEffect } from "react";
import { useRevalidator } from "react-router-dom";

export function useWindowFocus() {
  const [isFocused, setIsFocused] = useState(true);

  useEffect(() => {
    const onFocus = () => setIsFocused(true);
    const onBlur = () => setIsFocused(false);

    window.addEventListener("focus", onFocus);
    window.addEventListener("blur", onBlur);

    return () => {
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("blur", onBlur);
    };
  }, [window]);

  return isFocused;
}

export function useLocalStorage(key: string) {
  let revalidator = useRevalidator();
  const local = localStorage.getItem(key) || "";
  const [state, setState] = useState<any>(JSON.parse(local));
  function setStorage(item: any, isDelete: boolean) {
    setState((prevState: any) => {
      const newState = { ...prevState };
      if (isDelete) {
        delete newState[item];
        return newState;
      } else {
        newState[item] = true;
      }

      return newState;
    });

    localStorage.setItem(key, JSON.stringify(state));
    revalidator.revalidate();
  }
  return [state, setStorage];
}
