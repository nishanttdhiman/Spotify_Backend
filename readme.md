# Spotify-Backend-Clone

A secure, RESTful API providing the core infrastructure for a music streaming platform, featuring role-based access and JWT-secured authentication.

---

### **Core Implementation**

#### **1. Authentication & Security**

- **User Registration:** Secure onboarding with **Bcrypt password hashing** before database storage.
- **JWT Authorization:** Stateless authentication using **JSON Web Tokens** issued upon registration and login.
- **Secure Login:** Credential verification against hashed records to grant access.

#### **2. Role-Based Access Control (RBAC)**

- **User (Default):** Assigned automatically upon registration; allows access to standard streaming features.
- **Artist:** A specialized role with elevated permissions to **create and upload** music files to the platform.
- **Middleware Protection:** Implementation of custom middleware to verify tokens and validate roles before executing sensitive controllers.

---

### **Tech Stack**

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (Mongoose)
- **Security:** JWT, Bcrypt

---

### **API Overview**

| Method | Endpoint             | Role       | Description                         |
| :----- | :------------------- | :--------- | :---------------------------------- |
| `POST` | `/api/auth/register` | Public     | Registers user + returns JWT        |
| `POST` | `/api/auth/login`    | Public     | Validates credentials + returns JWT |
| `POST` | `/api/music/upload`  | **Artist** | Uploads music files to the DB       |

---

### **Installation**

Follow these steps to set up the project locally:

1. **Clone the Repository**

   ```bash
   git clone <your-repo-link-here>
   cd spotify-backend-clone
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory and add your credentials:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Run the Application**
   - **For Development (with Nodemon):**
     ```bash
     npm run dev
     ```
   - **For Production:**
     ```bash
     npm start
     ```

5. **Test the API**
   Use Postman or Insomnia to test the endpoints at `http://localhost:5000/api`.
