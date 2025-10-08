# Portfolio Website Link: https://portfolio-project-client.vercel.app

## Project Overview

This is a **full-stack portfolio website** that showcases personal information, skills, projects, and blogs — all managed through an integrated dashboard. The frontend is built with **Next.js** and **TypeScript**, featuring a modern UI using **Shadcn/UI**. The backend is powered by **Node.js**, **Express**, and **PostgreSQL** with **Prisma ORM** for database management.

The portfolio not only serves as a personal showcase but also includes a **blog management system** where authenticated users can create, edit, and delete blog posts through the dashboard.

---

## Features

###  **Frontend**

* Interactive and responsive portfolio layout
* Dedicated sections for **About**, **Skills**, **Projects**, and **Contact**
* **Dashboard page** for authenticated users
* **Blog creation and management system** (Create, Update, Delete blogs)
* Secure authentication system using **NextAuth**
* Modern and clean UI design powered by **Shadcn/UI** components

### **Backend**

* RESTful API built with **Express.js**
* Data stored and managed in **PostgreSQL**
* **Prisma ORM** for schema management and queries
* **JWT authentication** for secure data access
* **Bcrypt.js** for password hashing
* Fully structured with modular and scalable code

---

## Technology Stack

**Frontend:**

* Next.js
* TypeScript
* Shadcn/UI
* React
* NextAuth

**Backend:**

* Node.js
* Express.js
* PostgreSQL
* Prisma ORM
* JWT
* Bcrypt.js

---

## ⚡ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/your-portfolio.git
cd your-portfolio
```

### 2️⃣ Install Dependencies

#### For Frontend

```bash
cd client
npm install
```

#### For Backend

```bash
cd server
npm install
```

### 3️⃣ Environment Variables

Create a `.env` file in both **client** and **server** directories and add the following:

#### Client `.env`

```
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:5000
```

#### Server `.env`

```
DATABASE_URL=postgresql://user:password@localhost:5432/portfolio_db
JWT_SECRET=your_jwt_secret
PORT=5000
```

### 4️Run the Application

#### Start Backend Server

```bash
cd server
npm run dev
```

#### Start Frontend

```bash
cd client
npm run dev
```

Your portfolio will be live at:
 **[http://localhost:3000](http://localhost:3000)**

---

## Additional Notes

* The dashboard is only accessible after login.
* You can customize the **project showcase** and **blog structure** as needed.
* Prisma migrations can be run using:

  ```bash
  npx prisma migrate dev
  ```
* To view or manage the database visually, run:

  ```bash
  npx prisma studio
  ```

---

### Future Enhancements

* Add dark/light theme toggle
* Blog comments section
* Admin role for user management
* Image upload for projects and blog posts

---

**Author:** Nahida Akther
**Stack:** MERN + Next.js + Prisma
**Purpose:** Showcasing portfolio, projects, and blog management system
