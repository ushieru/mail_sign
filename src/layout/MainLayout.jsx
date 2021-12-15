const MainLayout = ({ children }) => <>
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <nav style={{
            display: 'flex',
            alignItems: 'center',
            height: '0.75rem',
            borderBottomWidth: '1px',
            borderColor: 'rgb(209, 213, 219)',
            padding: '2.5rem',
            borderStyle: 'solid',
        }} >
            <a style={{ fontWeight: '700', fontSize: '1.5rem', lineHeight: '2rem' }} href="/">
                MailSign
            </a>
        </nav>
        <div style={{ height: '100%' }}>
            {children}
        </div>
        <footer style={{
            display: 'flex',
            alignItems: 'center',
            height: '0.75rem',
            borderTopWidth: '1px',
            borderColor: 'rgb(209, 213, 219)',
            padding: '2.5rem',
            borderStyle: 'solid',
        }}>
            Made with ❤️ by Ushieru
        </footer>
    </div>
</>

export default MainLayout