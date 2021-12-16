import './styles.css'

const Small = ({ data }) => <>
  <table
    id='signature'
    className='main-table'
  >
    <tr>
      <td className='image-layout' >
        {
          data.image ?
            <img src={data.image} className='profile-image' /> :
            <div className='profile-image-skeleton' />
        }
      </td>
      <td className='container-layout' >
        <table>
          <tr>
            <td>
              <div className='separator' style={{ backgroundColor: '#1F2937' }} />
            </td>
            <td>
              <table style={{ height: '127px' }}>
                <tr>
                  <td>
                    <p className='name' style={{ color: '#1F2937' }} >{data.name}</p>
                    <p className='secondary-text' style={{ color: '#6B7280' }}>{data.company}</p>
                    <p className='secondary-text' style={{ color: '#6B7280' }}>{data.title}</p>
                  </td>
                </tr>
                <tr style={{ marginTop: '0.5rem' }}>
                  <td>
                    {
                      data.extras.map(extra => <a href={extra.href(extra.value)} target='_blank' className='icon-link' >
                        <img className='icon' src={`/${extra.name.toLowerCase()}.png`} alt={extra.name} />
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

export default Small