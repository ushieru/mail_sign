import { useEffect, useState } from "react"
import Sign from "../Sings/Small"
import useInput from '../../hooks/useInput'
import styles from './App.module.css'
import { OPTIONS } from './../../models/options'

const App = () => {
  const [showExtrasMenu, setShowExtrasMenu] = useState(false)

  const image = useInput()
  const name = useInput('Name Test')
  const company = useInput('Company Test')
  const title = useInput('Title Test')

  const [extras, setExtras] = useState([])

  const copytoClipboard = () => {
    const r = document.createRange();
    const signature = document.getElementById('signature');
    r.selectNode(signature);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
  }

  const addExtra = (option) =>
    setExtras(prev => [...prev, { ...option, value: '' }])

  const deleteExtra = (option) => {
    const newExtras = extras.filter(extra => extra.name != option.name)
    setExtras(_ => newExtras)
  }

  const onChangeValueExtra = (extraName, value) => {
    const newExtras = extras.map(extra => {
      if (extra.name == extraName)
        extra.value = value
      return extra
    })
    setExtras(_ => [...newExtras])
  }

  return <>
    <div className={styles.main} >
      <div className={styles.sideBar} >
        <button className={styles.copyButton} onClick={copytoClipboard}>Copy Signature</button>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* <p style={{ fontWeight: '700' }}>Colors</p>
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <label className={styles.labelForm} htmlFor="PrimaryColor">
              Primary
              <input className={styles.inputColor} type="color" {...primaryColor} />
            </label>

            <label className={styles.labelForm} htmlFor="SecondaryColor">
              Secondary
              <input className={styles.inputColor} id="SecondaryColor" type="color" {...secondaryColor} />
            </label>
          </div> */}

          <label className={styles.labelForm} htmlFor="Image">Image</label>
          <input id="Image" className={styles.inputForm} type="text" {...image} />

          <label className={styles.labelForm} htmlFor="Name">Name</label>
          <input id="Name" className={styles.inputForm} type="text" {...name} />

          <label className={styles.labelForm} htmlFor="Company">Company</label>
          <input id="Company" className={styles.inputForm} type="text" {...company} />

          <label className={styles.labelForm} htmlFor="Title">Title</label>
          <input id="Title" className={styles.inputForm} type="text" {...title} />
        </form>
        <p className={styles.extrasTitle}>
          EXTRAS
          <button onClick={() => setShowExtrasMenu(prev => !prev)} className={styles.extrasButton}>Add</button>
          <div style={showExtrasMenu ? {} : { display: 'none' }} className={styles.extrasMenu}>
            {
              OPTIONS
                .filter(option => !extras.find(extra => extra.name == option.name))
                .map(option => <button onClick={() => addExtra(option)} className={styles.extrasMenuButton}>{option.name}</button>)
            }
          </div>
        </p>
        <form id="Extras" onSubmit={(e) => e.preventDefault()}>
          {
            extras.map(extra => <>
              <label className={styles.labelForm} htmlFor={extra.name}>{extra.name}</label>
              <input id={extra.name} className={styles.inputForm} type="text" value={extra.value} onChange={(e) => onChangeValueExtra(extra.name, e.target.value)} />
              <button className={styles.extraInputButton} onClick={() => deleteExtra(extra)}>x</button>
            </>)
          }
        </form>
      </div>
      <div className={styles.container} >
        <Sign data={{
          image: image.value,
          name: name.value,
          company: company.value,
          title: title.value,
          extras
        }} />
      </div>
    </div >
  </>
}

export default App