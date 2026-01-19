import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Home.css'

const Home = () => {
  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8c-.1.2-.1.4-.1.6v4.7c0 .6.4 1 1 1h1"/>
          <circle cx="7" cy="17" r="2"/>
          <path d="M9 17h6"/>
          <circle cx="17" cy="17" r="2"/>
        </svg>
      ),
      title: 'Purchase Consultation',
      description: 'Expert guidance on vehicle purchases, helping you find the perfect car that fits your needs and budget.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      ),
      title: 'Vehicle Inspections',
      description: 'Comprehensive on-site inspections by certified professionals before you make that important purchase.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 20h9"/>
          <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
        </svg>
      ),
      title: 'Maintenance Advice',
      description: 'Ongoing support and expert recommendations to keep your vehicle running at peak performance.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      ),
      title: 'Repair Guidance',
      description: 'Navigate repair decisions with confidence. We help you understand what your vehicle truly needs.',
    },
  ]

  const stats = [
    { number: '500+', label: 'Clients Helped' },
    { number: '25+', label: 'Years Experience' },
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '1000+', label: 'Inspections Done' },
  ]

  const testimonials = [
    {
      name: 'Michael R.',
      role: 'First-Time Car Buyer',
      quote: 'MP Consulting saved me from making a $15,000 mistake. Their inspection found issues the seller never disclosed.',
    },
    {
      name: 'Sarah T.',
      role: 'Classic Car Enthusiast',
      quote: 'Finally, someone who speaks my language! Their expertise in classic cars is unmatched.',
    },
    {
      name: 'James K.',
      role: 'Small Business Owner',
      quote: 'They helped me build a reliable fleet for my business. Professional, thorough, and always available.',
    },
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-elements">
          <div className="hero-circle hero-circle-1"></div>
          <div className="hero-circle hero-circle-2"></div>
          <div className="hero-line hero-line-1"></div>
          <div className="hero-line hero-line-2"></div>
        </div>
        
        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Trusted Automotive Experts
            </div>
            <h1 className="hero-title">
              Your Trusted Partner in <span className="gradient-text">Motive Power</span>
            </h1>
            <p className="hero-subtitle">
              We are experienced automotive professionals, passionate about cars, and all things motive power. 
              We help the average consumer understand the industry—including the repair and purchase sides—so 
              they can navigate their motive power needs with trust and understanding.
            </p>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-primary">
                Get Expert Consultation
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link to="/services" className="btn btn-secondary">
                Explore Services
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="hero-image-wrapper">
              <img src="/logo.png" alt="MP Consulting" className="hero-logo-image" />
              <div className="hero-image-glow"></div>
            </div>
          </motion.div>
        </div>

        <div className="hero-scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-line">
            <div className="scroll-dot"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="stat-number gradient-text-orange">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-preview">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="accent-line"></div>
            <h2>Our <span className="gradient-text">Services</span></h2>
            <p>Comprehensive automotive consulting tailored to your needs</p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/services" className="service-link">
                  Learn More
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-us">
        <div className="container">
          <div className="why-us-grid">
            <motion.div 
              className="why-us-content"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="accent-line"></div>
              <h2>Why Choose <span className="gradient-text">MP Consulting</span>?</h2>
              <p className="why-us-intro">
                We bridge the gap between complex automotive industry knowledge and everyday consumers.
              </p>
              <ul className="why-us-list">
                <li>
                  <div className="check-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                  </div>
                  <div>
                    <strong>Certified Expertise</strong>
                    <span>ASE certified professionals with decades of hands-on experience</span>
                  </div>
                </li>
                <li>
                  <div className="check-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                  </div>
                  <div>
                    <strong>Unbiased Advice</strong>
                    <span>We work for you, not dealerships or repair shops</span>
                  </div>
                </li>
                <li>
                  <div className="check-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                  </div>
                  <div>
                    <strong>On-Site Inspections</strong>
                    <span>We come to you for thorough vehicle evaluations</span>
                  </div>
                </li>
                <li>
                  <div className="check-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                  </div>
                  <div>
                    <strong>Clear Communication</strong>
                    <span>No jargon—just honest, understandable advice</span>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="why-us-visual"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="trust-badge">
                <div className="trust-badge-inner">
                  <span className="trust-number">25+</span>
                  <span className="trust-text">Years of<br/>Excellence</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="accent-line"></div>
            <h2>What Our <span className="gradient-text">Clients Say</span></h2>
            <p>Real stories from real people we've helped</p>
          </motion.div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="quote-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <p className="testimonial-quote">{testimonial.quote}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="author-info">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Make Informed <span className="gradient-text-orange">Automotive Decisions</span>?</h2>
            <p>Let our experts guide you through your next vehicle purchase, inspection, or maintenance decision.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Schedule Consultation
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
