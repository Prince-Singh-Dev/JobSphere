# JobSphere – Full Stack Job Portal with Admin Dashboard

A modern full-stack Job Portal platform where recruiters can post jobs, applicants can apply seamlessly, and admins can manage the entire system efficiently.  
Built with secure authentication, responsive UI, role-based access, and powerful admin controls.  
Designed to simulate a real-world hiring ecosystem with clean user experience and scalable architecture.

---

# 📌 About The Project

**JobSphere** is a complete recruitment management platform that connects **job seekers**, **recruiters**, and **administrators** in one centralized system.

The platform allows users to explore job opportunities, apply online, track applications, and manage profiles, while recruiters and admins can efficiently handle postings, applicants, and platform activities through a dedicated dashboard.

---

# ✨ Features

## 👨‍💼 User Features
- User Authentication & Authorization
- Create & Update Profile
- Browse & Search Jobs
- Apply for Jobs
- Track Applied Jobs
- Upload Resume/Profile Details
- Responsive User Dashboard

## 🏢 Recruiter Features
- Post New Jobs
- Edit/Delete Job Listings
- View Applicants
- Manage Company Information

## 🛠️ Admin Panel Features
- Manage Users
- Manage Recruiters
- Manage Jobs
- Monitor Applications
- Dashboard Analytics
- Secure Admin Access

---

# 🧑‍💻 Tech Stack

## Frontend
- React.js
- Tailwind CSS
- Axios
- React Router DOM

## Backend
- Node.js
- Express.js

## Database
- MongoDB

## Authentication
- JWT Authentication
- Cookies / Sessions

---

# 📂 Project Structure

```bash
JobSphere/
│── client/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── redux/
│   └── utils/
│
│── server/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   └── utils/
│
│── README.md
│── package.json
```

---

# 🚀 Installation & Setup

## Clone Repository

```bash
git clone https://github.com/Prince-Singh-Dev/jobsphere.git
```

## Move Into Project Directory

```bash
cd jobsphere
```

## Install Dependencies

### Frontend

```bash
cd client
npm install
```

### Backend

```bash
cd server
npm install
```

---

# ⚙️ Environment Variables

Create a `.env` file inside the server folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
```

---

#  Run The Project

## Start Backend

```bash
cd server
npm run dev
```

## Start Frontend

```bash
cd client
npm run dev
```

---

#  Modules Included

- Authentication System
- Job Management
- Admin Dashboard
- Application Tracking
- Role-Based Access Control
- REST APIs
- Responsive Design

---

#  Future Improvements

- Resume Parsing
- AI Job Recommendations
- Real-Time Notifications
- Interview Scheduling
- Payment Integration
- Email Verification

---

# 🤝 Contributing

Contributions are welcome.  
Feel free to fork the repository and submit pull requests.

---

# ⭐ Support

If you like this project, give it a ⭐ on GitHub and support the repository.

---

# 📄 License

This project is licensed under the MIT License.
