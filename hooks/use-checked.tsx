import { useLayoutEffect, useState } from "react";

export default function useChecked() {
    const [checked, setChecked] = useState(
        typeof window !== "undefined" &&
            JSON.parse(localStorage.getItem("app-toggle"))
    );

    useLayoutEffect(() => {
        localStorage.setItem("app-toggle", JSON.stringify(checked));
    }, [checked]);

    return { checked, setChecked };
}
