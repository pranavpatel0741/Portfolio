# Harshitkumar Brahmbhatt - Portfolio Website

A modern, responsive portfolio website for Harshitkumar Brahmbhatt, showcasing his skills, projects, and experience in the field of Data Engineering and AI/ML.

## 🌟 Overview

This portfolio website is designed to professionally showcase your skills, projects, and experience to potential employers and clients. The site features a sleek, modern design with both light and dark mode options.

## ✨ Features

- Clean, modern UI inspired by the Apex template
- Fully responsive design that works on all devices
- Dark/Light mode toggle with persistent preference
- Custom cursor effects
- Smooth scroll animations
- Accessible semantic HTML
- SEO-optimized structure
- Fast loading performance

## 🛠️ Technologies Used

- HTML5
- CSS3 (with custom properties for theming)
- Vanilla JavaScript
- Font Awesome for icons
- Google Fonts (Inter & Sora)

## 🚀 Getting Started

### For Non-Technical Users:

#### Viewing and Editing the Website Locally
1. **Download the files**: Get all the portfolio files in a folder on your computer
2. **Open the website**: Simply double-click on `index.html` to view the website in your browser
3. **Edit the content**: Open any file in a text editor (like Notepad, TextEdit, or VS Code) to make changes
4. **Refresh to view changes**: After saving your edits, refresh the browser to see your changes

### For Developers:

#### Local Development Setup
1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Start a local development server** (optional but recommended):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Using VS Code
   # Install "Live Server" extension and click "Go Live"
   ```

3. **View in browser**:
   Open http://localhost:8000 (or the port shown in your terminal)

## 🚀 Deployment Instructions

### For Non-Technical Users:

#### Option 1: GitHub Pages (Free Hosting)
1. **Create a GitHub Account**
   - Sign up at [github.com](https://github.com)

2. **Upload Your Portfolio**
   - Click the "+" icon in the top right and select "New repository"
   - Name it "portfolio" or any name you prefer
   - Click "Create repository"
   - Click "uploading an existing file" in the quick setup page
   - Drag and drop all your portfolio files or select them using the file picker
   - Click "Commit changes"

3. **Publish Your Website**
   - Click the "Settings" tab in your repository
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "main" branch
   - Click "Save"
   - Wait a few minutes and refresh the page
   - Your site will be available at `https://yourusername.github.io/portfolio/`

#### Option 2: Netlify (Free Hosting with Bonus Features)
1. **Sign up for Netlify** at [netlify.com](https://netlify.com)
2. **Deploy your site**:
   - Click "New site from Git" if you have GitHub, or
   - Simply drag and drop your entire website folder to Netlify's upload area
   - Your site will be live within minutes with a free Netlify subdomain
   - You can add your own custom domain later if you have one

### For Developers:

#### Deploying on GitHub Pages

1. **Create a GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on "Settings" → "Pages" (in left sidebar)
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be published at `https://yourusername.github.io/portfolio/`

#### Deploying on Netlify
1. **Connect your GitHub repo**:
   ```bash
   npm install netlify-cli -g
   netlify login
   netlify init
   ```
2. **Or use drag-and-drop**: Upload your build folder via the Netlify web interface

#### Deploying on Firebase (Google hosting)
1. **Initialize Firebase**:
   ```bash
   npm install -g firebase-tools
   firebase login
   firebase init hosting
   firebase deploy
   ```

#### Deploy on any web server
Simply upload all the files to your web hosting service via FTP or their control panel.

### Updating Your Live Site

After deployment, to update your site:
1. Make your changes locally
2. If using GitHub:
   ```bash
   git add .
   git commit -m "Update description"
   git push
   ```
3. Your changes will automatically deploy

## 🎨 Customization Guide

### For Non-Technical Users:

#### Adding Your Profile Picture
1. Find the `images` folder in your files
2. Replace `profile-placeholder.svg` with your photo (make sure to name it the same)
3. Or open `index.html` in a text editor, find `<img src="images/profile-placeholder.svg"` and change to your image filename

#### Updating Your Information
1. Open `index.html` in any text editor (even Notepad works!)
2. Find and replace the placeholder text with your own details:
   - Name and title in the header section
   - About Me text
   - Project descriptions and links
   - Work experience details
   - Contact information

#### Changing Colors and Theme
1. Open `css/style.css` in any text editor
2. Look for the `:root` section near the top
3. Modify color values (they're in hex format like `#ffffff`) to match your preferred palette

### For Developers:

## 💻 Technical Details

### Structure
```
portfolio/
├── index.html         # Main HTML structure
├── css/
│   ├── style.css      # Core styling
│   └── advanced-effects.css # Animations and effects
├── js/
│   └── script.js      # Interactive functionality
└── images/            # Image assets
```

### Browser Compatibility
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile responsive design for iOS and Android devices

### Performance Considerations
- Minified CSS and JS for production
- WebP format images when possible
- Lazy loading of off-screen images
- Reduced DOM size for better rendering performance

### Future Enhancement Ideas
- Add a contact form with form submission
- Implement image gallery lightbox for projects
- Add filtering functionality for projects by technology
- Implement page transitions and more advanced animations

#### File Structure
- `index.html` - Main HTML structure
- `css/`
  - `style.css` - Core styling
  - `advanced-effects.css` - Animations and special effects
- `js/script.js` - Functionality including theme toggle and animations
- `images/` - All image assets

#### Adding New Sections
To add a new section to the portfolio:
1. Follow the existing HTML pattern in `index.html`
2. Add appropriate CSS in `style.css`
3. If needed, extend the JavaScript functionality in `script.js`

#### Performance Optimization
- Images are optimized for web
- CSS is organized for readability and performance
- JavaScript is minified for production use

## 🔍 SEO Optimization

The portfolio includes basic SEO best practices:
- Semantic HTML structure
- Proper meta tags in the head section
- Optimized image alt attributes
- Responsive design (mobile-friendly)

## 🧰 Troubleshooting Common Issues

1. **Images not loading**: Check file paths in the HTML
2. **Styling issues**: Verify CSS is properly linked
3. **Deployment errors**: Ensure all files are included when uploading

## 📋 Credits

- Font Awesome for icons
- Google Fonts for typography
- Inspired by the Apex template design

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
