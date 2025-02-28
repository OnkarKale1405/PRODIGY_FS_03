# E-Commerce Website

## Overview
This project implements an **E-Commerce Website** where users can browse products listed with **images**, add them to the **cart**, and proceed to payment using **Razorpay**. The system uses **JWT-based authentication** to secure endpoints and **email verification** for user registration. The application ensures security, scalability, and a responsive user experience.

## Features
- Secure user authentication with **JWT (JSON Web Tokens)**
- Product listing with **images and descriptions**
- Cart functionality to **add, remove** items
- Payment gateway integration with **Razorpay**
- **Email verification** through email service
- Protected routes for authorized users only
- Responsive UI with **Tailwind CSS**
- Backend API built with **Node.js and Express**

## Screenshots

## Technologies Used
- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express
- **Authentication:** JSON Web Tokens (JWT)
- **Payment Gateway:** Razorpay
- **Email Service:** Nodemailer, mailgen

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/OnkarKale1405/PRODIGY_FS_03.git
   cd PRODIGY_FS_03
   ```

2. Install dependencies:
   ```bash
   # Frontend
   cd frontend
   npm install

   # Backend
   cd backend
   npm install
   ```

3. Environment Variables:
   - Create a `.env` file in the `backend` directory with the following content:
     ```env
      PORT = 4200
      MONGODB_URI =
      SECRET_KEY = 
     ```

4. Run the application:
   ```bash
   # Backend
   cd backend
   node e_commerce_backened.js

   # Frontend
   cd frontend
   npm run dev
   ```

5. Visit the app at `http://localhost:5173`

## Contributing
Contributions are welcome! Feel free to submit a pull request or report issues.

## Contact
- Email: onkarkale0007@gmail.com
- GitHub: [OnkarKale1405](https://github.com/OnkarKale1405)
