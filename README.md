# OWSH Studio

**Website:** [owshstudio.com](https://owshstudio.com)

A web design studio for local businesses. We build beautiful, fast websites with no upfront cost — just a simple monthly subscription.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Fonts:** Geist Sans & Mono
- **Deployment:** Vercel

## Getting Started

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

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Homepage
│   ├── work/             # Portfolio pages
│   ├── pricing/          # Pricing page
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── privacy/          # Privacy policy
│   ├── terms/            # Terms of service
│   └── layout.tsx        # Root layout
├── components/
│   ├── Navbar.tsx        # Navigation
│   ├── Footer.tsx        # Footer
│   ├── Button.tsx        # Button component
│   ├── SectionHeading.tsx
│   └── GradientBlob.tsx  # Decorative blob
└── ...
```

## Design System

### Colors

- **Background:** `#0a0a0a`
- **Gradient:** Orange (`#f97316`) → Magenta (`#ec4899`) → Purple (`#a855f7`)
- **Text:** White with opacity variants

### Typography

- Headlines: Geist Sans, Bold
- Body: Geist Sans, Regular
- Mono: Geist Mono (for code/technical)

## Deployment

This project is optimized for Vercel:

```bash
# Deploy to Vercel
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

## Easter Eggs

- Check the browser console 👀
- Try the Konami code: ↑ ↑ ↓ ↓ ← → ← → B A

## Contact

**Noah Owsiany**  
Email: noah@owshstudio.com  
Location: Buffalo, NY

---

Built with ❤️ and a lot of ☕ by OWSH Studio.
