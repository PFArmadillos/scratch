# Subscription Tracker

A full-stack web application that helps users track and manage their subscriptions, featuring automated payment reminders and trial period tracking.

## 🌟 Features

- **Google OAuth Authentication**: Secure user authentication using Google Sign-In
- **Subscription Management**:
  - Add and track multiple subscriptions
  - Set billing cycles and payment dates
  - Categorize subscriptions for better organization
  - Monitor subscription status
- **Payment Reminders**:
  - Automated email notifications for upcoming payments
  - Customizable notification settings
  - Detailed payment summaries
- **Trial Period Tracking**: Keep track of free trial periods to avoid unwanted charges
- **User Dashboard**: Comprehensive view of all active subscriptions and trials

## 🛠️ Technology Stack

### Backend

- Node.js with Express.js
- MongoDB with Mongoose ODM
- Passport.js for authentication
- Nodemailer for email notifications
- Node-cron for scheduled tasks

### Frontend

- React (Vite)
- Tailwind CSS

## 📋 Prerequisites

Before running this application, make sure you have:

- Node.js (v14 or higher)
- MongoDB installed and running
- Google OAuth credentials
- SMTP server credentials for email notifications

## ⚙️ Environment Variables

Create a `.env` file in the root directory with the following variables:

```
PORT=3000
MONGODB_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
SESSION_SECRET=your_session_secret
SMTP_HOST=your_smtp_host
SMTP_PORT=your_smtp_port
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
```

## 🚀 Installation & Setup

1. Clone the repository:

```bash
git clone [repository-url]
cd subscription-tracker
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. The server will run on `http://localhost:3000` and the frontend on `http://localhost:5173`

## 🏗️ Project Structure

```
subscription-tracker/
├── server.js           # Express server configuration
├── auth.js            # Authentication setup and routes
├── notifs.js          # Email notification service
├── models/            # Database models
├── routes/            # API routes
└── controllers/       # Route controllers
```

## 🔒 Authentication Flow

1. User initiates Google Sign-In
2. On successful authentication:
   - Creates/updates auth user record
   - Links to subscription user profile
   - Establishes session
3. Subsequent requests use session authentication

## 📨 Notification System

- Checks for upcoming payments every 2 minutes
- Sends email notifications 3 days before payment due
- Includes detailed payment information and subscription summary
- Automatically updates next payment dates
- Logs all notification events

## 🛣️ API Routes

### Authentication

- `GET /auth/google` - Initiate Google OAuth
- `GET /auth/google/callback` - OAuth callback
- `GET /auth/logout` - User logout
- `GET /auth/status` - Check authentication status

### User & Subscriptions

- `GET /user/:_id` - Get user profile with subscriptions and trials
- `POST /subscription` - Create new subscription
- `PUT /subscription/:_id` - Update subscription
- `DELETE /subscription/:_id` - Delete subscription
