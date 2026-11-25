# EVENTORA — Event Management System

An intermediate-level frontend project built with React and Vite. It includes separate Admin and User experiences, LocalStorage-based demo authentication, event CRUD, event search/filtering, and event registration.

## Run locally

1. Install Node.js (LTS): https://nodejs.org/
2. Open this folder in VS Code.
3. Open Terminal and run:

```bash
npm install
npm run dev
```

4. Open the local URL printed by Vite (usually http://localhost:5173).

## Demo accounts

- **Admin:** `admin@eventora.com` / `Admin@123`
- **User:** Create an account through Sign up.

The demo admin account is seeded automatically on first load.

## Features

### Public
- Responsive landing page and event discovery
- Search by event title or venue
- Category filters
- Event details and available seat count

### User
- Sign up, log in and log out
- Register for events
- View and cancel own registrations
- User dashboard

### Admin
- Dashboard statistics
- Create, edit and delete events
- View registered participants

## Deployment to Vercel

1. Push this project to a GitHub repository.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the GitHub repository.
4. Vercel should detect Vite automatically.
5. Build command: `npm run build`
6. Output directory: `dist`
7. Click **Deploy**. `vercel.json` is included for React Router deep links.

## Important academic/demo limitation

Authentication and application data use browser LocalStorage because this is a frontend-only assignment. LocalStorage is not secure authentication: passwords are stored in the browser and data is isolated to that browser/device. Do not use this approach for real users, sensitive data, or production payments. A real deployment shared by multiple users needs a backend, database, and secure authentication service.

## DTI / Design Thinking review

See `docs/DTI-LINKEDIN-ARTICLE.md` for a ready-to-edit LinkedIn article and project review.
