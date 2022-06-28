import React from "react";
import Link from "next/link";
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
                <Link href="/">
                    <div className={styles.logo}>
                        <div className={styles.logo__img}>
                            <Image src={logo} alt="logo" placeholder="blur" />
                        </div>
                        <p  className={styles.logo__text}>Личный блог <br/> Frontend разработчика</p>
                    </div>
                </Link>
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
