# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based personal portfolio website for Jon Eisen (joneisen.works). The site includes a resume, blog links, and talks section. The site is hosted on GitHub Pages and uses the `gh-pages` branch as the main branch.

## Development Commands

### Local Development
```bash
# Install dependencies
bundle install

# Serve locally (with live reload)
bundle exec jekyll serve

# Build the site
bundle exec jekyll build
```

The site will be available at `http://localhost:4000` when running locally.

### Docker Development
```bash
# Build Docker image (if needed)
docker build -t joneisen-site .

# Run in Docker
docker run -v $(pwd):/app -p 4000:4000 jekyll/jekyll jekyll serve --host 0.0.0.0
```

## Architecture

### Jekyll Structure
- **_config.yml**: Site configuration (title, email, URLs, build settings)
- **_layouts/**: Page templates
  - `home.html`: Main layout template with head include
- **_includes/**: Reusable content snippets
  - `work-history.markdown`: Resume work experience content
  - `education.markdown`: Education section
  - `head.html`: HTML head with meta tags and stylesheets
  - `talk.html`: Talk item template
- **_sass/**: SCSS stylesheets
  - `_base.scss`: Base styles
  - `_home.scss`: Homepage styles
  - `_layout.scss`: Layout styles
  - `_resume.scss`: Resume page styles
  - `_talks.scss`: Talks page styles
- **css/**: CSS compilation directory
- **js/**: Client-side JavaScript
  - Includes utilities for blog posts, popovers, table of contents, and puzzle
- **data/**: Static JSON data files
- **_site/**: Generated site output (git-ignored)

### Content Pages
- **index.markdown**: Homepage with links to blog, resume, and talks
- **resume.markdown**: Resume page that includes work-history and education partials
- **portfolio.html**: Portfolio page
- **talks.html**: Talks/presentations page

### Branch Strategy
- Main branch: `gh-pages` (used for GitHub Pages deployment)
- All work should target `gh-pages` branch for PRs

## Key Information

- The site uses kramdown with GitHub-flavored markdown (GFM)
- Jekyll version: ~> 4.2.2
- Theme: minima ~> 2.5
- Custom domain: joneisen.works
- Resume page has print-specific styles for PDF generation
