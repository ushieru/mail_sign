import styles from './Personal.module.css'

const PersonalSimple = ({ data }) => {

    const getRequired = (value) =>
        data.personalSimpleRequired.find(option => option.name == value)?.value

    return <>
        <table
            id='signature'
            className={styles.mainTable}
        >
            <tr>
                <td
                    style={{
                        borderColor: 'rgb(209, 213, 219)',
                        borderWidth: '1px 1px 0 1px',
                        borderStyle: 'solid',
                        padding: '3px 10px 0 10px'
                    }}
                >
                    <p className={styles.name} style={{ color: '#1F2937' }} >{getRequired('Name')}</p>
                    <p className={styles.secondaryText} style={{ color: '#6B7280' }}>{getRequired('Company')}</p>
                    <p className={styles.secondaryText} style={{ color: '#6B7280' }}>{getRequired('Title')}</p>
                </td>
            </tr>
            <tr style={{ marginTop: '0.5rem' }}>
                <td
                    style={{
                        borderColor: 'rgb(209, 213, 219)',
                        borderWidth: '0 1px 1px 1px',
                        borderStyle: 'solid',
                        padding: '0 10px 3px 10px'
                    }}
                >
                    {
                        data.extras.map(extra => <a href={extra.href(extra.value)} target='_blank' className={styles.iconLink} >
                            <img className={styles.icon} src={`/${extra.name.toLowerCase()}.png`} alt={extra.name} />
                        </a>)
                    }
                </td>
            </tr>
        </table>
    </>
}

export default PersonalSimple