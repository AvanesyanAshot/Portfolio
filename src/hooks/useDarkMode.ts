import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import useMedia from "./useMedia";

const useDarkMode = () => {
  const [enabledState, setEnabledState] = useLocalStorage<boolean>(
    "light-mode-enabled",
    false
  );

  const prefersDarkMode = usePrefersDarkMode();

  const enabled = enabledState ?? prefersDarkMode;

  useEffect(() => {
    const className = "light__theme";
    const element = window.document.body;
    if (enabled) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  }, [enabled]);

  return [enabled, setEnabledState] as const;
};

function usePrefersDarkMode() {
  return useMedia<boolean>(["(prefers-color-scheme: light)"], [true], false);
}

export default useDarkMode;
