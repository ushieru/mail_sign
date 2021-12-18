import styles from './Welcome.module.css'

const Welcome = () => {
    return <>
        <div className={styles.mainContainer}>
            <p className={styles.title}>Templates:</p>
            <div className={styles.templateContainer}>
                <a href="/personal">
                    <img className={styles.imageTemplate} src="/personal-test.png" alt="personal-test" />
                </a>
                <a href="/company-double">
                    <img className={styles.imageTemplate} src="/company-double-test.png" alt="company-double-test" />
                </a>
                <a href="/company-simple">
                    <div style={{ display: 'inline-block', backgroundColor: 'gray' }} className={styles.imageTemplate} />
                </a>
            </div>
        </div>
    </>
}

export default Welcome