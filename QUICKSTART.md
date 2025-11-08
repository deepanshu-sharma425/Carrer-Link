# Quick Start Guide

## Prerequisites
- Node.js (v18 or higher)
- npm

## Running the Application

### Option 1: Run Backend and Frontend Separately

#### Backend (Terminal 1)
```bash
cd Backend
npm install
npm run prisma:generate
npm run prisma:migrate
npm run dev
```
Backend will run on: http://localhost:4000

#### Frontend (Terminal 2)
```bash
cd Frontend
npm install
npm run dev
```
Frontend will run on: http://localhost:5173

### Option 2: Using npm scripts (if you add them to root)

You can also run both from the root directory by adding scripts to a root package.json, but for now, use two terminals.

## Testing the Application

1. Open http://localhost:5173 in your browser
2. Click "Sign Up" to create an account
3. Choose your role:
   - **Applicant**: For job seekers
   - **Issuer**: For employers posting jobs
4. Fill in your details and sign up
5. You'll be automatically logged in
6. Try logging out and signing in again

## API Testing

You can test the API endpoints using curl or Postman:

### Sign Up
```bash
curl -X POST http://localhost:4000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "role": "applicant"
  }'
```

### Sign In
```bash
curl -X POST http://localhost:4000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Get Current User (requires token)
```bash
curl -X GET http://localhost:4000/api/auth/me \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

## Database Management

### View Database
```bash
cd Backend
npm run prisma:studio
```
This will open Prisma Studio in your browser where you can view and edit the database.

### Reset Database
```bash
cd Backend
npx prisma migrate reset
```

## Troubleshooting

### Backend Issues
- Make sure `.env` file exists in Backend directory
- Run `npm run prisma:generate` if you see Prisma Client errors
- Check that port 4000 is not already in use

### Frontend Issues
- Make sure backend is running on port 4000
- Clear browser cache if you see old data
- Check browser console for errors

### Database Issues
- Delete `Backend/prisma/dev.db` and run `npm run prisma:migrate` again
- Make sure DATABASE_URL in .env is correct

## Project Structure

```
Career Link/
├── Backend/
│   ├── src/
│   │   ├── config/          # Database configuration
│   │   ├── controllers/     # Route controllers
│   │   ├── middleware/      # Auth middleware
│   │   ├── routes/          # API routes
│   │   ├── utils/           # Utility functions
│   │   └── server.js        # Express server
│   ├── prisma/
│   │   ├── schema.prisma    # Database schema
│   │   └── migrations/      # Database migrations
│   └── package.json
│
└── Frontend/
    ├── src/
    │   ├── components/      # React components
    │   ├── context/         # React Context (Auth)
    │   ├── pages/           # Page components
    │   ├── services/        # API services
    │   └── App.jsx          # Main app component
    └── package.json
```

## Next Steps

- Add job posting functionality for issuers
- Add job application functionality for applicants
- Add job listing page
- Add user profile pages
- Add search and filter functionality

