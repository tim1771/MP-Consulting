import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  const values = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: 'Trust',
      description: 'We build relationships on honesty and transparency. Your best interest is always our priority.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
        </svg>
      ),
      title: 'Education',
      description: 'We empower you with knowledge so you can make confident decisions now and in the future.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      ),
      title: 'Integrity',
      description: 'No hidden agendas, no kickbacks from dealers or shops. We work exclusively for you.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: 'Partnership',
      description: 'We\'re not just consultants—we\'re your advocates in every automotive situation.',
    },
  ]

  const credentials = [
    'ASE Certified Master Technicians',
    '25+ Years Combined Industry Experience',
    'Manufacturer Training Certifications',
    'Continuous Professional Development',
    'Insurance & Liability Coverage',
    'Background-Checked Professionals',
  ]

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div 
            className="about-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="accent-line"></div>
            <h1>About <span className="gradient-text">MP Consulting</span></h1>
            <p className="hero-tagline">Steering You Right Since Day One</p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <motion.div 
              className="mission-visual"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mission-image-wrapper">
                <img src="/logo.png" alt="MP Consulting Logo" className="mission-logo" />
                <div className="mission-glow"></div>
              </div>
            </motion.div>

            <motion.div 
              className="mission-content"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="accent-line"></div>
              <h2>Our <span className="gradient-text">Mission</span></h2>
              <blockquote className="mission-statement">
                "We are experienced automotive professionals, passionate about cars, and all things motive power. 
                We are looking to help the average consumer understand the industry—including the repair and 
                purchase sides—so they can navigate their motive power needs with trust and understanding."
              </blockquote>
              <p className="mission-detail">
                The automotive industry can be overwhelming. Between complex terminology, pressure sales tactics, 
                and the fear of being taken advantage of, many consumers feel lost when making vehicle decisions. 
                That's where we come in.
              </p>
              <p className="mission-detail">
                MP Consulting was founded on the belief that everyone deserves access to honest, expert automotive 
                advice. We bridge the knowledge gap between industry professionals and everyday drivers, ensuring 
                you're never at a disadvantage.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="accent-line"></div>
            <h2>Our Core <span className="gradient-text">Values</span></h2>
            <p>The principles that guide everything we do</p>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="credentials-section">
        <div className="container">
          <div className="credentials-grid">
            <motion.div 
              className="credentials-content"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="accent-line"></div>
              <h2>Our <span className="gradient-text">Credentials</span></h2>
              <p className="credentials-intro">
                When you work with MP Consulting, you're getting advice from certified professionals 
                with real-world experience across all aspects of the automotive industry.
              </p>
              <ul className="credentials-list">
                {credentials.map((credential, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    {credential}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              className="credentials-badge"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="badge-content">
                <span className="badge-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 15l-2 5-3-6 5-2 5 2-3 6-2-5z"/>
                    <circle cx="12" cy="8" r="6"/>
                  </svg>
                </span>
                <span className="badge-text">Certified<br/>Professionals</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <motion.div 
            className="story-content"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="accent-line"></div>
            <h2>Our <span className="gradient-text">Story</span></h2>
            <div className="story-text">
              <p>
                After decades in the automotive industry—working in dealerships, independent shops, and 
                manufacturer service centers—we saw the same problem over and over: good people getting 
                bad advice, paying too much, or buying vehicles that didn't suit their needs.
              </p>
              <p>
                We started MP Consulting to change that narrative. Our name, "Motive Power," reflects our 
                passion for everything that moves—cars, trucks, motorcycles, and beyond. But more importantly, 
                it represents the power we give back to consumers: the power of knowledge, the power of 
                confidence, and the power to make decisions that truly serve their interests.
              </p>
              <p>
                Today, we're proud to have helped hundreds of clients navigate their automotive journeys. 
                Whether it's a first-time buyer, a classic car enthusiast, or a business owner managing a 
                fleet, we bring the same level of dedication and expertise to every consultation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <motion.div 
            className="cta-content card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Let's Work <span className="gradient-text-orange">Together</span></h2>
            <p>Ready to experience automotive consulting done right?</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Start a Conversation
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link to="/services" className="btn btn-secondary">
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
