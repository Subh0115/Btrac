# BtrackiFiS

A modern Financial SaaS (Software-as-a-Service) platform designed to help users seamlessly track, manage, and control their finances. It integrates with multiple banks, enables secure transactions, offers real-time insights, and delivers a user-friendly dashboard for personal financial management. Built with a focus on scalability, security, and reusability, BtrackiFiS empowers users with a full view of their financial health.

## 🌟 Features

### Core Features
- Real-time financial tracking and analytics
- Multi-bank account integration
- Secure transaction processing
- Comprehensive financial dashboard
- Budget planning and tracking
- Investment portfolio management
- Bill payment reminders
- Custom financial goals
- Real-time alerts and notifications

### Technical Features
- Next.js 14 with App Router for optimal performance
- MongoDB Database with Prisma ORM for robust data management
- Authentication using Clerk for secure user management
- Modern UI with Tailwind CSS and shadcn/ui components
- TypeScript support for type safety
- Responsive design for all devices
- Dark/Light mode support
- Animated UI components
- SEO optimized with metadata
- Custom 404 pages for better UX

## 🚀 Recent Updates

### UI/UX Improvements
- Added animated bubble effect to main heading
- Implemented shine effects on buttons
- Enhanced CTA section with improved button styling
- Added gradient animations to key elements
- Improved responsive design across all sections

### New Pages & Components
- Custom 404 page implementation
- Route-specific 404 pages for:
  - How it works (/how-it-works)
  - Upgrade to Pro (/pricing/upgrade)
  - Contact Sales (/contact-sales)
  - Schedule Demo (/schedule-demo)
- Enhanced landing page sections:
  - Hero section with animated elements
  - Pricing section with monthly/yearly toggle
  - Features showcase
  - Testimonials
  - Footer with comprehensive links

## 🛠️ Prerequisites

- Node.js 18+ 
- pnpm package manager
- MongoDB database
- Clerk account for authentication

## ⚙️ Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# App Configuration
NEXT_PUBLIC_APP_NAME=BtrackiFiS
NEXT_PUBLIC_APP_DOMAIN=localhost:3000
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_AUTHOR_NAME=Your Name

# Database Configuration
DATABASE_URL=your_mongodb_url

# Authentication (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# SEO and Verification (Optional)
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_google_verification_code
NEXT_PUBLIC_YANDEX_VERIFICATION=your_yandex_verification_code
NEXT_PUBLIC_YAHOO_VERIFICATION=your_yahoo_verification_code
```

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/btrac.git
cd btrac
```

2. Install dependencies:
```bash
pnpm install
```

3. Generate Prisma client:
```bash
pnpm prisma generate
```

4. Push database schema:
```bash
pnpm prisma db push
```

5. Run development server:
```bash
pnpm dev
```

The application will be available at http://localhost:3000

## 🎯 Project Structure

```
btrac/
├── src/
│   ├── app/                 # Next.js app router pages
│   ├── components/         
│   │   ├── auth/           # Authentication components
│   │   ├── dashboard/      # Dashboard components
│   │   ├── marketing/      # Landing page components
│   │   ├── ui/            # Reusable UI components
│   │   └── global/        # Global components
│   ├── constants/          # Constants and configurations
│   ├── functions/          # Utility functions
│   └── schema/            # Data schemas and validations
├── public/                # Static assets
└── prisma/               # Database schema and migrations
```

## 🔒 Security Features

- Secure authentication with Clerk
- Protected API routes
- Input validation and sanitization
- Secure password handling
- CSRF protection
- Rate limiting
- Secure headers

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Clerk](https://clerk.dev/)
- [Prisma](https://www.prisma.io/)
- [MongoDB](https://www.mongodb.com/)
