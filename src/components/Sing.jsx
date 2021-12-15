import github from './../assets/github-icon.svg'
import linkedin from './../assets/linkedin-icon.svg'
import telegram from './../assets/telegram.svg'
import web from './../assets/web.svg'
import call from './../assets/call.svg'

const Sign = ({ data }) => {
  return <>
    <table
      style={{
        borderCollapse: 'collapse',
        borderRadius: '0.25rem',
        overflow: 'hidden',
        tableLayout: 'fixed',
        height: '120px',
        width: '300px'
      }}
    >
      <tr>
        <td
          style={{
            width: '90px',
            borderColor: 'rgb(209, 213, 219)',
            borderTopWidth: '1px',
            borderBottomWidth: '1px',
            borderLeftWidth: '1px',
            borderStyle: 'solid',
          }}
        >
          {data.image ?
            <img
              src={data.image}
              style={{
                backgroundSize: 'cover',
                borderRadius: '9999px',
                width: '80px',
                height: '80px',
                margin: 'auto',
                marginLeft: '8px',
                marginRight: '8px'
              }}
            /> :
            <div
              style={{
                backgroundSize: 'cover',
                borderRadius: '9999px',
                backgroundColor: 'gray',
                width: '80px',
                height: '80px',
                margin: 'auto',
                marginLeft: '8px',
                marginRight: '8px'
              }}
            />
          }
        </td>
        <td
          style={{
            width: '210px',
            borderColor: 'rgb(209, 213, 219)',
            borderTopWidth: '1px',
            borderBottomWidth: '1px',
            borderRightWidth: '1px',
            paddingRight: '12px',
            borderStyle: 'solid',
          }}
        >
          <table>
            <tr>
              <td>
                <div style={{
                  backgroundColor: data.primaryColor,
                  height: '110px',
                  width: '2px',
                  borderRadius: '9999px',
                  marginRight: '0.75rem'
                }}
                />
              </td>
              <td>
                <table style={{ height: '127px' }}>
                  <tr>
                    <td>
                      <p style={{
                        color: data.primaryColor,
                        lineHeight: '1.3rem',
                        fontSize: '1.125rem',
                        fontWeight: '700'
                      }}>{data.name}</p>
                      <p style={{ lineHeight: '1.3rem', color: data.secondaryColor, fontWeight: 500 }}>{data.company}</p>
                      <p style={{ lineHeight: '1.3rem', color: data.secondaryColor, fontWeight: 500 }}>{data.title}</p>
                    </td>
                  </tr>
                  <tr style={{ marginTop: '0.5rem' }}>
                    <td>
                      {
                        data.mobile &&
                        <a href={`tel:${data.mobile}`} target='_blank' style={{ display: 'inline-block', width: '25px', height: '25px', marginRight: '0.5rem' }} >
                          <img style={{ height: '24px', width: '24px' }} src={call} alt="github" />
                        </a>
                      }
                      {
                        data.web &&
                        <a href={data.web} target='_blank' style={{ display: 'inline-block', width: '25px', height: '25px', marginRight: '0.5rem' }} >
                          <img style={{ height: '24px', width: '24px' }} src={web} alt="github" />
                        </a>
                      }
                      {
                        data.github &&
                        <a href={`https://github.com/${data.github}`} target='_blank' style={{ display: 'inline-block', width: '25px', height: '25px', marginRight: '0.5rem' }} >
                          <img style={{ height: '24px', width: '24px' }} src={github} alt="github" />
                        </a>
                      }
                      {
                        data.linkedin &&
                        <a href={`https://www.linkedin.com/in/${data.linkedin}/`} target='_blank' style={{ display: 'inline-block', width: '25px', height: '25px', marginRight: '0.5rem' }} >
                          <img style={{ height: '24px', width: '24px' }} src={linkedin} alt="linkedin" />
                        </a>
                      }
                      {
                        data.telegram &&
                        <a href={`https://t.me/${data.telegram}`} target='_blank' style={{ display: 'inline-block', width: '25px', height: '25px', marginRight: '0.5rem' }} >
                          <img style={{ height: '24px', width: '24px' }} src={telegram} alt="telegram" />
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


    {/* <table className="border-collapse rounded overflow-hidden table-fixed h-[120px] min-w-[300px]">
      <tr>
        <td className="w-[33%] border-y border-l">
          {data.image ?
            <img
              src={data.image}
              className="bg-cover rounded-full w-[80px] h-[80px] m-auto mx-2"
            /> :
            <div className="bg-gray-500 rounded-full w-[80px] h-[80px] m-auto mx-2" />
          }
        </td>
        <td className="w-[67%] border-y border-r pr-3">
          <div className="flex items-center">
            <div style={{ backgroundColor: data.primaryColor }} className="h-[110px] w-[2px] rounded-full mr-3" />
            <div className="h-[110px] flex flex-col justify-between py-2">
              <div>
                <p style={{ color: data.primaryColor, lineHeight: '1.3rem' }} className="text-lg font-bold">{data.name}</p>
                <p className="font-medium" style={{ lineHeight: '1.3rem', color: data.secondaryColor }}>{data.company}</p>
                <p className="font-medium" style={{ lineHeight: '1.3rem', color: data.secondaryColor }}>{data.title}</p>
              </div>
              <div className="flex gap-3 justify-center">
                {data.mobile && <a href={`tel:${data.mobile}`} target='_blank' className="no-underline rounded-full inline-block w-[25px] h-[25px]" >
                  <img className='h-[24px] w-[24px]' src={call} alt="github" />
                </a>}
                {data.web && <a href={data.web} target='_blank' className="no-underline rounded-full inline-block w-[25px] h-[25px]" >
                  <img className='h-[24px] w-[24px]' src={web} alt="github" />
                </a>}
                {data.github && <a href={`https://github.com/${data.github}`} target='_blank' className="no-underline rounded-full inline-block w-[25px] h-[25px]" >
                  <img className='h-[24px] w-[24px]' src={github} alt="github" />
                </a>}
                {data.linkedin && <a href={`https://www.linkedin.com/in/${data.linkedin}/`} target='_blank' className="no-underline rounded-full inline-block w-[25px] h-[25px]" >
                  <img className='h-[24px] w-[24px]' src={linkedin} alt="linkedin" />
                </a>}
                {data.telegram && <a href={`https://t.me/${data.telegram}`} target='_blank' className="no-underline rounded-full inline-block w-[25px] h-[25px]" >
                  <img className='h-[24px] w-[24px]' src={telegram} alt="telegram" />
                </a>}
              </div>
            </div>
          </div>
        </td>
      </tr>
    </table> */}
  </>
}

export default Sign