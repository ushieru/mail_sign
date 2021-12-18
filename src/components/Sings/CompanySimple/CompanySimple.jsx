import styles from './CompanySimple.module.css'

const CompanySimple = ({ data }) => {
    const getRequired = (str) =>
        data.companySimpleRequired.find(required => required.name == str)?.value

    return <>
        <table id='signature' className={styles.mainTable}>
            <tr>
                <td className={styles.tdContainerL}>
                    <table className={styles.tableInTdContainerL}>
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
                    <table className={styles.tableInTdContainerR}>
                        <tr>
                            <td style={{ padding: '0 0 0 5px', verticalAlign: 'middle' }}>
                                <p className={styles.name}>{getRequired('Name')}</p>
                                <p className={styles.title}>{getRequired('Title')}</p>
                                <p className={styles.title}>{getRequired('Extra1')}</p>
                                <p className={styles.title}>{getRequired('Extra2')}</p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </>
}

export default CompanySimple
