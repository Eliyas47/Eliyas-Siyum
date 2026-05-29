import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import SearchDialog from './SearchDialog'
import ThemeToggle from './ThemeToggle'
import ProfileAvatar from './ProfileAvatar'
import { NAV_ITEMS, useNavigation } from '../context/NavigationContext'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const { activePath } = useNavigation()

  const isActive = (path) => activePath === path || location.pathname === path

  return (
    <motion.nav
      className="fixed top-0 w-full z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative safe-area-top">
        <div className="absolute inset-0 theme-nav backdrop-blur-xl border-b border-[var(--color-border)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group">
              <ProfileAvatar size="nav" priority />
              <span className="text-lg sm:text-xl font-bold theme-text group-hover:opacity-90 transition-opacity hidden sm:inline">
                Eliyas Siyum
              </span>
              <span className="text-lg font-bold theme-text group-hover:opacity-90 transition-opacity sm:hidden">
                Eliyas
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-2">
              <SearchDialog />
              <ThemeToggle />
              {NAV_ITEMS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link ${isActive(link.path) ? 'nav-link-active' : ''}`}
                  aria-current={isActive(link.path) ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex md:hidden items-center space-x-1">
              <ThemeToggle />
              <SearchDialog />
              <button
                className="p-2 theme-text-muted hover:theme-text transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 theme-nav backdrop-blur-xl border-b border-[var(--color-border)]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {NAV_ITEMS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2 rounded-lg transition-colors ${
                    isActive(link.path) ? 'nav-link-active' : 'theme-text-muted hover:theme-text'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
