import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Command, ArrowRight } from 'lucide-react'

const searchData = [
  {
    title: 'Home',
    description: 'Go to the welcome page',
    path: '/',
    keywords: ['home', 'cv', 'resume', 'start', 'welcome', 'portfolio', 'eliyas', 'eliyas siyum', 'backend developer', 'django', 'web developer'],
  },
  {
    title: 'About',
    description: 'Learn more about me and my background',
    path: '/about',
    keywords: ['about', 'background', 'education', 'bio', 'profile', 'cv', 'resume', 'eliyas', 'siyum', 'backend developer', 'software engineer', 'astu'],
  },
  {
    title: 'Education',
    description: 'View my educational background',
    path: '/education',
    keywords: ['education', 'university', 'degree', 'school', 'software engineering', 'astu', 'adama', 'ethiopia', 'matric', 'oda bisil'],
  },
  {
    title: 'Experience',
    description: 'Check out my professional experience',
    path: '/experience',
    keywords: ['experience', 'work', 'career', 'internships', 'django', 'rest api', 'networking', 'oromia seed enterprise', 'insa', 'backend developer'],
  },
  {
    title: 'Skills',
    description: 'Explore my technical skills and expertise',
    path: '/skills',
    keywords: ['skills', 'technologies', 'programming', 'languages', 'frameworks', 'django', 'python', 'postgresql', 'aws', 'react', 'javascript'],
  },
  {
    title: 'Projects',
    description: 'View my portfolio of projects',
    path: '/projects',
    keywords: ['projects', 'portfolio', 'work', 'github', 'django', 'chatbot', 'skill-swap', 'course marketplace', 'machine learning'],
  },
  {
    title: 'Certificate',
    description: 'University degree in Software Engineering',
    path: '/certificates',
    keywords: ['certificate', 'university', 'degree', 'astu', 'software engineering', 'bsc', 'graduation', 'academic'],
  },
  {
    title: 'Contact',
    description: 'Get in touch with me',
    path: '/contact',
    keywords: ['contact', 'email', 'message', 'connect', 'hire', 'collaboration', 'job', 'opportunity', 'whatsapp'],
  },
]

const SearchDialog = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [results, setResults] = useState(searchData)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      }

      if (!isOpen) return

      if (e.key === 'Escape') setIsOpen(false)

      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % results.length)
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + results.length) % results.length)
      }

      if (e.key === 'Enter' && results.length > 0) {
        e.preventDefault()
        navigate(results[selectedIndex].path)
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, results, selectedIndex, navigate])

  useEffect(() => {
    if (searchQuery) {
      const filtered = searchData.filter((item) => {
        const searchLower = searchQuery.toLowerCase()
        return (
          item.title.toLowerCase().includes(searchLower) ||
          item.description.toLowerCase().includes(searchLower) ||
          item.keywords.some((keyword) => keyword.toLowerCase().includes(searchLower))
        )
      })
      setResults(filtered)
      setSelectedIndex(0)
    } else {
      setResults(searchData)
    }
  }, [searchQuery])

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center space-x-2 px-3 py-1.5 theme-text-muted hover:theme-text transition-colors theme-card rounded-lg"
      >
        <Search className="w-4 h-4" />
        <span className="text-sm hidden sm:block">Search ...</span>
        <span className="hidden md:flex items-center space-x-1 px-1.5 py-0.5 text-xs bg-white/10 rounded">
          <Command className="w-3 h-3" />
          <span>K</span>
        </span>
      </button>
    )
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 text-center">
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />
        <div className="inline-block w-full max-w-2xl mt-24 text-left align-middle transition-all transform">
          <div className="relative theme-card rounded-xl shadow-2xl bg-[var(--color-bg-elevated)]">
            <div className="flex items-center px-4 border-b border-[var(--color-border)]">
              <Search className="w-5 h-5 theme-text-muted" />
              <input
                type="text"
                placeholder="Search pages..."
                className="w-full px-4 py-4 theme-text bg-transparent border-0 focus:outline-none focus:ring-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <div className="flex items-center space-x-1 px-1.5 py-0.5 text-xs text-gray-400 bg-white/10 rounded">
                <span>Esc</span>
              </div>
            </div>

            <div className="max-h-[60vh] overflow-y-auto">
              {results.length === 0 ? (
                <div className="p-4 text-sm theme-text-muted">No results found.</div>
              ) : (
                <div className="py-2">
                  {results.map((result, index) => (
                    <button
                      key={result.path}
                      className={`w-full px-4 py-3 text-left hover:bg-[var(--color-accent-soft)] flex items-center justify-between ${
                        index === selectedIndex ? 'bg-[var(--color-accent-soft)]' : ''
                      }`}
                      onClick={() => {
                        navigate(result.path)
                        setIsOpen(false)
                      }}
                    >
                      <div>
                        <div className="theme-text font-medium">{result.title}</div>
                        <div className="text-sm theme-text-muted">{result.description}</div>
                      </div>
                      <ArrowRight
                        className={`w-4 h-4 text-gray-400 ${
                          index === selectedIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchDialog
