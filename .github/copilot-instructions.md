# GitHub Copilot Instructions for adrw.xyz

## Project Overview
This is a personal website and blog for Andrew Alexander (adrw), built with Gatsby and hosted at adrw.xyz. The site features blog posts, personal pages, and password-protected content sections.

## Technology Stack
- **Framework**: Gatsby 5.x (React-based static site generator)
- **Theme**: @lekoarts/gatsby-theme-minimal-blog
- **UI Framework**: React 19.x
- **Styling**: Theme UI (via LekoArts theme)
- **Password Protection**: @mkitio/gatsby-theme-password-protect
- **Code Formatting**: Prettier with @misk/prettier config
- **Package Manager**: Yarn

## Project Structure
```
/
├── .github/           # GitHub workflows and configuration
├── content/           # Markdown/MDX content
│   ├── pages/        # Static pages (digital, now, experience, etc.)
│   ├── posts/        # Blog posts organized by category
│   └── redacted/     # Password-protected content
├── src/              # Source code
│   ├── @lekoarts/    # Theme overrides
│   ├── @mkitio/      # Password protection overrides
│   └── html.js       # Custom HTML template
├── static/           # Static assets (favicon, images)
├── gatsby-config.js  # Gatsby configuration
└── package.json      # Project dependencies and scripts
```

## Development Commands
- `yarn develop` - Start development server with linting
- `yarn build` - Build production site with linting
- `yarn lint` - Format code with Prettier
- `yarn clean` - Clean Gatsby cache
- `yarn serve` - Serve production build locally

## Code Style
- **Formatter**: Prettier with @misk/prettier configuration
- **Auto-format**: Runs on all `.md`, `.mdx`, `.css`, `.sass`, `.less`, `.json`, `.js`, `.jsx`, `.ts`, `.tsx` files
- **Format on save**: Run `yarn lint` to format all files
- Always format code before committing

## Content Guidelines
### Blog Posts
- Location: `content/posts/`
- Format: Markdown (`.md`) or MDX (`.mdx`)
- Frontmatter required: title, date, tags, description
- Date format: YYYY-MM-DD

### Pages
- Location: `content/pages/`
- Format: MDX (`.mdx`)
- Used for static pages like About, Now, Digital, etc.

### Password Protection
Protected paths are configured in `gatsby-config.js` under `@mkitio/gatsby-theme-password-protect`:
- `/books`, `/cache`, `/code`, `/experience`, `/faith`, `/finance`, `/health`, `/news`, `/private`, `/scenes`, `/songs`, `/tech`, `/travel`
- Password: "hourglass"

## Configuration Files
### gatsby-config.js
- Site metadata (title, description, URL)
- Plugin configuration
- External links (LinkedIn, GitHub)
- Navigation structure
- RSS feed settings

### package.json
- Build and development scripts
- Dependency management
- Prettier configuration reference

## Key Features
1. **Minimal Blog Theme**: Clean, fast, and accessible blog design
2. **Password Protection**: Selective content protection with partial path matching
3. **SEO Optimized**: Sitemap, manifest, and meta tags
4. **Offline Support**: PWA with offline plugin
5. **Analytics**: Google Analytics (gtag) integration
6. **Custom Favicon**: Multiple sizes for various devices

## Working with Gatsby Themes
- Theme overrides go in `src/@lekoarts/gatsby-theme-minimal-blog/`
- Password protection overrides in `src/@mkitio/gatsby-theme-password-protect/`
- Follow theme shadowing conventions for overriding components

## Best Practices
1. Always run linting before commits
2. Test locally with `yarn develop` before building
3. Use MDX for pages that need React components
4. Keep content organized by category in posts/
5. Update gatsby-config.js for site-wide changes
6. Maintain consistent date formats (YYYY-MM-DD)
7. Test password-protected routes after changes

## Common Tasks
### Adding a New Blog Post
1. Create file in `content/posts/<category>/`
2. Use YYYY-MM-DD-title.md naming convention
3. Include required frontmatter
4. Format with `yarn lint`

### Adding a New Page
1. Create file in `content/pages/`
2. Use .mdx extension for React component support
3. Add navigation link in gatsby-config.js if needed

### Modifying Theme
1. Shadow components in `src/@lekoarts/gatsby-theme-minimal-blog/`
2. Follow theme's component structure
3. Test thoroughly as theme updates may affect overrides

## Important Notes
- Site uses Gatsby's file system routing
- Content is transformed at build time
- Changes to gatsby-config.js require server restart
- Password protection uses client-side protection (not for sensitive data)
- Google Analytics tracking ID: G-LGH29TMSBH
