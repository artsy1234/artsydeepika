"use client"
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const NavLink = ({ href, children, pathname, onClick }) => {
  const isActive = pathname === href
  return (
    <Link 
      href={href}
      onClick={onClick}
      className={`${
        isActive 
          ? 'text-neutral-900 font-medium' 
          : 'text-neutral-600 hover:text-neutral-900'
      } transition-colors`}
    >
      {children}
    </Link>
  )
}

const MobileMenu = ({ isOpen, onClose, pathname }) => {
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/20 z-40 md:hidden"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`
          fixed top-0 right-0 bottom-0 w-[250px] bg-white z-50 shadow-xl
          transform transition-transform duration-300 ease-in-out md:hidden
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex flex-col p-6">
          <div className="flex justify-end mb-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex flex-col space-y-6">
            <NavLink href="/" pathname={pathname} onClick={onClose}>Home</NavLink>
            <NavLink href="/products" pathname={pathname} onClick={onClose}>Our Candles</NavLink>
            <NavLink href="/about" pathname={pathname} onClick={onClose}>About</NavLink>
          </div>
          <div className="mt-auto pt-8">
            <p className="text-sm text-neutral-500">
              Follow us on social media
            </p>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://www.instagram.com/artsydeepika/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-neutral-900"
              >
                Instagram
              </a>
              <a 
                href="https://www.facebook.com/MyThinkingWindow" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-neutral-900"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const NavbarClient = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <div className="flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          ArtsyDeepika
        </Link>
        
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          <NavLink href="/" pathname={pathname}>Home</NavLink>
          <NavLink href="/products" pathname={pathname}>Our Candles</NavLink>
          <NavLink href="/about" pathname={pathname}>About</NavLink>
        </div>
        
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      
      <MobileMenu 
        isOpen={isMenuOpen}
        onClose={closeMenu}
        pathname={pathname}
      />
    </>
  )
}

export default NavbarClient;