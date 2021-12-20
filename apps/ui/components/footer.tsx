import React from "react"
import styles from '../styles/app.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <a
                href="https://etherscan.io/token/0x514910771af9ca656af840dff83e8264ecf986ca"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by Degeneracy
            </a>
        </footer>
    )
}

export default Footer