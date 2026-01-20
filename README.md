# TomFit Blog

A multilingual fitness and strength training blog built with Next.js 14.

## Features

- **Multilingual Support**: English, German (Deutsch), and Polish (Polski)
- **Modern UI**: Clean, responsive design with Tailwind CSS
- **Blog System**: Dynamic blog posts with MDX support
- **SEO Optimized**: Server-side rendering with Next.js App Router

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: MDX with gray-matter

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development

The development server runs at `http://localhost:3000`.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── [slug]/            # Dynamic blog post pages
│   ├── subscribe/         # Newsletter subscription page
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Home page with blog listing
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── BlogCard.tsx       # Blog post card component
│   ├── Header.tsx         # Navigation header with language switcher
│   └── Footer.tsx         # Site footer
└── lib/                   # Utility functions
    ├── i18n.ts            # Internationalization helpers
    ├── posts.ts           # Blog post data fetching
    └── translations.ts    # UI translations
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

Private project.
