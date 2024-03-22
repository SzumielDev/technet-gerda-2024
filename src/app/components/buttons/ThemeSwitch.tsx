'use client'
import { Moon, Sun, Loader2 } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeSwitch = () => {

    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), [])

    if (!mounted) return (
        <Loader2 className="animation-rotate" color="rgb(3 105 161)" />
    )

    if (theme === "dark") return (
        <Moon className="cursor-pointer" color="white" onClick={() => setTheme('light')} />
    )

    if (theme === "light") return (
        <Sun className="cursor-pointer" color="black" onClick={() => setTheme('dark')} />
    )
}