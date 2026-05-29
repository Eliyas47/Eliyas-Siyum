import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, BookOpen, Award, FileText, ExternalLink } from 'lucide-react'
import { ScrollAnimation } from '@/components/ScrollAnimation'
import collegeImg from '@/assets/education/astu.jpg'
import schoolImg from '@/assets/education/school.jpg'
import resumePdf from '@/assets/files/cv_pdf/Eliyas_Siyum_Resume.pdf'
import UniversityImage from '@/components/UniversityImage'

const isWideCampusPhoto = (src) =>
  typeof src === 'string' ? src.includes('astu') : String(src).includes('astu')

const Education = () => {
  const educationData = [
    {
      school: 'Adama Science and Technology University',
      location: 'Adama, Ethiopia',
      duration: '2022 - Present (Final Year)',
      degree: 'BSc in Software Engineering (Final Year)',
      grade: 'CGPA: 3.34',
      image: collegeImg,
      resultUrl: resumePdf,
      coursework: ["Software Development", 'DSA', 'OOPs', 'DBMS', 'AI', 'ML', 'OS', 'Networking'],
      description:
        'Final year Software Engineering student at ASTU with focus on backend engineering, networking, and applied software development through practical projects and internships.',
    },
    {
      school: 'Ejaji Secondary School / Oda Bisil Secondary School',
      location: 'Ethiopia',
      duration: 'Secondary Education',
      degree: 'Matric & University Entrance',
      grade: 'Grade (Matric): 3.75',
      image: schoolImg,
      resultUrl: resumePdf,
      subjects: ['Matric Certificate (Ejaji Secondary School)', 'University Entrance (Oda Bisil Secondary School)'],
      description:
        'Completed matric certificate from Ejaji Secondary School and university entrance from Oda Bisil Secondary School, which built a strong base for my engineering studies.',
    },
  ]

  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <GraduationCap className="w-8 h-8" />
          <h2 className="text-4xl font-bold gradient-text">Education</h2>
        </motion.div>
      </ScrollAnimation>

      <div className="space-y-12">
        {educationData.map((edu, index) => (
          <ScrollAnimation key={edu.school}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative theme-card rounded-xl overflow-hidden transition-all"
            >
              <div className="absolute top-0 right-0 px-4 py-2 rounded-bl-xl flex items-center gap-2 theme-card">
                <Calendar className="w-4 h-4 theme-text-muted" />
                <span className="theme-text-muted text-sm">{edu.duration}</span>
              </div>

              <div className={isWideCampusPhoto(edu.image) ? 'flex flex-col' : 'grid md:grid-cols-[350px,1fr]'}>
                {isWideCampusPhoto(edu.image) ? (
                  <UniversityImage src={edu.image} alt={edu.school} className="rounded-none" />
                ) : (
                <div className="relative h-96 md:h-full min-h-[280px]">
                  <img
                    src={edu.image}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                  {!isWideCampusPhoto(edu.image) && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-white">{edu.school}</h3>
                        <div className="flex items-center gap-2 text-gray-300 mb-1">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                          <Award className="w-4 h-4" />
                          <span>{edu.grade}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                )}

                <div className="p-6">
                  {isWideCampusPhoto(edu.image) && (
                    <div className="mb-4">
                      <h3 className="text-xl font-bold theme-text mb-2">{edu.school}</h3>
                      <div className="flex flex-wrap gap-3 text-sm theme-text-muted">
                        <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{edu.location}</span>
                        <span className="flex items-center gap-1"><Award className="w-4 h-4" />{edu.grade}</span>
                      </div>
                    </div>
                  )}
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 theme-text-muted" />
                    <h4 className="text-lg font-semibold">{edu.degree}</h4>
                  </div>

                  <div className="flex items-start gap-2 theme-text-muted mb-6">
                    <FileText className="w-5 h-5 mt-1 flex-shrink-0" />
                    <p className="text-sm leading-relaxed">{edu.description}</p>
                  </div>

                  {edu.coursework && (
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <span key={course} className="skill-tag">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {edu.subjects && (
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {edu.subjects.map((subject) => (
                          <span key={subject} className="skill-tag">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <motion.a
                    href={edu.resultUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm inline-flex items-center gap-2"
                    whileHover={{ scale: 1.02 }}
                  >
                    View Result
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  )
}

export default Education
