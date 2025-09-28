# RoboData Landing Page

A modern, responsive landing page for RoboData - The Marketplace for Robotics Training Data. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark theme
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Performance Optimized**: Built with Next.js 14 and App Router
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Lucide Icons**: Beautiful, customizable SVG icons
- **Smooth Animations**: Engaging hover effects and transitions
- **SEO Optimized**: Proper meta tags and OpenGraph support

## 🛠️ Technology Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📦 Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Install Lucide React icons** (if not automatically installed):
   ```bash
   npm install lucide-react
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
/app
├── /components
│   ├── Navbar.tsx           # Fixed navigation header
│   ├── HeroSection.tsx      # Hero section with CTA
│   ├── DataShowcase.tsx     # Dataset cards showcase
│   ├── HowItWorks.tsx       # 3-step process section
│   ├── SocialProof.tsx      # Company logos & testimonials
│   ├── FinalCTA.tsx         # Final call-to-action
│   └── Footer.tsx           # Footer with links
├── layout.tsx               # Root layout with metadata
├── page.tsx                 # Main page component
└── globals.css              # Global styles & Tailwind
```

## 🎨 Component Overview

### Navbar
- Fixed header with backdrop blur
- Mobile-responsive navigation
- Sign up button with gradient styling

### HeroSection
- Full-screen hero with animated background
- Primary and secondary CTAs
- Statistics display
- Scroll indicator

### DataShowcase
- Grid layout of dataset cards
- Hover effects and animations
- Interactive preview placeholders
- Metrics with icons

### HowItWorks
- 3-step process visualization
- Connected flow design
- Responsive layout

### SocialProof
- Company logo showcase
- Customer testimonial
- Trust metrics

### FinalCTA
- Prominent call-to-action
- Benefits list
- Trust indicators

### Footer
- Multi-column layout
- Newsletter signup
- Social media links
- Legal links

## 🚀 Getting Started

1. **Clone or download the project files**

2. **Install Node.js** (version 18 or higher)

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Build for production**:
   ```bash
   npm run build
   npm start
   ```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎯 Customization

### Colors
Modify the color scheme in `tailwind.config.js` and `globals.css`.

### Content
Update component content, images, and links in the respective component files.

### Styling
Customize styles using Tailwind CSS classes or add custom CSS to `globals.css`.

### Icons
Replace or add new Lucide React icons as needed.

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🔧 Configuration Files

- `package.json` - Dependencies and scripts
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `next.config.js` - Next.js configuration
- `postcss.config.js` - PostCSS configuration

## 📄 License

This project is licensed under the MIT License.

## 🤝 Support

For questions or support, please contact the development team.

---

**Built with ❤️ for the robotics community**
