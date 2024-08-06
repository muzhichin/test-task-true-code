import {ReactNode, useState, useEffect} from "react";
import {ctxTheme} from "../processes/themeContext.ts";

const initState = localStorage.getItem('theme') as (null | "light-theme" | "dark-theme")
    || "light-theme"

export function ThemeProvider({children}: { children: ReactNode }) {
    const [theme, setTheme] =
        useState<"light-theme" | "dark-theme">(initState);

    useEffect(() => {
        document.documentElement.setAttribute('theme', theme)
    }, [theme])

    const toggleTheme = () => {
        const newTheme = theme === "light-theme" ? "dark-theme" : "light-theme"

        localStorage.setItem('theme', newTheme)
        setTheme(newTheme)
    }

    return <ctxTheme.Provider value={
        {currentTheme: theme, toggleTheme}
    }>{children}</ctxTheme.Provider>
}
