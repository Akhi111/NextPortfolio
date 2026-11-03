# Premium 3D Developer Portfolio (Apple Liquid Glass UI)

A futuristic, high-performance personal developer portfolio built with **Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, and Three.js (React Three Fiber & Drei)**.

Designed with an **Apple Liquid Glass** visual language—featuring translucent frosted panels, ambient dynamic lighting, physics-based 3D tilt cards, interactive 3D orb canvas, and an authenticated serverless email contact pipeline.

---

## 🌟 Key Features

- **Apple Liquid Glass Aesthetics**: Refined glassmorphism cards, backdrop blurs (`blur-xl` / `blur-2xl`), hairline semi-transparent borders, and soft glowing accents.
- **Interactive 3D Three.js Scene**:
  - Floating translucent liquid glass sphere with dynamic refractive distortion.
  - Dual orbiting metallic and iridescent rings.
  - Physics-based mouse tracking and auto-rotation with fallbacks for non-WebGL devices.
- **Responsive Floating Navigation**:
  - Centered liquid glass pill with active section tracking via Framer Motion's `layoutId`.
  - Animated mobile menu drawer with hamburger toggle.
- **Interactive Project Showcase**:
  - 3D mouse tilt physics with specular spotlight reflections.
  - Technology filtering (Frontend & 3D, Full Stack, AI & ML, Web3).
  - Detailed architectural modal viewer with live metrics, system overviews, and source links.
- **Career Timeline & Skills Matrix**:
  - Vertical animated progress line that dynamically traces user scroll position.
  - Interactive skill progress indicators organized across 4 domains.
- **Production-Ready Contact Engine**:
  - Full client and server-side validation using **React Hook Form + Zod**.
  - **Nodemailer SMTP** integration with a glassmorphism HTML email template.
  - In-memory sliding-window rate limiting (anti-spam) and hidden honeypot bot trap.
  - Celebratory confetti feedback upon successful submission.
- **Zero TypeScript `any`**: 100% strict TypeScript types and clean architecture.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (Strict mode)
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, `@react-three/fiber`, `@react-three/drei`
- **Icons**: Lucide React
- **Form Management**: React Hook Form, `@hookform/resolvers`, Zod
- **Email Delivery**: Nodemailer (SMTP / Serverless API)
- **Visual FX**: Canvas Confetti

---

## 📁 Project Architecture

```text
portfolio/
├── public/
│   ├── images/
│   └── models/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts        # Serverless contact endpoint & rate limiter
│   │   ├── globals.css             # Liquid glass utilities & scroll styles
│   │   ├── layout.tsx              # Root layout, fonts, SEO metadata
│   │   └── page.tsx                # Page composition
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Floating centered liquid glass nav
│   │   │   └── Footer.tsx          # Minimal glass footer & back-to-top
│   │   ├── sections/
│   │   │   ├── Hero.tsx            # Hero with dynamic CTAs & 3D object
│   │   │   ├── Projects.tsx        # Filterable 3D tilt project cards
│   │   │   ├── Experience.tsx      # Vertical animated career timeline
│   │   │   ├── Skills.tsx          # Glass skill badges & progress bars
│   │   │   └── Contact.tsx         # Validated glass contact form
│   │   ├── three/
│   │   │   ├── GlassOrb.tsx        # 3D Mesh distortion & orbital rings
│   │   │   └── HeroScene.tsx       # Canvas wrapper & WebGL fallback
│   │   └── ui/
│   │       ├── GlassCard.tsx       # 3D tilt physics & specular cursor spotlight
│   │       ├── GlassButton.tsx     # Apple-style glass button with sheen
│   │       ├── GlowBackground.tsx  # Dynamic ambient color lighting
│   │       ├── ScrollProgress.tsx  # Top reading progress indicator
│   │       └── ProjectModal.tsx    # Architectural deep-dive modal
│   ├── data/
│   │   ├── projects.ts             # Customizable portfolio projects
│   │   ├── experience.ts           # Career history & achievements
│   │   └── skills.ts               # Categorized skills & levels
│   ├── lib/
│   │   ├── email.ts                # Nodemailer transporter & HTML email template
│   │   ├── utils.ts                # Tailwind class mergers & helpers
│   │   └── validations.ts          # Zod contact form validation schema
│   └── types/
│       └── index.ts                # Strict TypeScript interfaces
├── .env.example
├── .gitignore
├── next.config.mjs
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Populate the values inside `.env.local`:
```env
CONTACT_EMAIL=your.email@example.com
MAIL_FROM_EMAIL="Portfolio Contact" <noreply@yourdomain.com>
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your.smtp.username@gmail.com
SMTP_PASSWORD=your_app_password
```

> **Note**: If SMTP credentials are not set, the contact API runs in **Simulation Mode** during local development, logging simulated transmissions to the server console and allowing full end-to-end UI testing without triggering an error.

### 3. Run Locally in Development Mode
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 🧪 Testing the Contact Form

1. Scroll to the **Contact** section at the bottom of the page.
2. Fill in the required fields: Full Name, Email Address, Subject, and Message.
3. Click **Send Secure Message**.
4. You will observe:
   - A loading spinner while the serverless request is processed.
   - Client and server validations guarding required fields and email formats.
   - A celebratory confetti burst upon completion.
   - An animated confirmation banner with an option to send another message.

---

## 🚢 Deploying to Vercel

Follow these steps to deploy your portfolio to Vercel:

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of premium 3D portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

2. **Import Repository to Vercel**:
   - Go to [vercel.com](https://vercel.com) and click **Add New > Project**.
   - Select your GitHub repository.

3. **Configure Environment Variables**:
   - In the project configuration screen on Vercel, expand the **Environment Variables** section.
   - Add:
     - `CONTACT_EMAIL`: Your destination inbox address.
     - `MAIL_FROM_EMAIL`: Sender title (e.g. `"Portfolio Inquiry" <noreply@yourdomain.com>`).
     - `SMTP_HOST`: e.g. `smtp.gmail.com` or `smtp.resend.com`.
     - `SMTP_PORT`: `587` (or `465`).
     - `SMTP_USER`: Your SMTP user / email.
     - `SMTP_PASSWORD`: Your SMTP app password.

4. **Deploy**:
   - Click **Deploy**. Vercel will build the Next.js App Router application and deploy it globally on the Vercel Edge/Serverless network.

---

## 📄 License
MIT &copy; Akhil Acharekar

