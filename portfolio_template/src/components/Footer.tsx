import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Administrative Support', href: '#services' },
        { name: 'Project Management', href: '#services' },
        { name: 'Client Communication', href: '#services' },
        { name: 'Data Analysis & Reporting', href: '#services' },
        { name: 'Newsletter Creation', href: '#services' },
        { name: 'MS Excel Operations', href: '#services' },
      ],
    },
    {
      title: 'About',
      links: [
        { name: 'My Story', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills & Tools', href: '#about' },
        { name: 'Construction Industry', href: '#about' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { name: 'Get In Touch', href: '#contact' },
        { name: 'Free Consultation', href: '#contact' },
        { name: 'Portfolio', href: '#hero' },
        { name: 'Testimonials', href: '#experience' },
      ],
    },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kimberly-reodique-3a195015a/',
      icon: '💼',
      color: '#0077B5'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/639155145953',
      icon: '📱',
      color: '#25D366'
    },
    {
      name: 'Email',
      url: 'mailto:work.kmreodique@gmail.com',
      icon: '📧',
      color: '#EA4335'
    }
  ];

  const scrollToSection = (href: string) => {
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
        color: 'white',
        py: { xs: 6, md: 8 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Main Footer Content */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '2fr 1fr 1fr 1fr' },
            gap: { xs: 4, md: 6 },
            mb: 6,
          }}
        >
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: theme.palette.secondary.light,
                  fontSize: { xs: '1.5rem', md: '1.75rem' },
                  textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                }}
              >
                Kimberly Mae B. Reodique
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  lineHeight: 1.7,
                  opacity: 0.95,
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  maxWidth: '400px',
                }}
              >
                Professional virtual assistance services with international business expertise. 
                Let me help streamline your business operations and enhance productivity across various industries.
              </Typography>

              {/* Contact Info */}
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Typography variant="body2" sx={{ opacity: 0.9, fontSize: '0.9rem' }}>
                    📧 work.kmreodique@gmail.com
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Typography variant="body2" sx={{ opacity: 0.9, fontSize: '0.9rem' }}>
                    📱 +63 915 514 5953
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="body2" sx={{ opacity: 0.9, fontSize: '0.9rem' }}>
                    🌍 Philippines (Serving Worldwide)
                  </Typography>
                </Box>
              </Box>

              {/* Social Media Links */}
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: theme.palette.secondary.light,
                    fontSize: { xs: '0.9rem', md: '1rem' },
                  }}
                >
                  Connect With Me
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={social.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <IconButton
                        component="a"
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          color: 'white',
                          width: '48px',
                          height: '48px',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            transform: 'translateY(-3px) scale(1.1)',
                            borderColor: 'rgba(255, 255, 255, 0.4)',
                            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
                          },
                        }}
                      >
                        <Typography variant="h6" sx={{ fontSize: '1.2rem' }}>
                          {social.icon}
                        </Typography>
                      </IconButton>
                    </motion.div>
                  ))}
                </Box>
              </Box>
            </Box>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 3,
                    color: theme.palette.secondary.light,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    textAlign: { xs: 'center', md: 'left' },
                  }}
                >
                  {section.title}
                </Typography>
                <Box>
                  {section.links.map((link, linkIndex) => (
                    <motion.div
                      key={linkIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) + (linkIndex * 0.05) }}
                      viewport={{ once: true }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          mb: 2,
                          opacity: 0.9,
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          fontSize: { xs: '0.85rem', md: '0.9rem' },
                          textAlign: { xs: 'center', md: 'left' },
                          '&:hover': {
                            opacity: 1,
                            color: theme.palette.secondary.light,
                            transform: 'translateX(5px)',
                          },
                        }}
                        onClick={() => scrollToSection(link.href)}
                      >
                        {link.name}
                      </Typography>
                    </motion.div>
                  ))}
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              textAlign: 'center',
              p: 4,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              mb: 6,
              backdropFilter: 'blur(10px)',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: theme.palette.secondary.light,
                fontSize: { xs: '1.25rem', md: '1.5rem' },
              }}
            >
              🚀 Ready to Get Started?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                opacity: 0.95,
                lineHeight: 1.6,
                fontSize: { xs: '0.9rem', md: '1rem' },
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              Let's discuss how my international business experience and technical expertise 
              can help streamline your business operations and boost productivity.
            </Typography>
          </Box>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              pt: 4,
              borderTop: '1px solid rgba(255, 255, 255, 0.2)',
              textAlign: 'center',
            }}
          >
            <Typography
              variant="body2"
              sx={{
                opacity: 0.8,
                mb: 2,
                fontSize: { xs: '0.8rem', md: '0.9rem' },
              }}
            >
              © {currentYear} Kimberly Mae B. Reodique. All rights reserved.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                opacity: 0.7,
                fontSize: { xs: '0.75rem', md: '0.8rem' },
              }}
            >
              Designed and developed with ❤️ for business excellence
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;
