# 🐦 Twitter Clone

A full-stack Twitter clone web application that replicates core Twitter features including tweeting, liking, following, and more. Built to demonstrate modern web development skills using the MERN (MongoDB, Express, React, Node.js) stack.

## ✨ Features

- 🔐 User authentication (JWT-based)
- 📝 Create, edit, and delete tweets
- ❤️ Like and reply to tweets
- 👥 Follow/unfollow users
- 🏠 Personalized feed from followed accounts
- 🔍 Explore public tweets
- 🖼️ Upload profile pictures and banners (optional)
- 📱 Fully responsive design

## 🛠 Tech Stack

### Frontend
- React
- TailwindCSS
- Axios
- React Router

### Backend
- Node.js
- Express
- MongoDB (Mongoose)
- JSON Web Tokens (JWT)
- Bcrypt for password hashing

### Deployment
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

## 🚀 Getting Started

### Clone the repository
```bash
git clone https://github.com/your-username/twitter-clone.git
cd twitter-clone

## backend setup
cd backend
npm install
# Create a .env file with your MongoDB URI and JWT secret
npm run dev

## frontend setup
cd ../client
npm install
npm start

## Folder structure
twitter-clone/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── ...
├── client/
│   ├── src/
│   ├── public/
│   └── ...
