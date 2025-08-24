import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// Enhanced SVG icons
const ArrowDownIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
  </svg>
);

const Hero: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const { scrollY } = useScroll();
  
  // Parallax effects - only on larger screens
  const backgroundY = useTransform(scrollY, [0, 500], [0, 100]);
  const textY = useTransform(scrollY, [0, 500], [0, -50]);
  const graphicY = useTransform(scrollY, [0, 500], [0, 100]);
  const graphicScale = useTransform(scrollY, [0, 500], [1, 1.1]);

  // Rotating text animation
  const rotatingTexts = [
    'Professional Virtual Assistant',
    'Business Operations Expert',
    'Administrative Support Specialist',
    'Project Management Professional',
    'Client Communication Expert',
    'Data Analysis Specialist'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [rotatingTexts.length]);

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: 10,
      }}
    >
      {/* Enhanced Background Pattern with Parallax - only on larger screens */}
      {!isMobile && (
        <motion.div
          style={{ y: backgroundY }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.08,
              backgroundImage: `radial-gradient(circle at 25% 25%, ${theme.palette.secondary.main} 2px, transparent 2px),
                               radial-gradient(circle at 75% 75%, ${theme.palette.secondary.light} 2px, transparent 2px),
                               radial-gradient(circle at 50% 50%, ${theme.palette.primary.main} 1px, transparent 1px)`,
              backgroundSize: '60px 60px, 80px 80px, 40px 40px',
              animation: 'float 30s ease-in-out infinite',
              '@keyframes float': {
                '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                '33%': { transform: 'translateY(-20px) rotate(1deg)' },
                '66%': { transform: 'translateY(10px) rotate(-1deg)' },
              },
            }}
          />
        </motion.div>
      )}

      {/* Floating Particles - reduced on mobile */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
        }}
      >
        {[...Array(isMobile ? 8 : 20)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: isMobile ? '3px' : '4px',
              height: isMobile ? '3px' : '4px',
              background: theme.palette.secondary.light,
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </Box>

      {/* Subtle overlay for better text readability */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(255, 255, 255, 0.2)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 3, md: 4 },
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Text Content - Mobile First */}
          <motion.div
            style={!isMobile ? { y: textY } : {}}
          >
            <Box sx={{ 
              flex: 1, 
              textAlign: { xs: 'center', md: 'left' },
              order: { xs: 2, md: 1 },
              mb: { xs: 3, md: 0 }
            }}>
              <Typography
                variant="h5"
                sx={{
                  color: theme.palette.text.secondary,
                  mb: 3,
                  lineHeight: 1.6,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                }}
              >
                Hello, I'm
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: 800,
                  mb: 2,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                  lineHeight: 1.1,
                  textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                }}
              >
                Kimberly Mae B.
              </Typography>
              <Typography
                component="span"
                variant="h1"
                sx={{
                  color: theme.palette.secondary.dark,
                  fontWeight: 800,
                  mb: 3,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                  lineHeight: 1.1,
                  textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                }}
              >
                Reodique
              </Typography>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: theme.palette.secondary.dark,
                    fontWeight: 600,
                    mb: 3,
                    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                    textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentTextIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      {rotatingTexts[currentTextIndex]}
                    </motion.span>
                  </AnimatePresence>
                </Typography>
              </motion.div>

              <Typography
                variant="h5"
                sx={{
                  color: theme.palette.text.secondary,
                  mb: 4,
                  maxWidth: '600px',
                  lineHeight: 1.6,
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                }}
              >
                I help businesses streamline operations and boost productivity through professional 
                virtual assistance services. With international business experience and technical expertise, 
                I deliver exceptional results across various industries.
              </Typography>

              <Box sx={{ 
                display: 'flex', 
                gap: 2, 
                flexWrap: 'nowrap', 
                justifyContent: { xs: 'center', md: 'flex-start' },
                flexDirection: 'row',
                alignItems: 'center',
                maxWidth: { xs: '100%', sm: 'auto' },
                mx: { xs: 'auto', md: 0 },
                width: { xs: '100%', sm: 'auto' },
              }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={scrollToServices}
                  sx={{
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                    color: 'white',
                    py: { xs: 1.5, md: 2 },
                    px: { xs: 3, md: 4 },
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    fontWeight: 600,
                    borderRadius: '12px',
                    boxShadow: '0 4px 15px rgba(248, 187, 217, 0.3)',
                    transition: 'all 0.3s ease',
                    minWidth: '140px',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(248, 187, 217, 0.4)',
                    },
                  }}
                >
                  Explore Services
                </Button>
                
                <Button
                  variant="outlined"
                  size="large"
                  onClick={scrollToContact}
                  sx={{
                    borderColor: theme.palette.secondary.dark,
                    color: theme.palette.secondary.dark,
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    py: { xs: 1.5, md: 2 },
                    px: { xs: 3, md: 4 },
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    fontWeight: 600,
                    borderRadius: '12px',
                    borderWidth: '2px',
                    transition: 'all 0.3s ease',
                    minWidth: '140px',
                    '&:hover': {
                      backgroundColor: theme.palette.secondary.dark,
                      color: 'white',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(225, 190, 231, 0.3)',
                    },
                  }}
                >
                  Get Started
                </Button>
              </Box>
            </Box>
          </motion.div>

          {/* Headshot Image - Mobile First */}
          <Box
            sx={{
              order: { xs: 1, md: 2 },
              mb: { xs: 2, md: 0 },
            }}
          >
            <motion.div
              style={!isMobile ? { y: graphicY, scale: graphicScale } : {}}
            >
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <motion.div
                  initial={{ opacity: 0, x: isMobile ? 0 : 100, y: isMobile ? -30 : 0, rotate: isMobile ? 0 : -5 }}
                  animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      position: 'relative',
                    }}
                  >
                    {/* Professional Headshot - Mobile Optimized */}
                    <Box
                      sx={{
                        position: 'relative',
                        width: { xs: '200px', sm: '250px', md: '400px' },
                        height: { xs: '250px', sm: '300px', md: '500px' },
                        borderRadius: { xs: '15px', md: '20px' },
                        overflow: 'hidden',
                        boxShadow: `0 15px 40px rgba(0, 0, 0, 0.15), 
                                   0 5px 15px rgba(0, 0, 0, 0.1)`,
                        border: `3px solid rgba(255, 255, 255, 0.9)`,
                        animation: isMobile ? 'none' : 'float 6s ease-in-out infinite',
                        '@keyframes float': {
                          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                          '50%': { transform: 'translateY(-15px) rotate(1deg)' },
                        },
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: isMobile ? '-5px' : '-10px',
                          left: isMobile ? '-5px' : '-10px',
                          right: isMobile ? '-5px' : '-10px',
                          bottom: isMobile ? '-5px' : '-10px',
                          borderRadius: isMobile ? '20px' : '25px',
                          background: `linear-gradient(135deg, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.main} 100%)`,
                          opacity: 0.3,
                          zIndex: -1,
                          animation: isMobile ? 'none' : 'float 6s ease-in-out infinite reverse',
                        },
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          top: isMobile ? '-10px' : '-20px',
                          left: isMobile ? '-10px' : '-20px',
                          right: isMobile ? '-10px' : '-20px',
                          bottom: isMobile ? '-10px' : '-20px',
                          borderRadius: isMobile ? '25px' : '30px',
                          background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
                          opacity: 0.2,
                          zIndex: -2,
                          animation: isMobile ? 'none' : 'float 8s ease-in-out infinite',
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src="/headshot.png"
                        alt="Kimberly Mae B. Reodique - Professional Virtual Assistant"
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: isMobile ? '12px' : '17px',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: isMobile ? 'none' : 'scale(1.02)',
                          },
                        }}
                      />
                    </Box>
                    
                    {/* Floating accent elements - only on larger screens */}
                    {!isMobile && (
                      <>
                        <Box
                          sx={{
                            position: 'absolute',
                            top: '5%',
                            right: '5%',
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.secondary.light})`,
                            opacity: 0.7,
                            animation: 'float 4s ease-in-out infinite',
                            boxShadow: `0 4px 15px rgba(0, 0, 0, 0.1)`,
                          }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            bottom: '10%',
                            left: '5%',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                            opacity: 0.8,
                            animation: 'float 5s ease-in-out infinite reverse',
                            boxShadow: `0 4px 15px rgba(0, 0, 0, 0.1)`,
                          }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            top: '60%',
                            right: '15%',
                            width: '30px',
                            height: '30px',
                            borderRadius: '50%',
                            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                            opacity: 0.6,
                            animation: 'float 7s ease-in-out infinite',
                            boxShadow: `0 3px 10px rgba(0, 0, 0, 0.1)`,
                          }}
                        />
                      </>
                    )}
                  </Box>
                </motion.div>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Container>

      {/* Enhanced Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1,
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Button
            onClick={scrollToServices}
            sx={{
              color: theme.palette.secondary.dark,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
              width: { xs: '40px', md: '50px' },
              height: { xs: '40px', md: '50px' },
              minWidth: 'unset',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                transform: 'scale(1.1)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <ArrowDownIcon />
          </Button>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default Hero;
