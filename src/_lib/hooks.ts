import { useState, useEffect, useRef } from "react";
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
  const local = localStorage.getItem(key) || "{}";
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

export function useInterval(
  callback: () => void,
  delay: number | null | false,
  immediate?: boolean
): void {
  const savedCallback = useRef<() => void>();

  // Remember the latest callback if it changes
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval
  useEffect(() => {
    // If delay is null or false, do nothing
    if (delay === null || delay === false) {
      return;
    }

    // Function to be executed at each interval
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }

    // If immediate is true, call the function once immediately
    if (immediate) {
      tick();
    }

    const id = setInterval(tick, delay);

    // Clean up the interval on component unmount or when delay changes
    return () => clearInterval(id);
  }, [delay, immediate]);
}
