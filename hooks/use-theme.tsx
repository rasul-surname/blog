import { useLayoutEffect, useState } from "react";

export default function useTheme() {
    const [theme, setTheme] = useState(
        typeof window !== "undefined" &&
            JSON.parse(localStorage.getItem("app-theme"))
    );

    useLayoutEffect(() => {
        localStorage.setItem("app-theme", JSON.stringify(theme));

        if (theme) {
            document.documentElement.setAttribute("data-theme", "light");
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
        }
    }, [theme]);

    return { theme, setTheme };
}
