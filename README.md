# ReceiptOne Landing Page

Production-ready landing page for ReceiptOne — web workspace for self-employed and small business (US/Canada).

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/pnpm
- Firebase project (Firestore) — используется та же база данных, что и мобильное приложение
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
   Edit `.env` and fill in your Firebase credentials (see `.env.example` for details).

3. **Start development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

## 🔥 Firebase Setup

ReceiptOne использует Firebase Firestore как основную базу данных. Лендинг сохраняет лиды в коллекцию `leads` той же базы данных, что и мобильное приложение.

### Получение Firebase Credentials

1. **Откройте Firebase Console:** [console.firebase.google.com](https://console.firebase.google.com)
2. **Выберите проект ReceiptOne** (или создайте новый)
3. **Перейдите в Project Settings → Service Accounts**
4. **Нажмите "Generate new private key"**
5. **Скачайте JSON файл** с учетными данными

### Настройка переменных окружения

Добавьте в `.env`:

```env
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxx@your-project.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

**Важно:** 
- `FIREBASE_PRIVATE_KEY` должен быть в кавычках и содержать `\n` для переносов строк
- Или используйте одну строку без переносов — код автоматически заменит `\\n` на реальные переносы

### Структура базы данных

Лендинг сохраняет лиды в коллекцию `leads` со следующей структурой:

```typescript
{
  email: string;
  name?: string;
  persona?: string;
  consentMarketing: boolean;
  consentAnalytics: boolean;
  source?: string; // "landing" по умолчанию
  userAgent?: string;
  ipHash?: string; // SHA-256 хеш IP адреса
  country?: string;
  message?: string;
  createdAt: string; // ISO timestamp
}
```

Полная документация по структуре базы данных ReceiptOne находится в `receiptone-db-docs/`.

## 🌐 Deployment

### Vercel (Recommended)

1. **Push code to GitHub:**
   ```bash
   git add .
   git commit -m "Update to Firebase"
   git push origin main
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
     - `FIREBASE_PROJECT_ID`
     - `FIREBASE_CLIENT_EMAIL`
     - `FIREBASE_PRIVATE_KEY`
     - `NEXT_PUBLIC_ENABLE_ANALYTICS_CONSENT`
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
   - Publish directory: `.next`

4. **Environment variables:**
   - Site settings → Environment variables
   - Add all variables from `.env.example`

5. **Deploy:**
   - Netlify will build and deploy automatically

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
- `FIREBASE_PROJECT_ID` - Firebase project ID
- `FIREBASE_CLIENT_EMAIL` - Firebase service account email
- `FIREBASE_PRIVATE_KEY` - Firebase service account private key
- `NEXT_PUBLIC_COMPANY_NAME` - Company name
- `NEXT_PUBLIC_APP_NAME` - App name
- `NEXT_PUBLIC_ENABLE_ANALYTICS_CONSENT` - Enable cookie banner ("true" or "false")

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
receiptone-landing/
├── app/                    # Next.js App Router
│   ├── api/leads/         # Lead form API endpoint
│   ├── privacy/           # Privacy Policy page
│   ├── terms/            # Terms of Service page
│   ├── signin/           # Sign in page
│   ├── signup/           # Sign up page
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Homepage
│   ├── robots.ts         # robots.txt generator
│   └── sitemap.ts        # sitemap.xml generator
├── components/           # React components
│   ├── CookieBanner.tsx  # Cookie consent banner
│   ├── LeadForm.tsx      # Lead capture form
│   └── ...               # Other components
├── lib/                  # Utilities
│   ├── env.ts            # Environment helpers
│   ├── validators.ts     # Zod schemas
│   ├── rateLimit.ts      # Rate limiting
│   ├── leadStore.ts      # Firebase lead storage
│   ├── firebaseAdmin.ts  # Firebase Admin SDK setup
│   └── types/            # TypeScript types
│       └── firebase.ts   # Firebase Firestore types
└── public/               # Static assets
```

## 🐛 Troubleshooting

**"npm install" fails with dependency conflicts:**
- Use `npm install --legacy-peer-deps` or check `.npmrc` file

**Form submissions fail:**
- Check Firebase credentials (`FIREBASE_PROJECT_ID`, `FIREBASE_CLIENT_EMAIL`, `FIREBASE_PRIVATE_KEY`)
- Verify Firebase service account has Firestore permissions
- Check Vercel/Netlify function logs

**CSP blocks analytics:**
- CSP in `next.config.js` includes common analytics domains
- Add your specific domains if needed

**Firebase connection errors:**
- Ensure `FIREBASE_PRIVATE_KEY` is properly formatted (with `\n` for line breaks)
- Check that service account has "Cloud Datastore User" or "Firestore User" role
- Verify project ID matches your Firebase project

## 📞 Support

For issues or questions:
- Check Vercel/Netlify deployment logs
- Review environment variables configuration
- Ensure Firebase Firestore is accessible from deployment platform
- Check Firebase Console → Firestore Database → Collection "leads"

## 📄 License

All rights reserved.
