import {createContext} from "react";

export const ctxTheme = createContext<{
    currentTheme: "light-theme" | "dark-theme",
    toggleTheme: () => void
}>({
    currentTheme: "light-theme",
    toggleTheme: () => null
});