import React, { useState, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

const Contact: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setSnackbar({
        open: true,
        message: 'Please fill in all required fields.',
        severity: 'error',
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSnackbar({
        open: true,
        message: 'Please enter a valid email address.',
        severity: 'error',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID, // Replace with your EmailJS service ID
        EMAILJS_CONFIG.TEMPLATE_ID, // Replace with your EmailJS template ID
        formRef.current!,
        EMAILJS_CONFIG.PUBLIC_KEY // Replace with your EmailJS public key
      );

      if (result.status === 200) {
        setSnackbar({
          open: true,
          message: 'Thank you! Your message has been sent successfully. I will get back to you within 24 hours.',
          severity: 'success',
        });

        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          message: '',
        });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSnackbar({
        open: true,
        message: 'Sorry, there was an error sending your message. Please try again or contact me directly.',
        severity: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  const serviceOptions = [
    'Administrative Support',
    'Project Management',
    'Client Communication',
    'Data Analysis & Reporting',
    'Newsletter Creation',
    'MS Excel Operations',
    'Research & Analysis',
    'Catalog Development',
    'Other (Custom)'
  ];

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'kimberlyreodique0619@gmail.com',
      description: 'I respond within 24 hours',
      link: 'mailto:kimberlyreodique0619@gmail.com'
    },
    {
      icon: '📱',
      title: 'WhatsApp',
      value: '+63 915 514 5953',
      description: 'Quick response via WhatsApp',
      link: 'https://wa.me/639155145953'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'kimberly-reodique',
      description: 'Connect professionally',
      link: 'https://www.linkedin.com/in/kimberly-reodique-3a195015a/'
    }
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: 'background.paper',
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
          opacity: 0.03,
          backgroundImage: `radial-gradient(circle at 25% 25%, ${theme.palette.primary.main} 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, ${theme.palette.secondary.main} 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                color: theme.palette.primary.main,
                mb: 3,
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.5rem' },
                textShadow: '0 2px 4px rgba(0,0,0,0.1)',
              }}
            >
              Get In Touch
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.secondary,
                maxWidth: '700px',
                mx: 'auto',
                lineHeight: 1.6,
                mb: 4,
                fontSize: { xs: '1rem', md: '1.1rem' },
              }}
            >
              Let's discuss how my international business experience and technical expertise 
              can help streamline your business operations and take your productivity to the next level.
            </Typography>
          </Box>
        </motion.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
            gap: { xs: 4, lg: 6 },
            mb: 6,
          }}
        >
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                p: { xs: 3, md: 4 },
                background: `linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 187, 217, 0.05) 100%)`,
                borderRadius: '24px',
                border: `1px solid rgba(248, 187, 217, 0.2)`,
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  opacity: 0.7,
                },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: '1.5rem', md: '1.75rem' },
                  textAlign: 'center',
                }}
              >
                Get In Touch
              </Typography>

              <Box component="form" ref={formRef} onSubmit={handleSubmit}>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                    gap: 3,
                    mb: 3,
                  }}
                >
                  <TextField
                    fullWidth
                    label="Full Name *"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '12px',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: theme.palette.primary.main,
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: theme.palette.primary.main,
                          borderWidth: '2px',
                        },
                      },
                    }}
                  />
                  
                  <TextField
                    fullWidth
                    label="Email Address *"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '12px',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: theme.palette.primary.main,
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: theme.palette.primary.main,
                          borderWidth: '2px',
                        },
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Company Name"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '12px',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: theme.palette.primary.main,
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: theme.palette.primary.main,
                          borderWidth: '2px',
                        },
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    select
                    label="Service Interest"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '12px',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: theme.palette.primary.main,
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: theme.palette.primary.main,
                          borderWidth: '2px',
                        },
                      },
                    }}
                  >
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </TextField>
                </Box>

                <TextField
                  fullWidth
                  label="Message *"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  multiline
                  rows={5}
                  variant="outlined"
                  placeholder="Tell me about your project, timeline, and specific requirements..."
                  sx={{
                    mb: 4,
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.primary.main,
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.primary.main,
                        borderWidth: '2px',
                      },
                    },
                  }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={isSubmitting}
                  sx={{
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                    color: 'white',
                    py: 2,
                    px: 6,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: '16px',
                    boxShadow: '0 8px 25px rgba(248, 187, 217, 0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 12px 35px rgba(248, 187, 217, 0.4)',
                    },
                    '&:disabled': {
                      opacity: 0.7,
                      transform: 'none',
                    },
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </Box>
            </Box>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Box>
              <Typography
                variant="h4"
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: '1.5rem', md: '1.75rem' },
                  textAlign: 'center',
                }}
              >
                Contact Information
              </Typography>

              {/* Free Consultation Card */}
              <Box
                sx={{
                  p: 4,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  color: 'white',
                  borderRadius: '20px',
                  mb: 4,
                  textAlign: 'center',
                  boxShadow: '0 12px 32px rgba(248, 187, 217, 0.3)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -50,
                    right: -50,
                    width: '100px',
                    height: '100px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                  },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 700,
                    mb: 2,
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                  }}
                >
                  Free Consultation
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.6,
                    opacity: 0.95,
                    fontSize: { xs: '0.95rem', md: '1rem' },
                  }}
                >
                  I offer a free 30-minute consultation to discuss your needs and how I can help 
                  streamline your business operations with my international business expertise.
                </Typography>
              </Box>

              {/* Contact Details */}
              <Box
                sx={{
                  display: 'grid',
                  gap: 3,
                }}
              >
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Box
                      component="a"
                      href={info.link}
                      target={info.title === 'LinkedIn' ? '_blank' : '_self'}
                      rel={info.title === 'LinkedIn' ? 'noopener noreferrer' : ''}
                      sx={{
                        p: 3,
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        borderRadius: '16px',
                        border: `1px solid rgba(248, 187, 217, 0.2)`,
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
                        transition: 'all 0.3s ease',
                        textDecoration: 'none',
                        color: 'inherit',
                        display: 'block',
                        '&:hover': {
                          transform: 'translateY(-3px)',
                          boxShadow: '0 8px 25px rgba(248, 187, 217, 0.2)',
                          borderColor: 'rgba(248, 187, 217, 0.4)',
                          backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Typography
                          variant="h3"
                          sx={{
                            fontSize: '2rem',
                            mr: 2,
                          }}
                        >
                          {info.icon}
                        </Typography>
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{
                              color: theme.palette.secondary.dark,
                              fontWeight: 600,
                              mb: 1,
                              fontSize: { xs: '1rem', md: '1.1rem' },
                            }}
                          >
                            {info.title}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              color: theme.palette.text.primary,
                              fontWeight: 500,
                              fontSize: { xs: '0.9rem', md: '1rem' },
                            }}
                          >
                            {info.value}
                          </Typography>
                        </Box>
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.text.secondary,
                          fontSize: { xs: '0.8rem', md: '0.85rem' },
                        }}
                      >
                        {info.description}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ 
            width: '100%',
            borderRadius: '12px',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
