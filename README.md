# ReceiptOne Landing Page

Production-ready landing page for ReceiptOne — web workspace for self-employed and small business (US/Canada).

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/pnpm
- PostgreSQL database (for lead storage) OR Firebase project
- Vercel account (recommended) or Netlify

### Local Development

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and fill in your values (see `.env.example` for details).

3. **Set up database (if using Postgres):**
   ```bash
   # Generate Prisma client
   npm run prisma:generate
   
   # Run migrations (if needed)
   npm run prisma:migrate
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

## 📦 Lead Storage Options

### Option 1: PostgreSQL (default)
- Set `LEAD_STORAGE=postgres` in `.env`
- Provide `DATABASE_URL` (PostgreSQL connection string)
- Run `npm run prisma:generate` after schema changes

### Option 2: Firebase Firestore
- Set `LEAD_STORAGE=firebase` in `.env`
- Provide Firebase credentials:
  - `FIREBASE_PROJECT_ID`
  - `FIREBASE_CLIENT_EMAIL`
  - `FIREBASE_PRIVATE_KEY`
- Install Firebase Admin: `npm i firebase-admin`

## 🌐 Deployment

### Vercel (Recommended)

1. **Push code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import project in Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. **Configure environment variables:**
   - In Vercel project settings → Environment Variables
   - Add all variables from `.env.example`:
     - `NEXT_PUBLIC_CANONICAL_URL`
     - `NEXT_PUBLIC_COMPANY_NAME`
     - `NEXT_PUBLIC_APP_NAME`
     - `LEAD_STORAGE`
     - `DATABASE_URL` (if using Postgres)
     - `FIREBASE_*` (if using Firebase)
     - `NODE_ENV=production`

4. **Deploy:**
   - Click "Deploy"
   - Vercel will build and deploy automatically
   - Your site will be live at `your-project.vercel.app`

5. **Set up custom domain (optional):**
   - In Vercel project settings → Domains
   - Add your domain and follow DNS instructions

### Netlify

1. **Push code to GitHub** (same as Vercel step 1)

2. **Import in Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - "Add new site" → "Import from Git"
   - Connect GitHub repository

3. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `.next` (or configure for static export if needed)

4. **Environment variables:**
   - Site settings → Environment variables
   - Add all variables from `.env.example`

5. **Deploy:**
   - Netlify will build and deploy automatically

### GitHub Pages (Static Export Only)

⚠️ **Note:** GitHub Pages only supports static sites. API routes (`/api/leads`) won't work. Use external form service (Formspree, Google Apps Script) instead.

1. **Configure static export in `next.config.js`:**
   ```js
   const nextConfig = {
     output: 'export',
     basePath: '/your-repo-name', // if deploying to /repo subpath
     // ... rest of config
   };
   ```

2. **Build:**
   ```bash
   npm run build
   ```

3. **Deploy:**
   - Push `out/` directory to `gh-pages` branch
   - Enable Pages in repository settings

## 🔒 Security Features

This landing page includes:

- ✅ **Server-side validation** (Zod schemas)
- ✅ **Rate limiting** (8 requests per 10 minutes per IP)
- ✅ **Honeypot field** (bot protection)
- ✅ **Origin/Host checks** (CSRF protection)
- ✅ **Security headers** (CSP, HSTS, X-Frame-Options, etc.)
- ✅ **No PII in logs** (IP hashing, sanitization)
- ✅ **Privacy Policy** and **Terms** pages
- ✅ **Cookie consent banner** (GDPR compliance)

## 📋 Environment Variables

See `.env.example` for complete list. Required variables:

- `NEXT_PUBLIC_CANONICAL_URL` - Your website URL (for SEO)
- `LEAD_STORAGE` - "postgres" or "firebase"
- `DATABASE_URL` - PostgreSQL connection string (if using Postgres)
- `NEXT_PUBLIC_COMPANY_NAME` - Company name
- `NEXT_PUBLIC_APP_NAME` - App name

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run prisma:generate` - Generate Prisma client
- `npm run prisma:migrate` - Run database migrations
- `npm run prisma:studio` - Open Prisma Studio (database GUI)

## 📁 Project Structure

```
receiptone-landing/
├── app/                    # Next.js App Router
│   ├── api/leads/         # Lead form API endpoint
│   ├── privacy/           # Privacy Policy page
│   ├── terms/              # Terms of Service page
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   ├── robots.ts           # robots.txt generator
│   └── sitemap.ts          # sitemap.xml generator
├── components/             # React components
│   ├── CookieBanner.tsx   # Cookie consent banner
│   ├── LeadForm.tsx        # Lead capture form
│   └── ...                 # Other components
├── lib/                    # Utilities
│   ├── env.ts              # Environment helpers
│   ├── validators.ts       # Zod schemas
│   ├── rateLimit.ts        # Rate limiting
│   └── leadStore.ts        # Lead storage abstraction
├── prisma/                 # Database schema
│   └── schema.prisma       # Prisma schema
└── public/                 # Static assets
```

## 🐛 Troubleshooting

**"npm install" fails with dependency conflicts:**
- Use `npm install --legacy-peer-deps` or check `.npmrc` file

**Form submissions fail:**
- Check `DATABASE_URL` or Firebase credentials
- Verify `LEAD_STORAGE` environment variable
- Check Vercel/Netlify function logs

**CSP blocks analytics:**
- CSP in `next.config.js` includes common analytics domains
- Add your specific domains if needed

**Prisma client not found:**
- Run `npm run prisma:generate` after installing dependencies

## 📞 Support

For issues or questions:
- Check Vercel/Netlify deployment logs
- Review environment variables configuration
- Ensure database/Firebase is accessible from deployment platform

## 📄 License

All rights reserved.
