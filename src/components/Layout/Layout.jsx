import './styles.css'

const Layout = ({ children }) => <>
    <div className='main-layout'>
        <nav className='nav' >
            <a className='mail-sign' href="/">
                MailSign
            </a>
        </nav>
        <main className='main'>
            {children}
        </main>
        <footer className='footer'>
            Made with ❤️ by Ushieru
        </footer>
    </div>
</>

export default Layout