# Veronika Pozniak — Official Portfolio & Business Card

A modern, multilingual personal portfolio and business card website for **Veronika Pozniak** — singer, performer, and vocal educator. Built with **Astro 7**, **Tailwind CSS 4**, and integrated with **Decap CMS** for effortless content management.

🌐 **Live Website**: [https://Next-Trip.github.io/pozniak-business-card](https://Next-Trip.github.io/pozniak-business-card)

---

## 🌟 Key Features

- **🌐 Multilingual Support (i18n)**: Full localization support for English (`en`), Ukrainian (`uk`), and Czech (`cs`).
- **📝 Decap CMS Integration**: Content management at `/admin` for editing bio, homepage content, events, workshops, press quotes, and galleries.
- **📅 Events & Performances**: Dedicated section for listing upcoming and past concerts, performances, and theatrical events.
- **🎙️ Workshops & Masterclasses**: Showcase for group workshops and individual vocal education sessions.
- **🖼️ Photo & Video Gallery**: Lightweight video embedding (`lite-youtube`) and responsive photo carousels powered by Embla Carousel.
- **💬 Press Quotes & Reviews**: Display quotes and testimonials from press and critics.
- **⚡ Blazing Fast**: Built as a static site (SSG) with optimized image loading, web fonts, and zero-JS interactive components where possible.
- **🚀 Automatic Deployment**: Automated build and deployment to GitHub Pages via GitHub Actions.

---

## 🛠️ Tech Stack

- **Framework**: [Astro 7](https://astro.build/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) (`@tailwindcss/vite`)
- **Typography**: Google Fonts (*EB Garamond*, *Inter*) via Astro Font Loader
- **Icons**: [Astro Icon](https://github.com/natemoo-re/astro-icon) (`@iconify-json/mdi`)
- **Carousel**: [Embla Carousel](https://www.embla-carousel.com/) (with Auto-Scroll plugin)
- **CMS**: [Decap CMS](https://decapcms.org/) with DecapBridge PKCE authentication
- **Formatting**: Prettier with `prettier-plugin-astro` and `prettier-plugin-tailwindcss`

---

## 🔌 Model Context Protocol (MCP)

This project includes Model Context Protocol (MCP) configurations to enable AI agents and IDE tools to interact with local runtimes and documentation:

- **`astroDocs`**: Astro documentation integration (`https://mcp.docs.astro.build/mcp`).
- **`tailwindcss`**: Tailwind CSS utility mapping and documentation search (`tailwindcss-mcp-server`).
- **`puppeteer`**: Automated browser interaction, screenshots, and visual testing (`@modelcontextprotocol/server-puppeteer`).
- **`typescript`**: TypeScript code intelligence and refactoring utilities (`typescript-mcp-server`).

### Configuration Files
- **VS Code**: [.vscode/mcp.json](.vscode/mcp.json)
- **Agent CLI**: [.agents/mcp_config.json](.agents/mcp_config.json)

---

## 📂 Project Structure

```text
pozniak-business-card/
├── .github/workflows/   # GitHub Actions workflow for GitHub Pages deployment
├── public/              # Static assets, favicons, and Decap CMS config (`admin/`)
├── src/
│   ├── assets/          # Shared images and visual assets
│   ├── components/      # Reusable UI components (Header, Footer, Gallery, etc.)
│   ├── content/         # Content collections (events, workshops, press quotes)
│   ├── data/            # JSON content files (homepage, bio, gallery, videos)
│   ├── i18n/            # Internationalization dictionaries and helpers
│   ├── layouts/         # Layout wrapper templates
│   ├── pages/           # Astro pages with localized routes ([...locale]/)
│   └── styles/          # Tailwind CSS styles and custom styling
├── astro.config.mjs     # Astro project configuration (i18n, fonts, icons)
└── package.json         # Dependencies and scripts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `^22.12.0` or higher
- **npm**: `v10` or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Next-Trip/pozniak-business-card.git
   cd pozniak-business-card
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the local development server:
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser.

### Building for Production

Build the production bundle:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

---

## 📄 License

All rights reserved © **Veronika Pozniak**.
