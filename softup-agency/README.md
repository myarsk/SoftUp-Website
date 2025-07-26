# SoftUp Agency - Modern Software Development Agency Website

A cutting-edge, single-page marketing website for SoftUp Agency, built with Next.js, TypeScript, Tailwind CSS, GSAP animations, and Three.js. The design is inspired by ChainGPT.org with a futuristic cyber theme.

## 🚀 Features

### Design & UI
- **Dark Cyber Theme**: Near-black background (#09090E) with neon cyan (#00FFFF) and magenta (#FF00FF) accents
- **Modern Typography**: Orbitron for headings and Roboto for body text
- **Responsive Design**: Fully responsive across all devices
- **Glitch Effects**: CSS-based text glitch animations for headings
- **Cyber Grid Background**: Animated grid patterns and floating elements

### Animations & Interactions
- **GSAP ScrollTrigger**: Smooth scroll-based animations for all sections
- **Lenis Smooth Scrolling**: Ultra-smooth scrolling experience
- **3D Hero Background**: Animated Three.js sphere with distortion effects
- **Hover Effects**: Interactive buttons, cards, and navigation elements
- **Parallax Elements**: Mouse-following background elements in hero section

### Sections
1. **Hero Section**: Full-screen with 3D background, glitch text, and CTA buttons
2. **Services**: 8 service cards with icons, descriptions, and hover effects
3. **Portfolio**: Filterable project showcase with 6 case studies
4. **About**: Team information, company stats, and mission statement
5. **Testimonials**: Sliding testimonial carousel with client feedback
6. **Pricing**: Three-tier pricing plans with additional services
7. **Contact**: Comprehensive contact form with validation
8. **Footer**: Social links, quick navigation, and newsletter signup

### Technical Features
- **Next.js 14**: App Router with TypeScript
- **Tailwind CSS**: Custom design system with cyber theme
- **GSAP**: Professional animations and scroll triggers
- **Three.js**: 3D graphics and interactive elements
- **Lenis**: Smooth scrolling library
- **Lucide React**: Modern icon system
- **Form Handling**: Contact form with validation
- **SEO Optimized**: Meta tags and semantic HTML

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd softup-agency
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
softup-agency/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and animations
│   │   ├── layout.tsx           # Root layout with fonts
│   │   └── page.tsx             # Main page component
│   └── components/
│       ├── Navigation.tsx       # Sticky navigation with mobile menu
│       ├── Hero.tsx             # Hero section with 3D background
│       ├── Services.tsx         # Services grid with animations
│       ├── Portfolio.tsx        # Project showcase with filters
│       ├── About.tsx            # Team and company information
│       ├── Testimonials.tsx     # Client testimonial slider
│       ├── Pricing.tsx          # Pricing plans and FAQ
│       ├── Contact.tsx          # Contact form and information
│       └── Footer.tsx           # Footer with social links
├── tailwind.config.ts           # Tailwind configuration
├── package.json                 # Dependencies and scripts
└── README.md                    # Project documentation
```

## 🎨 Design System

### Colors
- **Background**: #09090E (Near black)
- **Foreground**: #EFEFE5 (Light text)
- **Primary**: #00FFFF (Neon cyan)
- **Secondary**: #FF00FF (Neon magenta)
- **Accent**: #7C3AED (Purple)
- **Muted**: #1A1A1F (Dark gray)
- **Border**: #2A2A35 (Border color)

### Typography
- **Headings**: Orbitron (futuristic, monospace)
- **Body**: Roboto (clean, sans-serif)
- **Weights**: 300, 400, 500, 700, 900

### Animations
- **Float**: Vertical floating animation (6s)
- **Glow**: Pulsing glow effect (2s)
- **Pulse Slow**: Slow pulse animation (4s)
- **Spin Slow**: Slow rotation (8s)
- **Glitch**: Text glitch effect with color shifts

## 🔧 Customization

### Changing Colors
Update the color palette in `tailwind.config.ts`:

```typescript
colors: {
  background: "#09090E",
  foreground: "#EFEFE5",
  primary: "#00FFFF",
  secondary: "#FF00FF",
  accent: "#7C3AED",
  // ... other colors
}
```

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add to `src/app/page.tsx`
3. Add navigation link in `Navigation.tsx`

### Modifying Content
- **Services**: Update the `services` array in `Services.tsx`
- **Portfolio**: Modify the `projects` array in `Portfolio.tsx`
- **Team**: Update the `team` array in `About.tsx`
- **Testimonials**: Modify the `testimonials` array in `Testimonials.tsx`
- **Pricing**: Update the `plans` array in `Pricing.tsx`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components adapt to different screen sizes with appropriate layouts and typography scaling.

## 🚀 Performance Optimizations

- **Next.js Image Optimization**: Automatic image optimization
- **Code Splitting**: Automatic code splitting by Next.js
- **Font Optimization**: Google Fonts with display swap
- **CSS Optimization**: Tailwind CSS purging unused styles
- **Animation Performance**: Hardware-accelerated CSS animations

## 🌟 Key Features Showcase

### 3D Hero Animation
The hero section features a Three.js animated sphere with material distortion, creating an engaging visual centerpiece.

### Smooth Scrolling
Lenis provides buttery-smooth scrolling throughout the site, enhancing the user experience.

### Interactive Portfolio
Filterable portfolio with smooth transitions and hover effects showcasing different project categories.

### Dynamic Testimonials
Auto-playing testimonial carousel with manual navigation and smooth transitions.

### Advanced Contact Form
Comprehensive contact form with service selection, budget ranges, and form validation.

## 🛡️ Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

This project is created for demonstration purposes. All design elements are original and not copied from ChainGPT or any other source.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, please contact:
- Email: hello@softupagency.com
- Phone: +1 (555) 123-4567

---

**SoftUp Agency** - Next-Gen Software Solutions
