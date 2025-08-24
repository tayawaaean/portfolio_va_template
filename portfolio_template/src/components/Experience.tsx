import React from 'react';
import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const achievements = [
    { 
      number: '6', 
      label: 'Months of VA Experience',
      description: 'Hands-on experience in international business operations',
      icon: '⏱️',
      color: 'primary'
    },
    { 
      number: '1', 
      label: 'International Client',
      description: 'Successfully served construction industry client',
      icon: '🌍',
      color: 'secondary'
    },
    { 
      number: '24/7', 
      label: 'Support Availability',
      description: 'Flexible scheduling to meet global time zones',
      icon: '🕐',
      color: 'primary'
    },
    { 
      number: '100%', 
      label: 'Client Satisfaction',
      description: 'Exceeded expectations in all deliverables',
      icon: '⭐',
      color: 'secondary'
    }
  ];

  const keyExperiences = [
    {
      title: 'International Business Operations',
      description: '6 months of hands-on experience supporting international firms across various industries',
      icon: '🌍',
      highlights: ['Research & Analysis', 'Newsletter Creation', 'MS Excel Operations']
    },
    {
      title: 'Cross-Cultural Communication',
      description: 'Successfully managed international client relationships and bridged communication gaps',
      icon: '🤝',
      highlights: ['Global Business Operations', 'Client Coordination', 'Cultural Sensitivity']
    },
    {
      title: 'Technical Proficiency',
      description: 'Mastered essential business tools and quickly adapted to new technologies',
      icon: '💻',
      highlights: ['MS Office Suite', 'AI Tools', 'Cloud Platforms']
    }
  ];

  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: 'background.default',
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
              Experience & Achievements
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: theme.palette.text.secondary,
                maxWidth: '700px',
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: { xs: '1rem', md: '1.1rem' },
              }}
            >
              My journey as a Virtual Assistant has been focused on delivering exceptional value through 
              international business experience, technical proficiency, and unwavering dedication to client success across various industries.
            </Typography>
          </Box>
        </motion.div>

        {/* Achievement Cards */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: 3,
            mb: 8,
          }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  p: 3,
                  background: `linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 187, 217, 0.08) 100%)`,
                  borderRadius: '20px',
                  border: `1px solid rgba(248, 187, 217, 0.2)`,
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  height: '100%',
                  textAlign: 'center',
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
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  },
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(248, 187, 217, 0.25)',
                    borderColor: 'rgba(248, 187, 217, 0.4)',
                    '&::before': {
                      opacity: 1,
                    },
                  },
                }}
              >
                {/* Icon */}
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: '3rem',
                    mb: 2,
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                  }}
                >
                  {achievement.icon}
                </Typography>

                {/* Number */}
                <Typography
                  variant="h2"
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 800,
                    mb: 1,
                    fontSize: { xs: '2.5rem', md: '3rem' },
                    textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  }}
                >
                  {achievement.number}
                </Typography>

                {/* Label */}
                <Typography
                  variant="h6"
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 600,
                    mb: 2,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                  }}
                >
                  {achievement.label}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text.secondary,
                    lineHeight: 1.5,
                    fontSize: { xs: '0.85rem', md: '0.9rem' },
                  }}
                >
                  {achievement.description}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>

        {/* Key Experience Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ mb: 8 }}>
            <Typography
              variant="h3"
              sx={{
                color: theme.palette.primary.main,
                textAlign: 'center',
                mb: 6,
                fontWeight: 700,
                fontSize: { xs: '1.75rem', md: '2.25rem' },
                textShadow: '0 2px 4px rgba(0,0,0,0.1)',
              }}
            >
              Key Experience Areas
            </Typography>
            
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                gap: 4,
              }}
            >
              {keyExperiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      p: 4,
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(225, 190, 231, 0.05) 100%)',
                      borderRadius: '20px',
                      border: `1px solid rgba(225, 190, 231, 0.2)`,
                      boxShadow: '0 6px 24px rgba(0, 0, 0, 0.06)',
                      transition: 'all 0.4s ease',
                      height: '100%',
                      textAlign: 'center',
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        boxShadow: '0 16px 32px rgba(225, 190, 231, 0.2)',
                        borderColor: 'rgba(225, 190, 231, 0.4)',
                      },
                    }}
                  >
                    {/* Icon */}
                    <Typography
                      variant="h1"
                      sx={{
                        fontSize: '4rem',
                        mb: 3,
                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                      }}
                    >
                      {experience.icon}
                    </Typography>

                    {/* Title */}
                    <Typography
                      variant="h5"
                      sx={{
                        color: theme.palette.primary.main,
                        fontWeight: 700,
                        mb: 2,
                        fontSize: { xs: '1.1rem', md: '1.25rem' },
                      }}
                    >
                      {experience.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.text.secondary,
                        mb: 3,
                        lineHeight: 1.6,
                        fontSize: { xs: '0.9rem', md: '1rem' },
                      }}
                    >
                      {experience.description}
                    </Typography>

                    {/* Highlights */}
                    <Box>
                      {experience.highlights.map((highlight, highlightIndex) => (
                        <motion.div
                          key={highlightIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 1.2 + (index * 0.2) + (highlightIndex * 0.1) }}
                          viewport={{ once: true }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              color: theme.palette.secondary.main,
                              fontWeight: 500,
                              fontSize: { xs: '0.8rem', md: '0.85rem' },
                              mb: 1,
                              '&:last-of-type': { mb: 0 },
                            }}
                          >
                            • {highlight}
                          </Typography>
                        </motion.div>
                      ))}
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <Box 
            sx={{ 
              textAlign: 'center',
              p: 6,
              background: 'linear-gradient(135deg, rgba(248, 187, 217, 0.1) 0%, rgba(225, 190, 231, 0.1) 100%)',
              borderRadius: '24px',
              border: '1px solid rgba(248, 187, 217, 0.2)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: theme.palette.primary.main,
                mb: 3,
                fontWeight: 700,
                fontSize: { xs: '1.75rem', md: '2.25rem' },
                textShadow: '0 2px 4px rgba(0,0,0,0.1)',
              }}
            >
              Ready to Experience the Difference?
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
            
            {/* Achievement Summary */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2,
                flexWrap: 'wrap',
                mt: 3,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                  fontSize: { xs: '0.9rem', md: '1rem' },
                }}
              >
                🌍 International Business Expert
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.secondary.main,
                  fontWeight: 600,
                  fontSize: { xs: '0.9rem', md: '1rem' },
                }}
              >
                🤝 Cross-Cultural Communication
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                  fontSize: { xs: '0.9rem', md: '1rem' },
                }}
              >
                💻 Technical Proficiency
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Experience;
