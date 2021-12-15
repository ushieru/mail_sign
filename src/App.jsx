import Sign from "./components/Sing"
import useInput from './hooks/useInput'
import styles from './App.module.css'

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

  const copytoClipboard = () => {
    const r = document.createRange();
    const signature = document.getElementById('signature');
    r.selectNode(signature);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
  }

  return <>
    <div className={styles.main} >
      <div className={styles.sideBar} >
        <button className={styles.copyButton} onClick={copytoClipboard}>Copy Signature</button>
        <form onSubmit={(e) => e.preventDefault()}>
          <p style={{ fontWeight: '700' }}>Colors</p>
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <label className={styles.labelForm} htmlFor="PrimaryColor">
              Primary
              <input className={styles.inputColor} type="color" {...primaryColor} />
            </label>

            <label className={styles.labelForm} htmlFor="SecondaryColor">
              Secondary
              <input className={styles.inputColor} id="SecondaryColor" type="color" {...secondaryColor} />
            </label>
          </div>

          <label className={styles.labelForm} htmlFor="Image">Image</label>
          <input id="Image" className={styles.inputForm} type="text" {...image} />

          <label className={styles.labelForm} htmlFor="Name">Name</label>
          <input id="Name" className={styles.inputForm} type="text" {...name} />

          <label className={styles.labelForm} htmlFor="Company">Company</label>
          <input id="Company" className={styles.inputForm} type="text" {...company} />

          <label className={styles.labelForm} htmlFor="Title">Title</label>
          <input id="Title" className={styles.inputForm} type="text" {...title} />
        </form>
        <p style={{
          fontWeight: '700',
          fontSize: '1.25rem',
          lineHeight: '1.75rem',
          marginBottom: '0.5rem',
        }} className="font-bold text-xl mb-2">EXTRAS</p>
        <form id="Extras" onSubmit={(e) => e.preventDefault()}>
          <label className={styles.labelForm} htmlFor="Web">Web</label>
          <input id="Web" className={styles.inputForm} type="text" {...web} />

          <label className={styles.labelForm} htmlFor="Mobile">Mobile</label>
          <input id="Mobile" className={styles.inputForm} type="text" {...mobile} />

          <label className={styles.labelForm} htmlFor="Github">Github</label>
          <input id="Github" className={styles.inputForm} type="text" {...github} />

          <label className={styles.labelForm} htmlFor="Linkedin">Linkedin</label>
          <input id="Linkedin" className={styles.inputForm} type="text" {...linkedin} />

          <label className={styles.labelForm} htmlFor="Telegram">Telegram</label>
          <input id="Telegram" className={styles.inputForm} type="text" {...telegram} />
        </form>
      </div>
      <div className={styles.container} >
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