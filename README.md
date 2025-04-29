# Futsal Opponent Matcher

A full-stack Next.js application for connecting futsal players and teams.

## Features

- User authentication and profile management
- Matchmaking system for finding opponents and teammates
- Location-based venue discovery
- Real-time chat with file sharing and reactions
- Match scheduling and management
- Feedback and rating system
- Notifications for matches, messages, and updates

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, MongoDB Atlas
- **Authentication**: NextAuth.js
- **Real-time Communication**: Socket.io
- **Database**: MongoDB Atlas
- **Styling**: Tailwind CSS, shadcn/ui components

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- MongoDB Atlas account

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/futsal-opponent-matcher.git
   cd futsal-opponent-matcher
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Create a `.env.local` file in the root directory with the following variables:
   \`\`\`
   MONGODB_URI=your_mongodb_atlas_connection_string
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret
   \`\`\`

4. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Database Setup

1. Create a MongoDB Atlas cluster.
2. Create a database named `futsal_matcher`.
3. The application will automatically create the necessary collections and indexes on startup.

## Project Structure

- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable React components
- `contexts/` - React context providers
- `hooks/` - Custom React hooks
- `lib/` - Utility functions and database helpers
- `public/` - Static assets
- `scripts/` - Database scripts and utilities

## API Routes

- `/api/auth/*` - Authentication endpoints (NextAuth.js)
- `/api/users` - User management
- `/api/matches` - Match creation and management
- `/api/chats` - Chat management
- `/api/messages` - Message handling
- `/api/feedback` - Feedback and ratings
- `/api/notifications` - User notifications
- `/api/venues` - Futsal venue management
- `/api/socket` - Socket.io endpoint for real-time communication

## Deployment

This application can be deployed on Vercel:

1. Push your code to a GitHub repository.
2. Create a new project on Vercel and import your repository.
3. Configure the environment variables in the Vercel dashboard.
4. Deploy the application.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
