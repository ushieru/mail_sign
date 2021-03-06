import styles from './Welcome.module.css'

const Welcome = () => {
    return <>
        <div className={styles.mainContainer}>
            <p className={styles.title}>Templates:</p>
            <div className={styles.templateContainer}>
                <a href="/personal-simple">
                    <img className={styles.imageTemplate} src="/personal-simple-test.png" alt="personal-simple-test" />
                </a>
                <a href="/personal">
                    <img className={styles.imageTemplate} src="/personal-test.png" alt="personal-test" />
                </a>
                <a href="/company-double">
                    <img className={styles.imageTemplate} src="/company-double-test.png" alt="company-double-test" />
                </a>
                <a href="/company-simple">
                    <img className={styles.imageTemplate} src="/company-simple-test.png" alt="company-simple-test" />
                </a>
            </div>
        </div>
    </>
}

export default Welcome