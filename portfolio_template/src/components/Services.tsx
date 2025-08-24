import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';

// Enhanced SVG icons with better visual appeal
const BusinessIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
  </svg>
);

const ScheduleIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const AnalyticsIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
  </svg>
);

const SupportIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

const SecurityIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
  </svg>
);

const Services: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
              <Card
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
                <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
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
                </CardContent>
              </Card>
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
