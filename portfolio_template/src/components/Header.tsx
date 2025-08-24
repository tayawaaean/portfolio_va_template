import React, { useState, useEffect } from 'react';
import {
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
} from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';

// Enhanced SVG icons
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
  </svg>
);

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </svg>
);

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Transform scroll values for animations
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0.8)', 'rgba(255, 255, 255, 0.95)']
  );
  
  const headerBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(5px)', 'blur(15px)']
  );
  
  const headerShadow = useTransform(
    scrollY,
    [0, 100],
    ['0 2px 20px rgba(0, 0, 0, 0.05)', '0 8px 32px rgba(0, 0, 0, 0.15)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (href: string) => {
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h6" sx={{ my: 3, color: 'primary.main', fontWeight: 700 }}>
          Kimberly Mae B. Reodique
        </Typography>
      </motion.div>
      <List>
        {navItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <ListItem onClick={() => scrollToSection(item.href)}>
              <ListItemText 
                primary={item.name} 
                sx={{ 
                  textAlign: 'center',
                  '& .MuiTypography-root': {
                    color: 'primary.main',
                    fontWeight: 500,
                    fontSize: '1.1rem',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: 'primary.dark',
                      transform: 'scale(1.05)',
                    },
                  }
                }} 
              />
            </ListItem>
          </motion.div>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <motion.header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1100,
          backgroundColor: headerBackground,
          backdropFilter: headerBlur,
          boxShadow: headerShadow,
          borderBottom: '1px solid rgba(248, 187, 217, 0.1)',
        }}
      >
        {/* Animated background pattern */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.03,
            backgroundImage: `radial-gradient(circle at 20% 20%, #E1BEE7 1px, transparent 1px),
                             radial-gradient(circle at 80% 80%, #F8BBD9 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            animation: 'float 20s ease-in-out infinite',
            '@keyframes float': {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-10px)' },
            },
          }}
        />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontWeight: 700,
                  color: 'primary.main',
                  cursor: 'pointer',
                  position: 'relative',
                  '&:hover': {
                    color: 'primary.dark',
                    '&::after': {
                      width: '100%',
                    },
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-2px',
                    left: 0,
                    width: '0%',
                    height: '2px',
                    background: `linear-gradient(90deg, ${scrolled ? '#E1BEE7' : '#F8BBD9'}, #E1BEE7)`,
                    transition: 'width 0.3s ease',
                  },
                }}
                onClick={() => scrollToSection('#home')}
              >
                Kimberly Mae B. Reodique
              </Typography>
            </motion.div>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <Button
                    onClick={() => scrollToSection(item.href)}
                    sx={{
                      color: 'primary.main',
                      fontWeight: 500,
                      fontSize: '1rem',
                      textTransform: 'none',
                      px: 2,
                      py: 1,
                      borderRadius: '20px',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        backgroundColor: 'rgba(248, 187, 217, 0.1)',
                        color: 'primary.dark',
                        transform: 'scale(1.05)',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: `linear-gradient(90deg, transparent, rgba(248, 187, 217, 0.2), transparent)`,
                        transition: 'left 0.5s ease',
                      },
                      '&:hover::before': {
                        left: '100%',
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                </motion.div>
              ))}
              
              {/* Search Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconButton
                  onClick={() => setSearchOpen(!searchOpen)}
                  sx={{
                    color: 'primary.main',
                    backgroundColor: 'rgba(248, 187, 217, 0.1)',
                    '&:hover': {
                      backgroundColor: 'rgba(248, 187, 217, 0.2)',
                      transform: 'rotate(90deg)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <SearchIcon />
                </IconButton>
              </motion.div>

              {/* Contact CTA Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  onClick={() => scrollToSection('#contact')}
                  sx={{
                    background: `linear-gradient(135deg, #E1BEE7 0%, #CE93D8 100%)`,
                    color: 'white',
                    px: 3,
                    py: 1,
                    borderRadius: '25px',
                    fontWeight: 600,
                    textTransform: 'none',
                    boxShadow: '0 4px 15px rgba(225, 190, 231, 0.4)',
                    '&:hover': {
                      background: `linear-gradient(135deg, #CE93D8 0%, #E1BEE7 100%)`,
                      boxShadow: '0 6px 20px rgba(225, 190, 231, 0.6)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Get Started
                </Button>
              </motion.div>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ 
                display: { md: 'none' },
                color: 'primary.main',
                backgroundColor: 'rgba(248, 187, 217, 0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(248, 187, 217, 0.2)',
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </motion.header>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(248, 187, 217, 0.2)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
