# Mais Sabor Seller Dashboard

A modern seller dashboard built with Next.js 16, NextAuth, and shadcn/ui for managing WooCommerce orders and sales.

## Features

- 🔐 **Authentication** - Secure login with NextAuth.js
- 📊 **Sales Dashboard** - View monthly sales, orders, and customer statistics with interactive charts
- 🛒 **Order Management** - Create and manage customer orders
- 👥 **Customer Management** - View and search through customer database
- 🎨 **Modern UI** - Built with shadcn/ui components and Tailwind CSS
- 🧪 **Testing Ready** - Jest and React Testing Library configured
- �� **Responsive Design** - Works on all devices

## Tech Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **Authentication**: NextAuth.js v5 (beta)
- **UI Components**: shadcn/ui with Radix UI
- **Styling**: Tailwind CSS v4
- **Charts**: Recharts
- **API Integration**: WooCommerce REST API
- **Testing**: Jest + React Testing Library
- **TypeScript**: Full type safety

## Getting Started

### Prerequisites

- Node.js 20+ installed
- WooCommerce store with API credentials

### Installation

1. Clone the repository:
```bash
git clone https://github.com/marcuswd/mais-sabor-seller.git
cd mais-sabor-seller
```

2. Install dependencies:
```bash
npm install
```

3. Copy the environment file and configure it:
```bash
cp .env.example .env.local
```

4. Update `.env.local` with your credentials:
```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here-change-in-production

WOOCOMMERCE_URL=https://your-store.com
WOOCOMMERCE_CONSUMER_KEY=ck_your_consumer_key_here
WOOCOMMERCE_CONSUMER_SECRET=cs_your_consumer_secret_here
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Demo Credentials

For testing purposes, use these credentials:
- **Email**: seller@example.com
- **Password**: password

## Testing

Run the test suite:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

Generate coverage report:
```bash
npm run test:coverage
```

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── auth/          # NextAuth API routes
│   │   ├── dashboard/         # Dashboard pages
│   │   │   ├── clients/       # Customer management
│   │   │   ├── orders/        # Order management
│   │   │   │   └── new/       # Create new order
│   │   │   ├── layout.tsx     # Dashboard layout with sidebar
│   │   │   └── page.tsx       # Main dashboard
│   │   ├── login/             # Login page
│   │   └── layout.tsx         # Root layout
│   ├── components/
│   │   └── ui/                # shadcn/ui components
│   └── lib/
│       ├── auth.ts            # NextAuth configuration
│       ├── utils.ts           # Utility functions
│       └── woocommerce.ts     # WooCommerce API client
├── components.json            # shadcn/ui configuration
├── jest.config.ts             # Jest configuration
└── package.json
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate test coverage

## WooCommerce Integration

The dashboard integrates with WooCommerce using the REST API v3. To configure:

1. Generate API keys in WooCommerce (WooCommerce > Settings > Advanced > REST API)
2. Add the credentials to `.env.local`
3. The API client is configured in `src/lib/woocommerce.ts`

## shadcn/ui Components

This project uses shadcn/ui components. The components are located in `src/components/ui/` and can be tested using the configured Jest setup.

Currently included components:
- Button
- Card
- Input
- Label
- Badge

To add more components, you can manually create them in the `src/components/ui/` directory following the shadcn/ui patterns.

## Authentication

The project uses NextAuth.js v5 with credentials provider. In production:

1. Change the `NEXTAUTH_SECRET` to a strong random value
2. Implement proper user authentication against your database
3. Consider adding additional providers (Google, GitHub, etc.)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT
