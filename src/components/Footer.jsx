import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { CONTACT_INFO } from '@/config/contact'
import ProfileAvatar from './ProfileAvatar'

const pageLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Education', path: '/education' },
  { name: 'Experience', path: '/experience' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Certificates', path: '/certificates' },
  { name: 'Contact', path: '/contact' },
]

const Footer = () => {
  return (
    <footer className="site-footer mt-auto border-t border-[var(--color-border)]">
      <div className="absolute inset-0 theme-nav backdrop-blur-xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 py-10 sm:py-12">
          <div className="space-y-4 text-center sm:text-left">
            <Link to="/" className="inline-flex items-center gap-2.5 justify-center sm:justify-start">
              <ProfileAvatar size="nav" />
              <span className="text-lg font-bold theme-text">Eliyas Siyum</span>
            </Link>
            <p className="text-sm theme-text-muted max-w-xs mx-auto sm:mx-0">
              Software Engineering student at Adama Science and Technology University, Ethiopia.
            </p>
          </div>

          <div className="space-y-4 text-center sm:text-left">
            <h3 className="text-sm font-semibold theme-text">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-sm theme-text-muted hover:theme-text transition-colors inline-flex items-center gap-2 break-all justify-center sm:justify-start"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-sm theme-text-muted hover:theme-text transition-colors inline-flex items-center gap-2 justify-center sm:justify-start"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  {CONTACT_INFO.phone}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-semibold theme-text text-center sm:text-left">Quick Links</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-2 max-w-md mx-auto sm:mx-0 sm:max-w-none">
              {pageLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm theme-text-muted hover:theme-text transition-colors text-center sm:text-left py-1"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4 text-center sm:text-left">
            <h3 className="text-sm font-semibold theme-text">Social</h3>
            <div className="flex justify-center sm:justify-start gap-4">
              <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="theme-text-muted hover:theme-text transition-colors p-2" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="theme-text-muted hover:theme-text transition-colors p-2" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="theme-text-muted hover:theme-text transition-colors p-2" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="site-footer-bar border-t border-[var(--color-border)]">
          <p className="site-copyright">© 2026 Eliyas Siyum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
