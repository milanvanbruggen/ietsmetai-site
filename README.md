# ietsmetai Portfolio Website

Moderne Next.js portfolio website gebouwd met TypeScript en Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- 🌙 Dark mode support
- ⚡ Optimized for performance
- 📱 Mobile-first approach
- 🚀 Ready for Vercel deployment

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm of yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Deployment naar Vercel

### Via Vercel Dashboard

1. Push deze repository naar GitHub
2. Ga naar [Vercel Dashboard](https://vercel.com)
3. Klik op "Add New Project"
4. Importeer de GitHub repository
5. Vercel detecteert automatisch Next.js en configureert de build settings
6. Klik op "Deploy"

### Domein koppelen (ietsmetai.com)

1. In Vercel Dashboard, ga naar je project settings
2. Ga naar "Domains"
3. Voeg `ietsmetai.com` toe
4. Volg de DNS instructies:
   - Voeg een A-record toe met `@` naar Vercel's IP adres
   - Of voeg een CNAME record toe met `@` naar `cname.vercel-dns.com`
5. Wacht tot DNS is gepropageerd (kan enkele minuten tot uren duren)

### Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

## Project Structuur

```
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles
├── components/
│   └── Navigation.tsx  # Navigation component
├── public/             # Static assets
└── package.json
```

## License

MIT
