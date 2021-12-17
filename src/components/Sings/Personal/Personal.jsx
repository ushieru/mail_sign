import styles from './Personal.module.css'

const Personal = ({ data }) => {

  const getRequired = (value) =>
    data.personalRequired.find(option => option.name == value)?.value


  return <>
    <table
      id='signature'
      className={styles.mainTable}
    >
      <tr>
        <td className={styles.imageLayout} >
          {
            getRequired('Image') ?
              <img src={getRequired('Image')} className={styles.profileImage} /> :
              <div className={styles.profileImageSkeleton} />
          }
        </td>
        <td className={styles.containerLayout} >
          <table>
            <tr>
              <td>
                <div className={styles.separator} style={{ backgroundColor: '#1F2937' }} />
              </td>
              <td>
                <table style={{ height: '127px' }}>
                  <tr>
                    <td>
                      <p className={styles.name} style={{ color: '#1F2937' }} >{getRequired('Name')}</p>
                      <p className={styles.secondaryText} style={{ color: '#6B7280' }}>{getRequired('Company')}</p>
                      <p className={styles.secondaryText} style={{ color: '#6B7280' }}>{getRequired('Title')}</p>
                    </td>
                  </tr>
                  <tr style={{ marginTop: '0.5rem' }}>
                    <td>
                      {
                        data.extras.map(extra => <a href={extra.href(extra.value)} target='_blank' className={styles.iconLink} >
                          <img className={styles.icon} src={`/${extra.name.toLowerCase()}.png`} alt={extra.name} />
                        </a>)
                      }
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </>
}

export default Personal