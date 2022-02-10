import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";
import useMedia from "./useMedia";
import useUpdateEffect from "./useUpdateEffect";

const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";

interface UseDarkModeOutput {
  isDarkMode: boolean;
  toggle: () => void;
  enable: () => void;
  disable: () => void;
}

function useDarkMode(defaultValue?: boolean): UseDarkModeOutput {
  const isDarkOS = useMedia(COLOR_SCHEME_QUERY);
  const [isDarkMode, setDarkMode] = useLocalStorage<boolean>(
    "light-mode-enabled",
    defaultValue ?? isDarkOS ?? false
  );
  useUpdateEffect(() => {
    setDarkMode(isDarkOS);
  }, [isDarkOS]);

  useEffect(() => {
    const className = "light__theme";
    const element = window.document.body;
    if (isDarkMode) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  }, [isDarkMode]);

  return {
    isDarkMode,
    toggle: () => setDarkMode((prev) => !prev),
    enable: () => setDarkMode(true),
    disable: () => setDarkMode(false),
  };
}

export default useDarkMode;
