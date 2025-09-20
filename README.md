# Dual-Mode Portfolio Website

A cutting-edge portfolio website featuring a unique dual-mode design that seamlessly switches between professional and cyberpunk aesthetics. Built for a final year Computer Science student.

## 🌟 Features

### 🎨 Dual Theme System
- **Professional Mode**: Clean, minimalist design with glassmorphism effects
- **Cyber Mode**: Full cyberpunk transformation with matrix effects, glitch animations, and neon aesthetics
- **Smooth Transitions**: Animated theme switching with screen flicker effects

### 🚀 Advanced Animations
- **Framer Motion**: Smooth page transitions and interactive elements
- **Matrix Rain**: Dynamic background effect in cyber mode
- **Glitch Effects**: Text and UI glitch animations
- **Typewriter Animation**: Dynamic text typing effects
- **3D Elements**: Three.js integration for immersive visuals

### 💻 Interactive Components
- **Terminal (Cyber Mode)**: Functional terminal interface
- **Glassmorphism UI**: Modern glass-effect components
- **Neon Button Effects**: Cyber-themed interactive buttons
- **Dynamic Cursor**: Changes based on current mode

### 📱 Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interactions

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom utilities
- **Animations**: Framer Motion
- **3D Graphics**: Three.js / React Three Fiber
- **Icons**: Lucide React
- **Fonts**: Inter, JetBrains Mono, Orbitron
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## 🎮 How to Use

### Theme Switching
- **Light/Dark Toggle**: Click the sun/moon icon (only available in professional mode)
- **Cyber Mode Toggle**: Click the zap/terminal icon to activate cyber transformation
- **Smooth Transitions**: Experience screen flicker effects during mode changes

### Navigation
- **Professional Mode**: Clean navigation with hover effects
- **Cyber Mode**: Glitch-style navigation with neon highlights
- **Mobile**: Responsive hamburger menu

### Interactive Elements
- **Hero Section**: Dynamic typewriter text with role rotation
- **Projects**: Hover effects and modal interactions
- **Terminal**: Interactive command interface (cyber mode only)
- **Contact Form**: Animated form validation

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── globals.css        # Global styles with dual themes
│   │   ├── layout.tsx         # Root layout with theme provider
│   │   ├── page.tsx           # Home page
│   │   ├── projects/          # Projects showcase
│   │   ├── contact/           # Contact page
│   │   └── ...
│   ├── components/            # Reusable components
│   │   ├── Navbar.tsx         # Dual-mode navigation
│   │   ├── Hero.tsx           # Landing hero section
│   │   ├── Terminal.tsx       # Interactive terminal
│   │   └── ui/                # UI components
│   ├── context/               # React contexts
│   │   └── ThemeContext.tsx   # Theme management
│   ├── data/                  # Static data
│   │   └── portfolio.ts       # Portfolio content
│   ├── hooks/                 # Custom React hooks
│   └── utils/                 # Utility functions
├── public/                    # Static assets
│   ├── images/               # Image assets
│   └── models/               # 3D models
├── tailwind.config.ts        # Tailwind configuration
└── package.json
```

## 🎨 Customization

### Adding Your Content

1. **Update Portfolio Data**
   Edit `src/data/portfolio.ts` to add your:
   - Projects
   - Education
   - Experience  
   - Skills

2. **Modify Themes**
   Customize colors in `tailwind.config.ts`:
   ```typescript
   // Professional theme colors
   colors: {
     primary: "your-color",
     // ...
   }
   
   // Cyber theme colors
   cyber: {
     primary: "#00ff41",
     // ...
   }
   ```

3. **Update Personal Information**
   - Hero section text in `src/components/Hero.tsx`
   - Contact information
   - Social media links
   - Resume/CV link

### Adding New Pages

Create new pages in the `src/app/` directory following Next.js App Router conventions.

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

### Other Platforms
- **Netlify**: Build command `npm run build`, publish directory `out`
- **GitHub Pages**: Use `npm run build` and deploy the `out` folder

## 🎯 SEO & Performance

- **Optimized Images**: Next.js Image component with lazy loading
- **Meta Tags**: Comprehensive SEO meta tags
- **Performance**: Lighthouse score 90+
- **Accessibility**: WCAG 2.1 compliant
- **Progressive Web App**: Offline support ready

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Icon library
- [Three.js](https://threejs.org/) - 3D library

## 📞 Contact

**Jay** - Final Year Computer Science Student
- Portfolio: [https://jay-portfolio.vercel.app](https://jay-portfolio.vercel.app)
- GitHub: [@jay](https://github.com/jay)
- LinkedIn: [Jay](https://linkedin.com/in/jay)
- Email: jay@example.com

---

⭐ **Star this repository if you found it helpful!**
