import React, { createContext, useContext, useEffect, useState } from 'react'



const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')

    const handleChangeTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        } else {
            setTheme("light");
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme")

        if (localTheme) {
            setTheme(localTheme);
            if (localTheme === "dark") {
                document.documentElement.classList.add("dark");
            }
        }
    }, [])

    return (
        <ThemeContext.Provider value={ { theme, handleChangeTheme } }>{
            children
        }</ThemeContext.Provider>
    )
}

export default ThemeProvider

export function useTheme() {
    const context = useContext(ThemeContext);

    if (context === null) {
        throw new Error("useTheme must be used within a ThemeContextProvider");
    }

    return context;
}