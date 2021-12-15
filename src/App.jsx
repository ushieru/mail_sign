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
    <div className="h-full flex">
      <div className="border-r border-gray-300 p-5 pt-5">
        <form onSubmit={(e) => e.preventDefault()}>
          <p className="font-bold">Colors</p>
          <div className="flex justify-evenly">
            <label className="block font-semibold" htmlFor="PrimaryColor">
              Primary
              <input id="PrimaryColor" className="block border rounded px-2 mb-2" type="color" {...primaryColor} />
            </label>

            <label className="block font-semibold" htmlFor="SecondaryColor">
              Secondary
              <input id="SecondaryColor" className="block border rounded px-2 mb-2" type="color" {...secondaryColor} />
            </label>
          </div>

          <label className="block font-bold" htmlFor="Image">Image</label>
          <input id="Image" className="border rounded px-2 mb-2" type="text" {...image} />

          <label className="block font-bold" htmlFor="Name">Name</label>
          <input id="Name" className="border rounded px-2 mb-2" type="text" {...name} />

          <label className="block font-bold" htmlFor="Company">Company</label>
          <input id="Company" className="border rounded px-2 mb-2" type="text" {...company} />

          <label className="block font-bold" htmlFor="Title">Title</label>
          <input id="Title" className="border rounded px-2 mb-2" type="text" {...title} />
        </form>
        <p className="font-bold text-xl mb-2">EXTRAS</p>
        <form id="Extras" onSubmit={(e) => e.preventDefault()}>

          <label className="block font-bold" htmlFor="Web">Web</label>
          <input id="Web" className="border rounded px-2 mb-2" type="text" {...web} />

          <label className="block font-bold" htmlFor="Mobile">Mobile</label>
          <input id="Mobile" className="border rounded px-2 mb-2" type="text" {...mobile} />

          <label className="block font-bold" htmlFor="Github">Github</label>
          <input id="Github" className="border rounded px-2 mb-2" type="text" {...github} />

          <label className="block font-bold" htmlFor="Linkedin">Linkedin</label>
          <input id="Linkedin" className="border rounded px-2 mb-2" type="text" {...linkedin} />

          <label className="block font-bold" htmlFor="Telegram">Telegram</label>
          <input id="Telegram" className="border rounded px-2 mb-2" type="text" {...telegram} />
        </form>
      </div>
      <div className="grow h-full grid place-content-center">
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
    </div>
  </>
}

export default App