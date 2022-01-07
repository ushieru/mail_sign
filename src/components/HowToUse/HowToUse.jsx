const HowToUse = () => {
    return <>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            padding: '2% 10%',
        }}>
            <span style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '30px'
            }}>
                How To Use?
            </span>
            <span>- Customize the signature</span>
            <br />
            <span>- Copy</span>
            <div>
                <img style={{ width: '200px' }} src="tuto1.png" alt="Tuto1" />
            </div>
            <span>- Paste (Ctrl + v) in your email signature configuration</span>
            <br />
            <br />
            <a href="https://support.google.com/mail/answer/8395?hl=es-419&co=GENIE.Platform%3DDesktop&oco=1" target='_blank'>
                How to create a Gmail signature?
            </a>
            <br />
            <a href="https://support.microsoft.com/es-es/office/crear-y-agregar-una-firma-de-correo-electr%C3%B3nico-en-outlook-com-776d9006-abdf-444e-b5b7-a61821dff034" target='_blank'>
                How to create a Outlook signature?
            </a>
        </div>
    </>
}

export default HowToUse