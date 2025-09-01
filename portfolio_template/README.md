# 💼 Professional Virtual Assistant Portfolio Template

A modern, responsive portfolio website template built with React, TypeScript, and Material-UI, specifically designed for professional virtual assistants and business service providers.

![Portfolio Preview](./public/headshot.png)

## ✨ Features

- **🎨 Modern Design**: Clean, professional aesthetic with Material-UI components
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **⚡ High Performance**: Built with Vite for lightning-fast development and builds
- **🎭 Smooth Animations**: Powered by Framer Motion for engaging user experiences
- **📧 Contact Integration**: EmailJS-powered contact form with professional email templates
- **🔧 TypeScript**: Full type safety and better development experience
- **🎯 SEO Optimized**: Meta tags and semantic HTML structure
- **♿ Accessibility**: ARIA labels and keyboard navigation support
- **🌙 Professional Theme**: Pastel pink and purple color scheme perfect for service providers

## 🚀 Live Demo

[View Live Demo](https://your-portfolio-domain.com) *(Replace with your deployed URL)*

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **UI Library**: Material-UI (MUI) v7
- **Animations**: Framer Motion
- **Email Service**: EmailJS
- **Routing**: React Router DOM
- **Icons**: Material-UI Icons
- **Styling**: Emotion (CSS-in-JS)
- **Linting**: ESLint with TypeScript support

## 📁 Project Structure

```
portfolio_template/
├── public/
│   ├── headshot.png          # Your professional photo
│   ├── logo.png             # Your logo/brand image
│   └── vite.svg             # Vite logo
├── src/
│   ├── components/
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Hero.tsx         # Hero section with rotating titles
│   │   ├── Services.tsx     # Services offered section
│   │   ├── About.tsx        # About/bio section
│   │   ├── Experience.tsx   # Work experience section
│   │   ├── Contact.tsx      # Contact form with EmailJS
│   │   ├── Footer.tsx       # Footer with social links
│   │   └── icons.tsx        # Custom icon components
│   ├── config/
│   │   └── emailjs.ts       # EmailJS configuration
│   ├── App.tsx              # Main app component with theme
│   ├── main.tsx             # App entry point
│   └── index.css            # Global styles
├── EMAILJS_SETUP.md         # Complete EmailJS setup guide
├── EMAILJS_TEMPLATE.html    # Professional email template
└── README.md               # This file
```

## 🏁 Quick Start

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-template.git
   cd portfolio-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Copy the `.env.example` file to `.env` and fill in your EmailJS credentials:
   ```bash
   cp .env.example .env
   ```

   Then update the `.env` file with your EmailJS credentials (see EmailJS setup below).

4. **Replace placeholder content**

   - Replace `public/headshot.png` with your professional photo
   - Replace `public/logo.png` with your logo
   - Update personal information in component files
   - Customize the color theme in `src/App.tsx`

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Build for production**
   ```bash
   npm run build
   npm run preview
   ```

## 📧 EmailJS Setup

This portfolio includes a professional contact form powered by EmailJS. Follow the detailed setup guide in [EMAILJS_SETUP.md](./EMAILJS_SETUP.md) to configure:

- Email service connection
- Professional email templates
- Form validation and submission
- Error handling

## 🎨 Customization Guide

### Personal Information

Update the following files with your information:

1. **`src/components/Hero.tsx`**
   - Replace "Kimberly Mae B. Reodique" with your name
   - Update the rotating titles array with your services
   - Modify the description text

2. **`src/components/About.tsx`**
   - Update bio and personal details
   - Add your skills and expertise

3. **`src/components/Services.tsx`**
   - Customize service offerings
   - Update pricing or service packages

4. **`src/components/Experience.tsx`**
   - Add your work experience
   - Update education and certifications

5. **`src/components/Contact.tsx`**
   - Update contact information
   - Add social media links

### Theme Customization

Modify the theme in `src/App.tsx`:

```typescript
const theme = createTheme({
  palette: {
    primary: {
      main: '#YOUR_PRIMARY_COLOR',
      light: '#YOUR_LIGHT_VARIANT',
      dark: '#YOUR_DARK_VARIANT',
    },
    secondary: {
      main: '#YOUR_SECONDARY_COLOR',
      // ... other variants
    },
    // ... other palette options
  },
  // ... other theme options
});
```

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.tsx`
3. Update navigation in `src/components/Header.tsx`

## 📱 Responsive Design

The template is fully responsive with:
- Mobile-first approach
- Adaptive layouts for different screen sizes
- Touch-friendly navigation
- Optimized performance on mobile devices

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure environment variables in Netlify dashboard

### Traditional Hosting

1. Build the project: `npm run build`
2. Upload the `dist` folder contents to your web server

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Material-UI](https://mui.com/) for the excellent component library
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [EmailJS](https://www.emailjs.com/) for email functionality
- [Vite](https://vitejs.dev/) for the blazing fast build tool

## 📞 Support

If you have any questions or need help customizing this template:

1. Check the [EMAILJS_SETUP.md](./EMAILJS_SETUP.md) for contact form issues
2. Open an issue on GitHub
3. Reach out to the community

---

**Made with ❤️ for professional virtual assistants and service providers**
