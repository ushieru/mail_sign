const MainLayout = ({ children }) => <>
    <div className="flex flex-col h-screen">
        <nav className="flex items-center h-3 border-b border-gray-300 p-10">
            <a className="font-bold text-2xl" href="/">
                MailSign
            </a>
        </nav>
        <div className="h-full">
            {children}
        </div>
        <footer className="flex items-center h-4 border-t border-gray-300 p-10">
            Made with ❤️ by Ushieru
        </footer>
    </div>
</>

export default MainLayout