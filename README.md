## Screenshots

### Login Page

<img width="1365" height="585" alt="user-dashboard" src="https://github.com/user-attachments/assets/2fcced48-9de1-4197-b468-8515f69bf2b9" />
### User Login
<img width="1346" height="594" alt="register" src="https://github.com/user-attachments/assets/141d2f32-dbb9-4299-a465-d51bb1883a93" />
### User Dashboard
<img width="1360" height="584" alt="login" src="https://github.com/user-attachments/assets/9fad3ddd-4355-4e4a-8ef6-1329dfdb0f14" />
### Admin Dashboard
<img width="1362" height="587" alt="admin-dashboard" src="https://github.com/user-attachments/assets/a9992009-e727-4de8-95a1-a92320f07f4e" />
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

