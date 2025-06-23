# Efandex Dashboard

A modern, responsive admin dashboard built with Next.js 15 for managing property bookings, users, and analytics. This dashboard provides a comprehensive interface for property management platforms with features like user management, booking tracking, revenue analytics, and dispute resolution.

## 🌟 Features

- **📊 Dashboard Analytics**: Real-time statistics and charts for active users, properties, and revenue
- **👥 User Management**: Comprehensive user profiles with guest/host categorization and approval workflows
- **🏨 Property Management**: Property listings with detailed information and status tracking
- **📅 Booking Management**: Complete booking lifecycle management with status tracking
- **💰 Revenue Tracking**: Financial analytics with trend visualization using Recharts
- **⚖️ Dispute Resolution**: Built-in dispute management system
- **🔍 Advanced Search & Filtering**: Quick search and filter capabilities across all modules
- **📱 Responsive Design**: Mobile-first approach with Tailwind CSS
- **🎨 Modern UI**: Built with shadcn/ui components and Radix UI primitives

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Charts**: Recharts
- **State Management**: Zustand
- **Package Manager**: npm

## 📦 Dependencies

### Core Dependencies
- `next`: ^15.3.4 - React framework with App Router
- `react`: ^19.0.0 - React library
- `tailwindcss`: ^4 - Utility-first CSS framework
- `typescript`: ^5 - TypeScript support
- `zustand`: ^5.0.5 - State management
- `recharts`: ^3.0.0 - Chart library

### UI Components
- `@radix-ui/react-avatar`: Avatar components
- `@radix-ui/react-dropdown-menu`: Dropdown menu components
- `@radix-ui/react-slot`: Slot component for composition
- `lucide-react`: Icon library
- `class-variance-authority`: CSS class variance utilities
- `clsx` & `tailwind-merge`: Conditional class name utilities

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Efandex-Dashboard
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── bookings/          # Booking management page
│   ├── disputes/          # Dispute resolution page
│   ├── privacy/           # Privacy policy page
│   ├── properties/        # Property management page
│   ├── settings/          # Settings page
│   ├── users/             # User management page
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Dashboard home page
├── components/            # Reusable React components
│   ├── dashboard/         # Dashboard-specific components
│   │   ├── bookings-table.tsx
│   │   ├── stats-cards.tsx
│   │   └── user-registrations.tsx
│   ├── layout/            # Layout components
│   │   ├── header.tsx
│   │   └── sidebar.tsx
│   └── ui/                # shadcn/ui components
├── lib/                   # Utility functions and types
│   ├── types.ts           # TypeScript type definitions
│   └── utils.ts           # Utility functions
├── mock/                  # Mock data for development
├── store/                 # Zustand state management
└── public/                # Static assets
```

## 🎯 Key Components

### Dashboard Features
- **Stats Cards**: Display key metrics (active users, properties, revenue)
- **Bookings Table**: Comprehensive booking management with filtering
- **User Registrations**: User management with approval workflows
- **Revenue Charts**: Visual representation of financial data

### Pages
- **Dashboard**: Main analytics and overview page
- **Users**: User management with guest/host categorization
- **Properties**: Property listings and management
- **Bookings**: Booking lifecycle management
- **Disputes**: Dispute resolution system
- **Settings**: Application configuration

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## 🎨 Customization

The dashboard uses Tailwind CSS for styling and shadcn/ui for components. You can customize:

- **Colors**: Modify the color palette in `tailwind.config.js`
- **Components**: Extend or modify components in the `components/ui` directory
- **Layout**: Adjust the layout structure in `components/layout`
- **Data**: Replace mock data in `mock/data.ts` with real API calls

## 📊 State Management

The application uses Zustand for state management with the following stores:
- **Dashboard Store**: Manages dashboard state, search queries, pagination, and filters

## 🔐 Data Types

Key TypeScript interfaces:
- `User`: User profile information with guest/host roles
- `Booking`: Booking details with status tracking
- `DashboardStats`: Analytics and metrics data
- `Property`: Property information and details

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new):

1. Push your code to a Git repository
2. Import the project to Vercel
3. Configure environment variables if needed
4. Deploy with automatic builds

### Other Deployment Options

- **Netlify**: Connect your Git repository and deploy
- **AWS Amplify**: Use AWS for hosting and CI/CD
- **Docker**: Containerize the application for any platform

## 🛡️ Best Practices

- **TypeScript**: Fully typed for better development experience
- **Component Architecture**: Modular and reusable components
- **Performance**: Optimized with Next.js 15 features
- **Accessibility**: Built with accessible Radix UI components
- **Responsive Design**: Mobile-first approach

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support and questions, please open an issue in the repository or contact the development team.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
