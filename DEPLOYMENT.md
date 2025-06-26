# Deployment Guide for Harshitkumar Brahmbhatt's Portfolio

This guide provides detailed instructions for deploying your portfolio website on GitHub Pages.

## Deploying on GitHub Pages

GitHub Pages is a free hosting service that takes HTML, CSS, and JavaScript files directly from a GitHub repository and publishes a website.

### Step 1: Create a GitHub Account

If you don't already have one, sign up for a GitHub account at [github.com](https://github.com).

### Step 2: Install Git

1. Download and install Git from [git-scm.com](https://git-scm.com/downloads)
2. Configure Git with your name and email:
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your-email@example.com"
   ```

### Step 3: Create a GitHub Repository

1. Log in to GitHub
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository `portfolio` (or any name you prefer)
4. Choose "Public" repository
5. Do not initialize the repository with a README
6. Click "Create repository"

### Step 4: Initialize and Push Your Local Repository

Open a terminal/command prompt in your portfolio directory and run:

```bash
# Initialize a new git repository
git init

# Add all files to staging
git add .

# Commit the files
git commit -m "Initial commit"

# Add the remote GitHub repository
git branch -M main
git remote add origin https://github.com/your-username/portfolio.git

# Push to GitHub
git push -u origin main
```

Replace `your-username` with your actual GitHub username.

### Step 5: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "GitHub Pages" section
4. Under "Source", select the branch (usually `main`) and click "Save"
5. Wait a few minutes for GitHub to build and deploy your site
6. You'll see a green box with a link to your published site: `https://your-username.github.io/portfolio/`

### Step 6: Custom Domain (Optional)

If you have your own domain name:

1. In your portfolio repository's "Settings" > "Pages"
2. Under "Custom domain", enter your domain name (e.g., `harshitbrahmbhatt.com`)
3. Click "Save"
4. Configure your domain's DNS settings:
   - Create a CNAME record pointing to `your-username.github.io`
   - Or follow GitHub's instructions for apex domains

## Making Updates

After deploying, when you want to make updates:

1. Make changes to your local files
2. Commit the changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
3. GitHub will automatically rebuild and deploy your site

## Troubleshooting

- **404 Error**: Make sure your repository name matches the URL path
- **CSS/JS Not Loading**: Check that file paths are correct (they should be relative)
- **Changes Not Appearing**: Clear your browser cache or wait a few minutes for GitHub to rebuild

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Setting up a custom domain with GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [GitHub Pages Troubleshooting Guide](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites)
