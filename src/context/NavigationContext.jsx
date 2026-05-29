import { createContext, useContext, useMemo, useState } from 'react'

const NavigationContext = createContext(null)

export const NAV_ITEMS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/education', label: 'Education' },
  { path: '/experience', label: 'Experience' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/certificates', label: 'Certificates' },
  { path: '/contact', label: 'Contact' },
]

export function NavigationProvider({ children }) {
  const [activePath, setActivePath] = useState('/')

  const value = useMemo(
    () => ({ activePath, setActivePath }),
    [activePath],
  )

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  )
}

export function useNavigation() {
  const context = useContext(NavigationContext)

  if (!context) {
    throw new Error('useNavigation must be used inside NavigationProvider')
  }

  return context
}