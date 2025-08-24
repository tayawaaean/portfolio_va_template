import React from 'react';
import {
  Box,
  Container,
  Typography,
  Chip,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { SkillsIcon, ConstructionIcon } from './icons';

const About: React.FC = () => {
  const theme = useTheme();

  const skills = [
    'MS Excel & Data Analysis',
    'Research & Market Analysis',
    'Newsletter Creation',
    'Catalog Development',
    'International Communication',
    'Construction Industry Knowledge',
    'Client Relationship Management',
    'Document Preparation',
    'Administrative Support',
    'Time Management',
    'Problem Solving',
    'Quick Learning',
  ];

  const softwareTools = [
    { 
      name: 'MS Office Suite', 
      category: 'Productivity', 
      tools: ['Word', 'Excel', 'PowerPoint'],
      icon: '📊',
      description: 'Professional document creation and data analysis'
    },
    { 
      name: 'Communication', 
      category: 'Collaboration', 
      tools: ['Gmail', 'Slack', 'Zoom'],
      icon: '💬',
      description: 'Seamless team communication and virtual meetings'
    },
    { 
      name: 'AI & Automation', 
      category: 'Innovation', 
      tools: ['ChatGPT', 'HeyGen', 'Notion AI'],
      icon: '🤖',
      description: 'Leveraging AI for enhanced productivity and creativity'
    },
    { 
      name: 'Design & Content', 
      category: 'Creative', 
      tools: ['Canva', 'Notion', 'Trello'],
      icon: '🎨',
      description: 'Professional design and content organization'
    },
    { 
      name: 'Cloud & Storage', 
      category: 'Technology', 
      tools: ['Google Drive', 'Dropbox', 'OneDrive'],
      icon: '☁️',
      description: 'Secure file management and collaboration'
    },
    { 
      name: 'Research & Analysis', 
      category: 'Business Intelligence', 
      tools: ['Google Analytics', 'Social Media Tools', 'Market Research'],
      icon: '🔍',
      description: 'Data-driven insights and market analysis'
    },
  ];

  const experience = [
    { number: '6', label: 'Months of VA Experience' },
    { number: '1', label: 'International Client' },
    { number: '24/7', label: 'Availability' },
    { number: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: 'background.paper',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background pattern */}
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
                mb: 3,
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              About Me
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: theme.palette.text.secondary,
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: { xs: '1rem', md: '1.1rem' },
              }}
            >
              I'm an enthusiastic and dedicated Virtual Assistant with valuable experience in international business operations, 
              specializing in administrative support and cross-cultural communication across various industries.
            </Typography>
          </Box>
        </motion.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 4, md: 6 },
            mb: 6,
          }}
        >
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.text.primary,
                  mb: 3,
                  fontWeight: 600,
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  lineHeight: 1.6,
                }}
              >
                I'm a dedicated Virtual Assistant with valuable experience in international business operations, specializing in administrative support and cross-cultural communication across various industries.
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  mb: 3,
                  lineHeight: 1.7,
                  fontSize: { xs: '0.95rem', md: '1rem' },
                }}
              >
                With 6 months of hands-on experience as a Virtual Assistant at an international construction firm, I've gained valuable expertise in research, newsletter creation, catalog development, and MS Excel operations. This experience has given me unique insights into global business operations that I can apply to any industry.
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  mb: 3,
                  lineHeight: 1.7,
                  fontSize: { xs: '0.95rem', md: '1rem' },
                }}
              >
                I specialize in providing comprehensive administrative support, project management, and client communication services. My multicultural background, language skills, and international business experience enable me to effectively serve clients across different cultures and industries, helping businesses streamline operations and achieve their goals.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  lineHeight: 1.7,
                  fontSize: { xs: '0.95rem', md: '1rem' },
                  fontStyle: 'italic',
                  opacity: 0.8,
                }}
              >
                "My international business experience has given me a unique perspective on global operations, making me an excellent choice for companies seeking a VA with real-world international exposure and industry-adaptable skills."
              </Typography>
            </Box>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)' },
                gap: 3,
              }}
            >
              {experience.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      textAlign: 'center',
                      p: 3,
                      backgroundColor: 'rgba(248, 187, 217, 0.1)',
                      borderRadius: '16px',
                      border: `1px solid rgba(248, 187, 217, 0.2)`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(248, 187, 217, 0.15)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(248, 187, 217, 0.2)',
                      },
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        color: theme.palette.primary.main,
                        fontWeight: 700,
                        fontSize: { xs: '2rem', md: '2.5rem' },
                        mb: 1,
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        fontSize: { xs: '0.85rem', md: '0.9rem' },
                        fontWeight: 500,
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Box>

        {/* Industry Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Box sx={{ mb: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <ConstructionIcon />
              <Typography
                variant="h4"
                sx={{
                  color: theme.palette.primary.main,
                  ml: 1,
                  fontWeight: 600,
                  fontSize: { xs: '1.5rem', md: '1.75rem' },
                }}
              >
                Key Experience Areas
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
                gap: 3,
                mb: 4,
              }}
            >
              {[
                {
                  title: 'International Business',
                  description: 'Experience working with international firms across various industries',
                  icon: '🌍'
                },
                {
                  title: 'Research & Analysis',
                  description: 'Market research and industry analysis for diverse clients',
                  icon: '🔍'
                },
                {
                  title: 'Content Creation',
                  description: 'Newsletter and catalog development for business communications',
                  icon: '📰'
                },
                {
                  title: 'Data Management',
                  description: 'MS Excel expertise for data analysis and reporting',
                  icon: '📊'
                },
                {
                  title: 'Global Communication',
                  description: 'Cross-cultural communication with international partners',
                  icon: '🤝'
                },
                {
                  title: 'Project Support',
                  description: 'Administrative and project management support',
                  icon: '📋'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      p: 3,
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      borderRadius: '16px',
                      border: `1px solid rgba(248, 187, 217, 0.3)`,
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
                      transition: 'all 0.3s ease',
                      textAlign: 'center',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 8px 25px rgba(248, 187, 217, 0.2)',
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      },
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        mb: 2,
                        fontSize: '2.5rem',
                      }}
                    >
                      {item.icon}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                        mb: 2,
                        fontSize: { xs: '1rem', md: '1.1rem' },
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        lineHeight: 1.5,
                        fontSize: { xs: '0.85rem', md: '0.9rem' },
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ mb: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <SkillsIcon />
              <Typography
                variant="h4"
                sx={{
                  color: theme.palette.primary.main,
                  ml: 1,
                  fontWeight: 600,
                  fontSize: { xs: '1.5rem', md: '1.75rem' },
                }}
              >
                Key Skills
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1.5,
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Chip
                    label={skill}
                    sx={{
                      backgroundColor: theme.palette.primary.light,
                      color: theme.palette.primary.dark,
                      fontWeight: 500,
                      fontSize: { xs: '0.85rem', md: '0.9rem' },
                      '&:hover': {
                        backgroundColor: theme.palette.primary.main,
                        color: 'white',
                        transform: 'scale(1.05)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  />
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>

        {/* Software Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Box>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography
                variant="h4"
                sx={{
                  color: theme.palette.primary.main,
                  mb: 2,
                  fontWeight: 700,
                  fontSize: { xs: '1.75rem', md: '2rem' },
                  textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                }}
              >
                Software & Tools
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  maxWidth: '700px',
                  mx: 'auto',
                  lineHeight: 1.6,
                  fontSize: { xs: '0.95rem', md: '1.05rem' },
                }}
              >
                I'm proficient with a comprehensive suite of modern business tools that enable me to deliver 
                professional, efficient results for my clients across various industries.
              </Typography>
            </Box>
            
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
                gap: 3,
                mb: 4,
              }}
            >
              {softwareTools.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      p: 3,
                      background: `linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 187, 217, 0.05) 100%)`,
                      borderRadius: '16px',
                      border: `1px solid rgba(248, 187, 217, 0.2)`,
                      boxShadow: '0 6px 24px rgba(0, 0, 0, 0.08)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '3px',
                        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                      },
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 32px rgba(248, 187, 217, 0.2)',
                        borderColor: 'rgba(248, 187, 217, 0.4)',
                        '&::before': {
                          opacity: 1,
                        },
                      },
                    }}
                  >
                    {/* Category Header - Left Aligned */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Typography
                        variant="h2"
                        sx={{
                          fontSize: '2.5rem',
                          mr: 2,
                          filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))',
                        }}
                      >
                        {category.icon}
                      </Typography>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            color: theme.palette.primary.main,
                            fontWeight: 700,
                            mb: 0.5,
                            fontSize: { xs: '1rem', md: '1.1rem' },
                          }}
                        >
                          {category.name}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: theme.palette.secondary.main,
                            fontWeight: 600,
                            fontSize: '0.7rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            backgroundColor: 'rgba(225, 190, 231, 0.15)',
                            px: 1.5,
                            py: 0.25,
                            borderRadius: '8px',
                            display: 'inline-block',
                          }}
                        >
                          {category.category}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Description - Left Aligned */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        mb: 2,
                        lineHeight: 1.5,
                        fontSize: { xs: '0.8rem', md: '0.85rem' },
                        flexGrow: 1,
                      }}
                    >
                      {category.description}
                    </Typography>

                    {/* Tools - Left Aligned with Better Spacing */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', gap: 1 }}>
                      {category.tools.map((tool, toolIndex) => (
                        <motion.div
                          key={toolIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 1.2 + (index * 0.1) + (toolIndex * 0.05) }}
                          viewport={{ once: true }}
                        >
                          <Chip
                            label={tool}
                            size="small"
                            sx={{
                              backgroundColor: `rgba(248, 187, 217, ${0.1 + toolIndex * 0.05})`,
                              color: theme.palette.primary.dark,
                              fontWeight: 600,
                              fontSize: '0.7rem',
                              border: `1px solid rgba(248, 187, 217, ${0.2 + toolIndex * 0.1})`,
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                backgroundColor: theme.palette.primary.main,
                                color: 'white',
                                transform: 'scale(1.05)',
                                boxShadow: '0 2px 8px rgba(248, 187, 217, 0.3)',
                              },
                            }}
                          />
                        </motion.div>
                      ))}
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
            
            {/* Additional Tools & Learning Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              viewport={{ once: true }}
            >
              <Box 
                sx={{ 
                  textAlign: 'center',
                  p: 3,
                  background: 'linear-gradient(135deg, rgba(248, 187, 217, 0.1) 0%, rgba(225, 190, 231, 0.1) 100%)',
                  borderRadius: '12px',
                  border: '1px solid rgba(248, 187, 217, 0.2)',
                  maxWidth: '700px',
                  mx: 'auto',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                    mb: 1.5,
                    fontSize: { xs: '0.95rem', md: '1rem' },
                  }}
                >
                  🚀 Always Learning & Adapting
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text.secondary,
                    lineHeight: 1.5,
                    fontSize: { xs: '0.85rem', md: '0.9rem' },
                    mb: 1.5,
                  }}
                >
                  I'm constantly expanding my toolkit and can quickly learn any new software or platform your business uses. 
                  My adaptability ensures seamless integration with your existing workflows.
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.secondary.main,
                    fontWeight: 500,
                    fontSize: { xs: '0.8rem', md: '0.85rem' },
                    fontStyle: 'italic',
                  }}
                >
                  "Technology evolves, but my commitment to mastering new tools remains constant!"
                </Typography>
              </Box>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
