import React from "react";
import useChecked from "../hooks/use-checked";
import useTheme from "../hooks/use-theme";
import Image from "../node_modules/next/image";
import logo from "../public/images/logo.png";
import styles from "./Header.module.css";

export default function Header() {
    const { theme, setTheme } = useTheme();
    const { checked, setChecked } = useChecked();

    const toggleTheme = () => {
        setTheme(!theme);
        setChecked(!checked);
    };

    return (
        <header className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Image src={logo} alt="logo" placeholder="blur" />
                </div>
                <div className={styles.toggle}>
                    <input
                        onClick={toggleTheme}
                        type="checkbox"
                        checked={checked}
                    />
                </div>
            </div>
        </header>
    );
}
