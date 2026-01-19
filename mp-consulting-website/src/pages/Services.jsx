import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Services.css'

const Services = () => {
  const mainServices = [
    {
      id: 'purchase',
      title: 'Purchase Consultation',
      tagline: 'Buy with Confidence',
      description: 'Navigate the car buying process with an expert by your side. We help you understand market values, negotiate effectively, and avoid costly mistakes.',
      features: [
        'Market value analysis and fair price guidance',
        'Dealer negotiation support and strategies',
        'New vs. used vehicle recommendations',
        'Financing options review and advice',
        'Vehicle history report interpretation',
        'Test drive guidance and what to look for',
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8c-.1.2-.1.4-.1.6v4.7c0 .6.4 1 1 1h1"/>
          <circle cx="7" cy="17" r="2"/>
          <path d="M9 17h6"/>
          <circle cx="17" cy="17" r="2"/>
        </svg>
      ),
    },
    {
      id: 'inspection',
      title: 'Vehicle Inspections',
      tagline: 'Know Before You Buy',
      description: 'Comprehensive on-site inspections by certified professionals. We come to you—whether at a dealership, private seller, or auction—to thoroughly evaluate any vehicle.',
      features: [
        'Complete mechanical system evaluation',
        'Body and frame inspection for damage/repairs',
        'Paint depth measurement and quality check',
        'Electrical system and electronics testing',
        'Road test and performance assessment',
        'Detailed written report with photos',
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
          <path d="M11 8v6"/>
          <path d="M8 11h6"/>
        </svg>
      ),
    },
    {
      id: 'maintenance',
      title: 'Maintenance Advice',
      tagline: 'Protect Your Investment',
      description: 'Keep your vehicle running at peak performance with expert maintenance guidance. We help you understand what your car really needs vs. what shops try to sell.',
      features: [
        'Personalized maintenance schedules',
        'Service interval recommendations',
        'Repair estimate reviews and second opinions',
        'Preventive maintenance prioritization',
        'Fluid and consumable guidance',
        'Seasonal preparation tips',
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      ),
    },
    {
      id: 'repair',
      title: 'Repair Guidance',
      tagline: 'Honest Repair Decisions',
      description: 'Facing a big repair bill? We help you understand what\'s truly necessary, get fair pricing, and find reputable shops you can trust.',
      features: [
        'Repair estimate analysis and validation',
        'Priority assessment—what\'s urgent vs. optional',
        'Shop recommendation and vetting',
        'Warranty coverage review',
        'DIY vs. professional repair advice',
        'Parts quality and sourcing guidance',
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      ),
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Tell us about your situation—whether buying, selling, or dealing with repairs. We listen and understand your needs.',
    },
    {
      step: '02',
      title: 'Expert Analysis',
      description: 'Our certified professionals review your case, conduct research, and prepare personalized recommendations.',
    },
    {
      step: '03',
      title: 'On-Site Service',
      description: 'For inspections and evaluations, we come to you. Convenience and thoroughness are our priorities.',
    },
    {
      step: '04',
      title: 'Detailed Report',
      description: 'Receive a comprehensive report with findings, photos, and clear recommendations you can act on.',
    },
  ]

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <motion.div 
            className="services-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="accent-line"></div>
            <h1>Our <span className="gradient-text">Services</span></h1>
            <p>
              Comprehensive automotive consulting services designed to protect your interests 
              and empower you with knowledge at every stage of vehicle ownership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="main-services">
        <div className="container">
          {mainServices.map((service, index) => (
            <motion.div
              key={service.id}
              className={`service-block ${index % 2 === 1 ? 'reversed' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="service-content">
                <div className="service-header">
                  <div className="service-icon-large">{service.icon}</div>
                  <div>
                    <span className="service-tagline">{service.tagline}</span>
                    <h2>{service.title}</h2>
                  </div>
                </div>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-primary">
                  Get Started
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
              <div className="service-visual">
                <div className="service-card-visual card">
                  <div className="visual-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <div className="visual-accent"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="accent-line"></div>
            <h2>How We <span className="gradient-text">Work</span></h2>
            <p>A straightforward process designed for your convenience</p>
          </motion.div>

          <div className="process-grid">
            {process.map((item, index) => (
              <motion.div
                key={index}
                className="process-item"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <span className="process-step gradient-text-orange">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {index < process.length - 1 && <div className="process-connector"></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="pricing-teaser">
        <div className="container">
          <motion.div 
            className="pricing-content card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="pricing-text">
              <h2>Transparent <span className="gradient-text">Pricing</span></h2>
              <p>
                Every situation is unique. We provide clear, upfront pricing based on your specific needs. 
                No hidden fees, no surprises—just honest service.
              </p>
              <ul className="pricing-highlights">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  Free initial phone consultation
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  Flat-rate inspection fees
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  Package deals for ongoing support
                </li>
              </ul>
            </div>
            <div className="pricing-cta">
              <Link to="/contact" className="btn btn-primary">
                Request a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div className="container">
          <motion.div 
            className="cta-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Get <span className="gradient-text-orange">Expert Help</span>?</h2>
            <p>Let us take the stress out of your automotive decisions.</p>
            <Link to="/contact" className="btn btn-primary">
              Contact Us Today
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services
