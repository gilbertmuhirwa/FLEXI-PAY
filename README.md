# Flexi-Pay

**Flexi-Pay** is a full-stack payment platform that allows users to manage payments through a flexible system. It includes a backend built with **Node.js** and **Express**, and a frontend built with **React**. This project supports various payment methods and allows users to view payment plans, manage transactions, and authenticate securely.

## Features

- **User Authentication**: Secure login and registration using JSON Web Tokens (JWT).
- **Payment Processing**: Users can select payment plans and process transactions.
- **Multiple Payment Methods**: Supports flexible payment methods such as credit cards, mobile money, and cryptocurrency.
- **Balance Management**: View and update user balances.
- **Responsive Frontend**: Built with React for a smooth user experience.

## Project Structure

### Backend

```bash
backend/
├── controllers/       # Business logic for requests (e.g., payment, auth)
│   ├── authController.js
│   └── paymentController.js
├── models/            # Database schemas for users, payments, etc.
│   ├── User.js
│   └── PaymentPlan.js
├── routes/            # Routes to handle different API requests
│   ├── authRoutes.js
│   └── paymentRoutes.js
├── config/            # Configuration files (e.g., database connection)
│   └── db.js
├── middleware/        # Custom middlewares (e.g., auth, error handling)
│   └── authMiddleware.js
├── .env               # Environment variables (e.g., JWT_SECRET, DB_URI)
├── server.js          # Entry point to start the server
└── package.json       # Dependencies and scripts
###frontend
frontend/
├── public/            # Static files (HTML, images, etc.)
├── src/
│   ├── components/    # Reusable UI components (e.g., Navbar, Footer)
│   │   ├── Navbar.js
│   │   └── Footer.js
│   ├── pages/         # Main pages (e.g., Home, Login, Payment)
│   │   ├── Home.js
│   │   ├── Login.js
│   │   └── Payment.js
│   ├── services/      # API service to interact with backend
│   │   └── api.js
│   ├── App.js         # Main App entry
│   ├── index.js       # Entry point to render the app
│   └── App.css        # Global CSS
└── package.json       # Dependencies and scripts
