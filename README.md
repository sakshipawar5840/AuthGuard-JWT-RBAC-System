# JWT & RBAC Secure Application

A full-stack application demonstrating JWT-based authentication and Role-Based Access Control (RBAC).

## Features

- **Authentication**: Secure Login and Registration using JWT.
- **Authorization**: Role-based access (USER and ADMIN).
- **Security**: Password hashing with BCrypt, Protected API routes.
- **Frontend**: React with Tailwind CSS, Framer Motion, and React Query.
- **Backend**: Node.js/Express with TypeScript.

## API Endpoints

- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Login and receive a JWT token.
- `GET /api/public`: Publicly accessible content.
- `GET /api/user`: Content for USER and ADMIN roles.
- `GET /api/admin`: Exclusive content for ADMIN role.

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Lucide Icons, React Query, Framer Motion.
- **Backend**: Node.js, Express, TypeScript, JWT, BCrypt.
- **Database**: In-memory repository (can be extended to PostgreSQL/MongoDB).

## Setup

1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Access the app at `http://localhost:3000`

   ## Demo Credentials

### Admin Login
Email: admin@example.com
Password: password123

### User Login
Email: user@example.com
Password: password123                                                                                                                                                    
## Screenshots

### Login Page
![Login](screenshots/login.png)

### Register Page
![Register](screenshots/register.png)

### User Dashboard
![User](screenshots/user-dashboard.png)

### Admin Dashboard
![Admin](screenshots/admin-dashboard.png)
