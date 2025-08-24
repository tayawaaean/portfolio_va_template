import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { 
  BusinessIcon, 
  ScheduleIcon, 
  EmailIcon, 
  AnalyticsIcon, 
  SupportIcon, 
  SecurityIcon 
} from './icons';

const Services: React.FC = () => {
  const theme = useTheme();

  const services = [
    {
      icon: <BusinessIcon />,
      title: 'Administrative Support',
      description: 'Comprehensive administrative tasks including email management, calendar coordination, document preparation, and data entry.',
      features: ['Email Management', 'Calendar Coordination', 'Document Preparation', 'Data Entry']
    },
    {
      icon: <ScheduleIcon />,
      title: 'Project Management',
      description: 'End-to-end project coordination, timeline management, and progress tracking to ensure successful project delivery.',
      features: ['Timeline Management', 'Progress Tracking', 'Task Coordination', 'Resource Planning']
    },
    {
      icon: <EmailIcon />,
      title: 'Client Communication',
      description: 'Professional client interaction, inquiry handling, and relationship management to enhance customer satisfaction.',
      features: ['Inquiry Handling', 'Relationship Management', 'Professional Communication', 'Customer Support']
    },
    {
      icon: <AnalyticsIcon />,
      title: 'Data Analysis & Reporting',
      description: 'Comprehensive data analysis, report generation, and insights to support informed business decisions.',
      features: ['Data Analysis', 'Report Generation', 'Performance Metrics', 'Business Insights']
    },
    {
      icon: <SupportIcon />,
      title: '24/7 Support',
      description: 'Round-the-clock availability for urgent tasks and emergency support to ensure business continuity.',
      features: ['24/7 Availability', 'Emergency Support', 'Quick Response', 'Business Continuity']
    },
    {
      icon: <SecurityIcon />,
      title: 'Confidentiality & Security',
      description: 'Strict data protection protocols and confidentiality agreements to safeguard your business information.',
      features: ['Data Protection', 'Confidentiality', 'Secure Communication', 'Privacy Compliance']
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="services"
      sx={{
        py: 8,
        backgroundColor: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          backgroundImage: `radial-gradient(circle at 20% 20%, ${theme.palette.secondary.main} 1px, transparent 1px),
                           radial-gradient(circle at 80% 80%, ${theme.palette.primary.main} 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 800,
                mb: 3,
                fontSize: { xs: '2rem', md: '2.5rem' },
                textAlign: 'center',
                textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                letterSpacing: '-0.02em',
              }}
            >
              My Services
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: theme.palette.text.secondary,
                maxWidth: '700px',
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: { xs: '1rem', md: '1.1rem' },
                textAlign: 'center',
                mb: 6,
              }}
            >
              Comprehensive virtual assistance services designed to streamline your business operations 
              and boost productivity. From administrative support to project management, I've got you covered.
            </Typography>
          </Box>
        </motion.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: 4,
            mb: 6,
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid rgba(248, 187, 217, 0.2)`,
                  borderRadius: '20px',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.02)',
                    boxShadow: `0 20px 40px rgba(248, 187, 217, 0.3), 0 8px 16px rgba(0, 0, 0, 0.1)`,
                    border: `1px solid rgba(248, 187, 217, 0.4)`,
                    '& .icon-container': {
                      transform: 'scale(1.1) rotate(5deg)',
                      boxShadow: `0 8px 25px rgba(225, 190, 231, 0.4)`,
                    },
                    '& .service-title': {
                      color: theme.palette.primary.dark,
                    },
                  },
                }}
              >
                <Box sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  {/* Enhanced Icon Container */}
                  <Box 
                    className="icon-container"
                    sx={{ 
                      textAlign: 'center', 
                      mb: 3,
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.main} 100%)`,
                        color: 'white',
                        boxShadow: `0 4px 20px rgba(225, 190, 231, 0.3)`,
                        border: `2px solid rgba(255, 255, 255, 0.8)`,
                        position: 'relative',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: '-2px',
                          left: '-2px',
                          right: '-2px',
                          bottom: '-2px',
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
                          zIndex: -1,
                          opacity: 0.3,
                        },
                      }}
                    >
                      {service.icon}
                    </Box>
                  </Box>
                  
                  {/* Enhanced Service Title */}
                  <Typography
                    className="service-title"
                    variant="h5"
                    sx={{
                      color: theme.palette.secondary.dark,
                      fontWeight: 700,
                      mb: 2,
                      fontSize: { xs: '1.1rem', md: '1.25rem' },
                      textAlign: 'center',
                    }}
                  >
                    {service.title}
                  </Typography>
                  
                  {/* Enhanced Description */}
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.text.secondary,
                      mb: 3,
                      lineHeight: 1.6,
                      fontSize: '1rem',
                      flex: 1,
                      textAlign: 'center',
                    }}
                  >
                    {service.description}
                  </Typography>
                  
                  {/* Visual Separator */}
                  <Box
                    sx={{
                      width: '40px',
                      height: '2px',
                      background: `linear-gradient(90deg, ${theme.palette.secondary.light}, ${theme.palette.secondary.main})`,
                      mx: 'auto',
                      mb: 3,
                      borderRadius: '1px',
                    }}
                  />
                  
                  {/* Enhanced Features List */}
                  <Box sx={{ mt: 'auto' }}>
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.primary,
                            fontSize: '0.95rem',
                            mb: 1,
                            display: 'flex',
                            alignItems: 'center',
                            fontWeight: 500,
                            lineHeight: 1.5,
                            '&::before': {
                              content: '""',
                              width: '8px',
                              height: '8px',
                              borderRadius: '50%',
                              background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                              mr: 2,
                              flexShrink: 0,
                            },
                          }}
                        >
                          {feature}
                        </Typography>
                      </motion.div>
                    ))}
                  </Box>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>

        {/* Enhanced Call-to-Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h4"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '1.5rem', md: '1.75rem' },
                textAlign: 'center',
              }}
            >
              Ready to Get Started?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.secondary,
                mb: 4,
                lineHeight: 1.6,
                fontSize: { xs: '1rem', md: '1.1rem' },
                textAlign: 'center',
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              Let's discuss how I can help streamline your business operations and boost your productivity.
            </Typography>
            
            {/* Prominent CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={scrollToContact}
                sx={{
                  background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
                  color: 'white',
                  px: 6,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: '50px',
                  boxShadow: `0 8px 25px rgba(225, 190, 231, 0.4)`,
                  border: 'none',
                  textTransform: 'none',
                  letterSpacing: '0.5px',
                  '&:hover': {
                    background: `linear-gradient(135deg, ${theme.palette.secondary.dark} 0%, ${theme.palette.primary.main} 100%)`,
                    boxShadow: `0 12px 35px rgba(225, 190, 231, 0.6)`,
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                Get Free Consultation
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Services;
