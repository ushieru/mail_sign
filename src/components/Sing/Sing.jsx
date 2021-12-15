import './styles.css'
import github from './../../assets/github-icon.svg'
import linkedin from './../../assets/linkedin-icon.svg'
import telegram from './../../assets/telegram.svg'
import web from './../../assets/web.svg'
import call from './../../assets/call.svg'

const Sign = ({ data }) => <>
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
              <div className='separator' style={{ backgroundColor: data.primaryColor }} />
            </td>
            <td>
              <table style={{ height: '127px' }}>
                <tr>
                  <td>
                    <p className='name' style={{ color: data.primaryColor }} >{data.name}</p>
                    <p className='secondary-text' style={{ color: data.secondaryColor }}>{data.company}</p>
                    <p className='secondary-text' style={{ color: data.secondaryColor }}>{data.title}</p>
                  </td>
                </tr>
                <tr style={{ marginTop: '0.5rem' }}>
                  <td>
                    {
                      data.mobile &&
                      <a href={`tel:${data.mobile}`} target='_blank' className='icon-link' >
                        <img src={call} alt="github" />
                      </a>
                    }
                    {
                      data.web &&
                      <a href={data.web} target='_blank' className='icon-link' >
                        <img src={web} alt="github" />
                      </a>
                    }
                    {
                      data.github &&
                      <a href={`https://github.com/${data.github}`} target='_blank' className='icon-link' >
                        <img src={github} alt="github" />
                      </a>
                    }
                    {
                      data.linkedin &&
                      <a href={`https://www.linkedin.com/in/${data.linkedin}/`} target='_blank' className='icon-link' >
                        <img src={linkedin} alt="linkedin" />
                      </a>
                    }
                    {
                      data.telegram &&
                      <a href={`https://t.me/${data.telegram}`} target='_blank' className='icon-link' >
                        <img src={telegram} alt="telegram" />
                      </a>
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

export default Sign