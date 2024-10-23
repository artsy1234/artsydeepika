import NavbarClient from './navbar-client.jsx'

const Navbar = () => {
  return (
    <nav className="relative border-b bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <NavbarClient />
      </div>
    </nav>
  )
}

export default Navbar