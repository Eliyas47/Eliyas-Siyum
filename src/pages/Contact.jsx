import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Clock, Send, MessageSquare } from 'lucide-react'
import { useState } from 'react'
import { CONTACT_INFO } from '@/config/contact'
import { OFFICE_HOURS } from '@/config/contact'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitStatus, setSubmitStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, subject, message } = formData
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${body}`
    setSubmitStatus('success')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, label: 'Email', value: CONTACT_INFO.email, link: `mailto:${CONTACT_INFO.email}` },
    { icon: <Phone className="w-5 h-5" />, label: 'Phone', value: CONTACT_INFO.phone, link: `tel:${CONTACT_INFO.phone}` },
    { icon: <MapPin className="w-5 h-5" />, label: 'Location', value: CONTACT_INFO.location },
    { icon: <Clock className="w-5 h-5" />, label: 'Time Zone', value: CONTACT_INFO.timezone },
  ]

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, label: 'GitHub', link: CONTACT_INFO.github },
    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', link: CONTACT_INFO.linkedin },
    { icon: <MessageCircle className="w-5 h-5" />, label: 'WhatsApp', link: `https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}` },
  ]

  return (
    <div className="min-h-screen pt-16 sm:pt-20 px-4 max-w-6xl mx-auto pb-16 sm:pb-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <motion.div
          className="flex items-center gap-3 mb-4 sm:mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8" />
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Get in Touch</h2>
        </motion.div>

        <p className="theme-text-muted mb-8 sm:mb-12 max-w-2xl">
          Open to internships, collaborations, and backend development opportunities.
          Send a message and I will respond as soon as possible.
        </p>

        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-8 sm:gap-12">
          <div className="space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="theme-card p-5 sm:p-6 rounded-xl"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Contact Information</h3>
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="group"
                  >
                    {info.link ? (
                      <a href={info.link} className="flex items-center space-x-3 p-2 sm:p-3 rounded-lg hover:bg-[var(--color-accent-soft)] transition-colors">
                        <div className="theme-text-muted group-hover:theme-text transition-colors">{info.icon}</div>
                        <div>
                          <p className="text-xs sm:text-sm theme-text-subtle">{info.label}</p>
                          <p className="text-sm sm:text-base theme-text">{info.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center space-x-3 p-2 sm:p-3">
                        <div className="text-gray-400">{info.icon}</div>
                        <div>
                          <p className="text-xs sm:text-sm theme-text-subtle">{info.label}</p>
                          <p className="text-sm sm:text-base theme-text">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="theme-card p-5 sm:p-6 rounded-xl"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Connect with Me</h3>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 theme-card rounded-lg hover:bg-[var(--color-card-hover)] transition-colors group flex-1 sm:flex-none justify-center sm:justify-start"
                  >
                    <span className="theme-text-muted group-hover:theme-text transition-colors">{social.icon}</span>
                    <span className="theme-text-muted group-hover:theme-text transition-colors text-sm">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="theme-card p-5 sm:p-6 rounded-xl"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Office Hours</h3>
              <div className="space-y-2 theme-text-muted text-sm sm:text-base">
                <p>{OFFICE_HOURS.weekday}</p>
                <p>{OFFICE_HOURS.saturday}</p>
                <p>{OFFICE_HOURS.sunday}</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="theme-card p-6 sm:p-8 rounded-xl"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2.5 rounded-lg theme-card border border-[var(--color-border)] focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent-soft)] outline-none transition-colors text-sm sm:text-base theme-text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2.5 rounded-lg theme-card border border-[var(--color-border)] focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent-soft)] outline-none transition-colors text-sm sm:text-base theme-text"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-white/20 focus:ring-1 focus:ring-white/20 outline-none transition-colors text-sm sm:text-base"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-white/20 focus:ring-1 focus:ring-white/20 outline-none transition-colors resize-none text-sm sm:text-base"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full justify-center text-sm sm:text-base"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>

              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-yellow-400 text-center text-sm sm:text-base"
                >
                  Your email client is opening — send the message to reach me directly.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact
