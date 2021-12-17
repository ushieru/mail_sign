import styles from './CompanyDouble.module.css'

const CompanyDouble = ({ data }) => {
    const getRequired = (str) =>
        data.doubleRequired.find(required => required.name == str)?.value

    return <>
        <table id='signature' className={styles.mainTable}>
            <tr>
                <td className={styles.tdContainerL}>
                    <table className={styles.tableInTdContainer}>
                        <tr>
                            <td style={{ textAlign: 'center' }}>
                                {
                                    getRequired('Company Image') ?
                                        <a style={{ textDecoration: 'none' }} target='_blank' href={getRequired('Company URL')}>
                                            <img className={styles.companyImage} src={getRequired('Company Image')} alt="Profile" />
                                            <p style={{ fontWeight: '700', color: getRequired('Company Color') ?? 'black' }}>{getRequired('Company Name')}</p>
                                        </a> :
                                        <div className={styles.companyImageSkeleton} />
                                }
                            </td>
                        </tr>
                    </table>
                </td>
                <td className={styles.tdContainerC}>
                    <div className={styles.separator}></div>
                </td>
                <td className={styles.tdContainerR}>
                    <table className={styles.tableInTdContainer}>
                        <tr>
                            <td style={{ textAlign: 'center', padding: '5px 0' }}>
                                {
                                    getRequired('Profile Image') ?
                                        <img className={styles.profileImage} src={getRequired('Profile Image')} alt="Profile" /> :
                                        <div className={styles.profileImageSkeleton} />
                                }
                                <p className={styles.name}>{getRequired('Name')}</p>
                                <p className={styles.title}>{getRequired('Title')}</p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </>
}

export default CompanyDouble
