import Sign from "./components/Sing"
import useInput from './hooks/useInput'

const App = () => {

  const primaryColor = useInput('#1F2937')
  const secondaryColor = useInput('#6B7280')


  const image = useInput()

  const name = useInput('Name Test')
  const company = useInput('Company Test')
  const title = useInput('Title Test')

  const github = useInput()
  const linkedin = useInput()
  const telegram = useInput()
  const web = useInput()
  const mobile = useInput()

  return <>
    <div style={{ height: '100%', display: 'flex' }} >
      <div style={{
        paddingTop: '1.25rem',
        padding: '1.25rem',
        borderColor: 'rgb(209 213 219)',
        borderRightWidth: '1px',
        borderStyle: 'solid',
      }} >
        <form onSubmit={(e) => e.preventDefault()}>
          <p style={{ fontWeight: '700' }}>Colors</p>
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <label style={{ display: 'block', fontWeight: '700' }} htmlFor="PrimaryColor">
              Primary
              <input style={{
                display: 'block',
                borderWidth: '1px',
                borderRadius: '0.25rem',
                marginBottom: '0.5rem',
                paddingLeft: '0.5rem',
                paddingRight: '0.5rem',
              }} type="color" {...primaryColor} />
            </label>

            <label style={{ display: 'block', fontWeight: '700' }} htmlFor="SecondaryColor">
              Secondary
              <input style={{
                display: 'block',
                borderWidth: '1px',
                borderRadius: '0.25rem',
                marginBottom: '0.5rem',
                paddingLeft: '0.5rem',
                paddingRight: '0.5rem',
              }} id="SecondaryColor" type="color" {...secondaryColor} />
            </label>
          </div>

          <label style={{ display: 'block', fontWeight: '700' }} htmlFor="Image">Image</label>
          <input id="Image" style={{
            paddingLeft: '0.5rem',
            paddingRight: '0.5rem',
            borderWidth: '1px',
            borderRadius: '0.25rem',
            marginBottom: '0.5rem',
          }} type="text" {...image} />

          <label style={{ display: 'block', fontWeight: '700' }} htmlFor="Name">Name</label>
          <input id="Name" style={{
            paddingLeft: '0.5rem',
            paddingRight: '0.5rem',
            borderWidth: '1px',
            borderRadius: '0.25rem',
            marginBottom: '0.5rem',
          }} type="text" {...name} />

          <label style={{ display: 'block', fontWeight: '700' }} htmlFor="Company">Company</label>
          <input id="Company" style={{
            paddingLeft: '0.5rem',
            paddingRight: '0.5rem',
            borderWidth: '1px',
            borderRadius: '0.25rem',
            marginBottom: '0.5rem',
          }} type="text" {...company} />

          <label style={{ display: 'block', fontWeight: '700' }} htmlFor="Title">Title</label>
          <input id="Title" style={{
            paddingLeft: '0.5rem',
            paddingRight: '0.5rem',
            borderWidth: '1px',
            borderRadius: '0.25rem',
            marginBottom: '0.5rem',
          }} type="text" {...title} />
        </form>
        <p style={{
          fontWeight: '700',
          fontSize: '1.25rem',
          lineHeight: '1.75rem',
          marginBottom: '0.5rem',
        }} className="font-bold text-xl mb-2">EXTRAS</p>
        <form id="Extras" onSubmit={(e) => e.preventDefault()}>
          <label style={{ display: 'block', fontWeight: '700' }} htmlFor="Web">Web</label>
          <input id="Web" style={{
            paddingLeft: '0.5rem',
            paddingRight: '0.5rem',
            borderWidth: '1px',
            borderRadius: '0.25rem',
            marginBottom: '0.5rem',
          }} type="text" {...web} />

          <label style={{ display: 'block', fontWeight: '700' }} htmlFor="Mobile">Mobile</label>
          <input id="Mobile" style={{
            paddingLeft: '0.5rem',
            paddingRight: '0.5rem',
            borderWidth: '1px',
            borderRadius: '0.25rem',
            marginBottom: '0.5rem',
          }} type="text" {...mobile} />

          <label style={{ display: 'block', fontWeight: '700' }} htmlFor="Github">Github</label>
          <input id="Github" style={{
            paddingLeft: '0.5rem',
            paddingRight: '0.5rem',
            borderWidth: '1px',
            borderRadius: '0.25rem',
            marginBottom: '0.5rem',
          }} type="text" {...github} />

          <label style={{ display: 'block', fontWeight: '700' }} htmlFor="Linkedin">Linkedin</label>
          <input id="Linkedin" style={{
            paddingLeft: '0.5rem',
            paddingRight: '0.5rem',
            borderWidth: '1px',
            borderRadius: '0.25rem',
            marginBottom: '0.5rem',
          }} type="text" {...linkedin} />

          <label style={{ display: 'block', fontWeight: '700' }} htmlFor="Telegram">Telegram</label>
          <input id="Telegram" style={{
            paddingLeft: '0.5rem',
            paddingRight: '0.5rem',
            borderWidth: '1px',
            borderRadius: '0.25rem',
            marginBottom: '0.5rem',
          }} type="text" {...telegram} />
        </form>
      </div>
      <div style={{
        height: '100%',
        display: 'grid',
        flexGrow: '1',
        placeContent: 'center',
      }} >
        <Sign data={{
          image: image.value,
          name: name.value,
          company: company.value,
          title: title.value,
          primaryColor: primaryColor.value,
          secondaryColor: secondaryColor.value,
          github: github.value,
          linkedin: linkedin.value,
          telegram: telegram.value,
          web: web.value,
          mobile: mobile.value
        }} />
      </div>
    </div >
  </>
}

export default App