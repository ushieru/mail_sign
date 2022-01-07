import { useState } from "react"
import { useRoute } from 'wouter'
import styles from './App.module.css'

import Personal, { personalExtras, personalRequired } from "../Sings/Personal"
import PersonalSimple, { personalSimpleExtras, personalSimpleRequired } from '../Sings/PersonalSimple'
import CompanyDouble, { doubleExtras, doubleRequired } from "../Sings/CompanyDouble"
import CompanySimple, { companySimpleExtras, companySimpleRequired } from '../Sings/CompanySimple'

const App = () => {
  const [_match, params] = useRoute("/:sign");

  const [showExtrasMenu, setShowExtrasMenu] = useState(false)

  const [requiredOptions, setRequiredOptions] = useState([])
  const [extrasOptions, setExtrasOptions] = useState([])

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

  const onChangeValueRequired = (requiredName, value) => {
    const newRequired = requiredOptions.map(option => {
      if (option.name == requiredName)
        option.value = value
      return option
    })
    setRequiredOptions(_ => [...newRequired])
  }

  const getSign = (sign) => {
    switch (sign) {
      case 'personal':
        if (!requiredOptions.length) {
          setExtrasOptions(_ => personalExtras)
          setRequiredOptions(_ => personalRequired)
        }
        return <Personal data={{
          personalRequired,
          extras
        }} />
      case 'personal-simple':
        if (!requiredOptions.length) {
          setExtrasOptions(_ => personalSimpleExtras)
          setRequiredOptions(_ => personalSimpleRequired)
        }
        return <PersonalSimple data={{
          personalSimpleRequired,
          extras
        }} />
      case 'company-double':
        if (!requiredOptions.length) {
          setExtrasOptions(_ => doubleExtras)
          setRequiredOptions(_ => doubleRequired)
        }
        return <CompanyDouble data={{
          doubleRequired,
          extras
        }} />
      case 'company-simple':
        if (!requiredOptions.length) {
          setExtrasOptions(_ => companySimpleExtras)
          setRequiredOptions(_ => companySimpleRequired)
        }
        return <CompanySimple data={{
          companySimpleRequired,
          extras
        }} />
      default:
        if (!requiredOptions.length) {
          setExtrasOptions(_ => personalExtras)
          setRequiredOptions(_ => personalRequired)
        }
        return <Personal data={{
          personalRequired,
          extras
        }} />
    }
  }

  return <>
    <div className={styles.main} >
      <div className={styles.sideBar} >
        <button className={styles.copyButton} onClick={copytoClipboard}>Copy Signature</button>
        <form onSubmit={(e) => e.preventDefault()}>
          {
            requiredOptions.map(option => <>
              <label className={styles.labelForm} htmlFor={option.name}>{option.name}</label>
              <input id={option.name} className={styles.inputForm} type={option.type ?? 'text'} value={option.value} onChange={(e) => onChangeValueRequired(option.name, e.target.value)} />
            </>)
          }
        </form>
        {
          extrasOptions.length > 0 &&
          <>
            <p className={styles.extrasTitle}>
              EXTRAS
              <button onClick={() => setShowExtrasMenu(prev => !prev)} className={styles.extrasButton}>Add</button>
              <div style={showExtrasMenu ? {} : { display: 'none' }} className={styles.extrasMenu}>
                {
                  extrasOptions
                    .filter(option => !extras.find(extra => extra.name == option.name))
                    .map(option => <button onClick={() => addExtra(option)} className={styles.extrasMenuButton}>{option.name}</button>)
                }
              </div>
            </p>
            <form id="Extras" onSubmit={(e) => e.preventDefault()}>
              {
                extras.map(extra => <>
                  <label className={styles.labelForm} htmlFor={extra.name}>
                    {extra.name}
                  </label>
                  <div style={{ display: 'flex' }}>
                    <input id={extra.name} className={styles.inputForm} type="text" value={extra.value} onChange={(e) => onChangeValueExtra(extra.name, e.target.value)} />
                    <button className={styles.deleteButton} onClick={() => deleteExtra(extra)}>x</button>
                  </div>
                  <p style={{ fontSize: '12px' }}>{extra.href(extra.value)}</p>
                </>)
              }
            </form>
          </>
        }
      </div>
      <div className={styles.container} >
        {getSign(params.sign)}
      </div>
    </div >
  </>
}

export default App