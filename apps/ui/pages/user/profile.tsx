import React from "react"
import styles from '../../styles/app.module.css';
import { useWeb3React } from '@web3-react/core'

function Profile() {
    const web3React = useWeb3React();

    console.log(web3React);
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                User Profile 3
            </main>
        </div>
    )
}

export default Profile