# Career Link - Job Portal

A fullstack job portal application where users can apply for jobs (applicants) or post jobs (issuers).

## Tech Stack

### Backend
- Node.js + Express
- Prisma ORM with SQLite
- JWT Authentication
- bcryptjs for password hashing

### Frontend
- React 19
- React Router
- Tailwind CSS
- Vite

## Project Structure

```
Career Link/
├── Backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js
│   │   ├── controllers/
│   │   │   └── authController.js
│   │   ├── middleware/
│   │   │   └── auth.js
│   │   ├── routes/
│   │   │   └── authRoutes.js
│   │   ├── utils/
│   │   │   └── jwt.js
│   │   └── server.js
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── migrations/
│   └── package.json
│
└── Frontend/
    ├── src/
    │   ├── components/
    │   │   └── Navbar.jsx
    │   ├── context/
    │   │   └── AuthContext.jsx
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── SignIn.jsx
    │   │   └── SignUp.jsx
    │   ├── services/
    │   │   └── api.js
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    └── package.json
```

## Setup Instructions

### Backend Setup

1. Navigate to the Backend directory:
```bash
cd Backend
```

2. Install dependencies:
```bash
npm install
```

3. Generate Prisma Client:
```bash
npm run prisma:generate
```

4. Run database migrations:
```bash
npm run prisma:migrate
```

5. Start the development server:
```bash
npm run dev
```

The backend server will run on `http://localhost:4000`

### Frontend Setup

1. Navigate to the Frontend directory:
```bash
cd Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Create a new user account
- `POST /api/auth/login` - Login with email and password
- `GET /api/auth/me` - Get current user (requires authentication)

### Health Check
- `GET /api/health` - Check server status

## Features

- ✅ User authentication with JWT
- ✅ Role-based system (Applicant/Issuer)
- ✅ Modern UI with Tailwind CSS
- ✅ Responsive design
- ✅ Secure password hashing
- ✅ Protected routes

## Environment Variables

### Backend (.env)
```
DATABASE_URL="file:./dev.db"
JWT_SECRET="your-super-secret-jwt-key-change-in-production"
PORT=4000
```

## License

ISC

