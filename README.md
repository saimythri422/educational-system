# 🎓 Mythri Educational Institute - Full Stack Educational Management System

A complete Full Stack Web Application developed with **HTML5, CSS3, JavaScript, React.js, Node.js, Express.js, and MySQL**.

---

## 📋 Table of Contents
1. [Project Overview](#-project-overview)
2. [Tech Stack](#-tech-stack)
3. [Project Structure](#-project-structure)
4. [Prerequisites & Installation](#-prerequisites--installation)
5. [Database Setup (MySQL)](#-database-setup-mysql)
6. [Running the Application](#-running-the-application)
   - [Running the Express Backend](#1-running-the-backend-server)
   - [Running the React Frontend](#2-running-the-react-frontend)
   - [Running the Static HTML/CSS/JS Frontend](#3-running-the-static-frontend)
7. [Git & GitHub Submission Guide (Step-by-Step for 10 Marks)](#-git--github-submission-guide)
   - [Branching & Merging Demonstration](#demonstrating-branch-merge-to-main)
   - [Adding Collaborators (Friends & Palagiri Uma 477)](#adding-collaborators-on-github)
   - [Taking the Screenshot for Submission](#taking-the-screenshot-for-submission)
8. [API Endpoints Reference](#-api-endpoints-reference)

---

## 🌟 Project Overview
The Mythri Educational Institute system provides an interactive portal for students to explore diverse educational courses, search and filter by domain, and submit online admission enquiries.

### Key Features:
- **Responsive Navigation & Hero Section**: Brand showcase with quick CTAs.
- **Dynamic Course Catalog**: Filter courses by category (*Engineering, Computer, Science, Commerce*) or search dynamically by keyword.
- **Admission Enquiry Form**: Client-side and server-side validation with instant status feedback.
- **RESTful API Backend**: Powered by Express.js with robust error handling and fallback capabilities.
- **Relational Database**: MySQL schema with tables for `courses`, `enquiries`, and `students`.

---

## 💻 Tech Stack
- **Frontend 1 (Static)**: HTML5, CSS3, Vanilla JavaScript (`educationalsystem.html`)
- **Frontend 2 (Single Page App)**: React.js (Vite), Modern Components, CSS Flexbox & Grid (`client/`)
- **Backend**: Node.js, Express.js, CORS, Dotenv (`server/`)
- **Database**: MySQL, `mysql2/promise` (`server/database/schema.sql`)
- **Version Control**: Git & GitHub with multiple branches and `.gitignore` module exclusion

---

## 📁 Project Structure

```text
educational/
│
├── .gitignore                   # Excludes node_modules, .env, build, and temporary files
├── README.md                    # Detailed documentation and lab submission guide
├── educationalsystem.html       # Static FE Website (HTML5, CSS3, JS)
│
├── client/                      # Modern React.js Frontend
│   ├── public/
│   │   └── favicon / assets
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx       # Header with navigation & mobile toggle
│   │   │   ├── Hero.jsx         # Hero banner with call to action
│   │   │   ├── Stats.jsx        # Key institute metrics
│   │   │   ├── CourseCard.jsx   # Individual course display
│   │   │   ├── CourseList.jsx   # Filterable and searchable course grid
│   │   │   ├── About.jsx        # About Us & institutional strengths
│   │   │   ├── EnquiryForm.jsx  # Admission enquiry form with API submission
│   │   │   └── Footer.jsx       # Institutional footer & copyright
│   │   ├── App.jsx              # Main React application component
│   │   ├── App.css              # Component styling
│   │   ├── index.css            # Global CSS variables & typography
│   │   └── main.jsx             # React DOM entry point
│   ├── index.html               # React HTML template
│   ├── package.json             # React dependencies & scripts
│   └── vite.config.js           # Vite development server & API proxy
│
└── server/                      # Node.js + Express.js REST API Backend
    ├── config/
    │   └── db.js                # MySQL connection pool configuration
    ├── controllers/
    │   ├── courseController.js  # Course data handling & fallback seed
    │   └── enquiryController.js # Enquiry submission & validation
    ├── database/
    │   └── schema.sql           # MySQL database schema & sample data
    ├── routes/
    │   ├── courseRoutes.js      # Routes for /api/courses
    │   └── enquiryRoutes.js     # Routes for /api/enquiries
    ├── .env.example             # Environment variable template
    ├── package.json             # Express dependencies & scripts
    └── server.js                # Express app entry point & listener
```

---

## ⚙️ Prerequisites & Installation

### 1. Verify Node.js & npm
Node.js and npm must be installed:
```powershell
node --version   # v24.x or higher
npm --version    # v11.x or higher
```

### 2. Install Dependencies
Install server dependencies:
```powershell
cd server
npm install
cd ..
```

Install client dependencies:
```powershell
cd client
npm install
cd ..
```

---

## 🗄️ Database Setup (MySQL)

1. Open your MySQL client (MySQL Workbench, phpMyAdmin, or Command Line):
```powershell
mysql -u root -p
```
2. Run the script located in `server/database/schema.sql`:
```sql
SOURCE c:/Users/Mythri/OneDrive/Desktop/FSD/educational/server/database/schema.sql;
```
3. Configure your database credentials in `server/.env`:
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=educational_system
DB_PORT=3306
```

*(Note: The server includes an automatic fallback mode, so if MySQL is temporarily offline, the API continues to respond gracefully with demo data).*

---

## 🚀 Running the Application

### 1. Running the Backend Server
From the root folder:
```powershell
cd server
npm start
```
The Express server will start at: `http://localhost:5000`

### 2. Running the React Frontend
In a new terminal window:
```powershell
cd client
npm run dev
```
The React application will open at: `http://localhost:3000`

### 3. Running the Static Frontend
You can double-click `educationalsystem.html` to open it in any browser, or view it served by the Express server at `http://localhost:5000/`.

---

## 🐙 Git & GitHub Submission Guide

Follow these exact steps to satisfy all requirements from the assignment.

### 1. Initializing Git Repository
From the root project folder (`educational`):
```powershell
git init
git checkout -b main
```

### 2. Checking `.gitignore`
Make sure `node_modules` is excluded:
```powershell
git status
```
*(Notice that `node_modules/` is grayed out / not tracked, satisfying requirement 3).*

### 3. Creating Commits & Feature Branches (Requirement 2 & 3)

#### Step 3A: Commit on `main`
```powershell
git add .
git commit -m "feat: initial commit with full stack educational system"
```

#### Step 3B: Create and work on a Feature Branch (e.g. `frontend-react`)
```powershell
git checkout -b frontend-react
git status
git commit --allow-empty -m "feat: complete React components for courses and admission form"
```

#### Step 3C: Create Backend Branch (e.g. `backend-api`)
```powershell
git checkout -b backend-api
git commit --allow-empty -m "feat: add Express REST API and MySQL schema"
```

#### Step 3D: Demonstrating Branch Merge to `main` (Requirement 2)
Switch back to `main` and merge your feature branches:
```powershell
git checkout main
git merge frontend-react -m "merge: integrate frontend-react branch into main"
git merge backend-api -m "merge: integrate backend-api branch into main"
```

### 4. Pushing to GitHub

1. Go to [GitHub](https://github.com/) and click **New Repository**.
2. Name the repository: `educational-system` (or `Mythri-Educational-Institute`).
3. Leave it Public (or Private as per lab instructions). Do **not** check "Initialize with README" since you already have one.
4. Link your remote repository and push all branches:
```powershell
git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/educational-system.git
git push -u origin main
git push --all origin
```

---

## 👥 Adding Collaborators on GitHub (Requirement 5)

As instructed: *"while pushing the code into GitHub you have to collab your friends and to me (Palagiri Uma 477)"*:

1. Open your repository on GitHub in your browser.
2. Click on the **Settings** tab (gear icon at the top right of the repo page).
3. In the left sidebar, click on **Collaborators** (under "Access").
4. Click the green button **"Add people"**.
5. In the search box, search for:
   - **`palagiri-uma-477`** (or mam's exact username: `palagiri-uma477`)
   - Your friends' GitHub usernames.
6. Click **"Add `<username>` to this repository"**.
7. They will receive an invitation to collaborate.

---

## 📸 Taking the Screenshot for Submission (Requirement 4 - 10 Marks)

1. Navigate to your GitHub repository main page (`https://github.com/<your-username>/educational-system`).
2. Click on the **Branch selector dropdown** (where it says `main`) so that the dropdown shows multiple branches (`main`, `frontend-react`, `backend-api`).
3. Press **`Windows Key + Shift + S`** (or `PrtScn`) on Windows.
4. Capture the full browser window showing:
   - Your repository name and files (`client`, `server`, `educationalsystem.html`, `.gitignore`, `README.md`).
   - The branch dropdown showing the merged branches.
   - The commit history showing commits and merges.
5. Save the screenshot image and send it to **mam (Palagiri Uma)** to receive your **10 Marks**!

---

## 📡 API Endpoints Reference

| Method | Endpoint | Description | Sample Payload / Params |
|--------|----------|-------------|-------------------------|
| `GET` | `/api/health` | Service health status | None |
| `GET` | `/api/courses` | Retrieve all available courses | None |
| `GET` | `/api/courses/:id` | Retrieve single course details | `:id` (e.g. `1`) |
| `POST` | `/api/courses` | Create a new course entry | `{ name, category, description, duration, fee, emoji }` |
| `GET` | `/api/enquiries` | Fetch all student admission enquiries | None |
| `POST` | `/api/enquiries` | Submit student admission enquiry | `{ studentName, email, phone, courseName, message }` |
