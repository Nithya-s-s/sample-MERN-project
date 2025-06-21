# 📚 Sample MERN Project

Welcome to my **sample MERN (MongoDB, Express, React, Node.js)** project, built as a part of my learning journey. This simple full-stack application features:

- A form that collects user information
- Display of stored user data fetched from MongoDB

This project serves as an educational example for understanding how the MERN stack works end-to-end.

---

## 🌟 Features

- ✍️ Form to input and submit user data
- 📄 Display of all submitted entries from the database
- 🔁 Frontend-backend communication using REST APIs
- 💾 Data persistence using MongoDB

---

## 🛠 Tech Stack

| Layer      | Technology         |
|------------|--------------------|
| Frontend   | React.js           |
| Backend    | Node.js, Express.js|
| Database   | MongoDB + Mongoose |
| API Client | Axios              |

---

## 📁 Folder Structure

sample-MERN-project/
├── client/ # React frontend
│ ├── src/
│ │ ├── components/
│ │ │ └── Form.js
│ │ │ └── Display.js
│ │ └── App.js
│ └── package.json
├── server/ # Node + Express backend
│ ├── models/
│ │ └── User.js
│ ├── routes/
│ │ └── userRoutes.js
│ ├── server.js
│ └── package.json
