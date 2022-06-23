import React from "react";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.userpic}></div>
            </div>
        </header>
    );
}
