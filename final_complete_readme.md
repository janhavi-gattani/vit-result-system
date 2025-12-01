# 🎓 VIT Student Result Management System

A full-stack web application for managing student semester results at Vellore Institute of Technology. Built with **React**, **Spring Boot**, and **MongoDB**.

![Java](https://img.shields.io/badge/Java-17+-orange?style=flat-square&logo=java)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.2.0-brightgreen?style=flat-square&logo=spring)
![React](https://img.shields.io/badge/React-18.x-blue?style=flat-square&logo=react)
![MongoDB](https://img.shields.io/badge/MongoDB-6.0+-green?style=flat-square&logo=mongodb)

---

## 📋 Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation Guide](#installation-guide)
- [Running the Application](#running-the-application)
- [Environment Configuration](#environment-configuration)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Troubleshooting](#troubleshooting)

---

## ✨ Features

- ✅ Add student results with marks (MSE 30% + ESE 70%)
- ✅ View all student results with automatic grade calculation
- ✅ Search students by registration number
- ✅ Beautiful gradient UI with smooth animations
- ✅ Responsive design (works on all devices)
- ✅ RESTful API backend
- ✅ MongoDB database for persistent storage

### 📊 Grading System

| Percentage | Grade |
|------------|-------|
| 90-100     | S     |
| 80-89      | A     |
| 70-79      | B     |
| 60-69      | C     |
| 50-59      | D     |
| Below 50   | F     |

---

## 🛠️ Tech Stack

**Frontend:**
- React 18.x
- Pure CSS (No frameworks like Tailwind/Bootstrap)
- Fetch API for HTTP requests

**Backend:**
- Spring Boot 3.2.0
- Spring Data MongoDB
- Maven
- Lombok

**Database:**
- MongoDB 6.0+

---

## 📦 Prerequisites

Before starting, install the following software:

### 1. Java Development Kit (JDK)

**Version Required:** 17 or higher

**Download:** https://adoptium.net/temurin/releases/

**Installation:**
- Download the installer for your OS
- Run the installer with default settings
- After installation, verify:

```bash
java -version
# Should show: openjdk version "17.x.x" or higher
```

---

### 2. Node.js and npm

**Version Required:** Node.js 16.x or higher

**Download:** https://nodejs.org/

**Installation:**
- Download the LTS version
- Run the installer with default settings
- After installation, verify:

```bash
node -v
# Should show: v16.x.x or higher

npm -v
# Should show: 8.x.x or higher
```

---

### 3. MongoDB

**Version Required:** 6.0 or higher

**Download:** https://www.mongodb.com/try/download/community

**Installation:**

**Windows:**
1. Download MongoDB Community Server
2. Run the installer
3. Choose "Complete" installation
4. Check "Install MongoDB as a Service" ✅
5. MongoDB will start automatically

**macOS:**
```bash
# Install using Homebrew
brew tap mongodb/brew
brew install mongodb-community@6.0
brew services start mongodb-community@6.0
```

**Linux (Ubuntu/Debian):**
```bash
# Import MongoDB public key
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -

# Add repository
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list

# Install
sudo apt-get update
sudo apt-get install -y mongodb-org

# Start MongoDB
sudo systemctl start mongod
sudo systemctl enable mongod
```

**Verify MongoDB:**
```bash
mongosh
# Should open MongoDB shell
# Type 'exit' to quit
```

---

### 4. Maven

**Version Required:** 3.6.x or higher

**Download:** https://maven.apache.org/download.cgi

**Installation:**

**Windows:**
1. Download the Binary zip archive
2. Extract to `C:\Program Files\Maven`
3. Add to System PATH:
   - Open "Environment Variables"
   - Under "System Variables", find "Path"
   - Click "Edit" → "New"
   - Add: `C:\Program Files\Maven\bin`
   - Click "OK"

**macOS:**
```bash
brew install maven
```

**Linux:**
```bash
sudo apt-get install maven
```

**Verify Maven:**
```bash
mvn -version
# Should show: Apache Maven 3.x.x
```

---

## 🚀 Installation Guide

### Step 1: Clone the Repository

```bash
# Clone the project
git clone https://github.com/YOUR_USERNAME/vit-result-system.git

# Navigate into the project
cd vit-result-system
```

---

### Step 2: Backend Setup

```bash
# Navigate to backend folder
cd backend

# Install dependencies and build the project
mvn clean install

# This will:
# - Download all required dependencies
# - Compile the Java code
# - Run tests
# - Create a JAR file
# Takes 2-5 minutes on first run
```

**Expected Output:**
```
[INFO] BUILD SUCCESS
[INFO] Total time: XX.XXX s
```

---

### Step 3: Frontend Setup

```bash
# Navigate to frontend folder (from project root)
cd frontend

# Install all npm dependencies
npm install

# This will:
# - Download all packages from package.json
# - Create node_modules folder
# Takes 2-3 minutes on first run
```

**Expected Output:**
```
added XXX packages in XXs
```

---

### Step 4: MongoDB Setup

#### Create Database and Collection

**Method 1: Automatic (Recommended)**

MongoDB will automatically create the database and collection when you add the first student. **No manual setup needed!**

**Method 2: Manual (Optional)**

```bash
# Open MongoDB shell
mongosh

# Create database
use vit_results

# Create collection
db.createCollection("students")

# Verify
show collections
# Should show: students

# Exit
exit
```

---

## 🏃 Running the Application

You need to run **THREE** things:
1. MongoDB (should already be running as a service)
2. Backend (Spring Boot)
3. Frontend (React)

---

### Terminal 1: Verify MongoDB is Running

```bash
# Check MongoDB service
# Windows:
Get-Service MongoDB

# macOS:
brew services list | grep mongodb

# Linux:
sudo systemctl status mongod

# If not running, start it:
# Windows:
net start MongoDB

# macOS:
brew services start mongodb-community

# Linux:
sudo systemctl start mongod
```

---

### Terminal 2: Start Backend

```bash
# Navigate to backend folder
cd backend

# Start Spring Boot application
mvn spring-boot:run
```

**Expected Output:**
```
  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::                (v3.2.0)

...
Started ResultSystemApplication in X.XXX seconds (JVM running for Y.YYY)
```

✅ **Backend is now running on:** `http://localhost:8080`

**Keep this terminal window open!**

---

### Terminal 3: Start Frontend

**Open a NEW terminal window:**

```bash
# Navigate to frontend folder
cd frontend

# Start React development server
npm start
```

**Expected Output:**
```
Compiled successfully!

You can now view frontend in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.x.x:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled with 0 warnings
```

✅ **Frontend is now running on:** `http://localhost:3000`

**Browser will automatically open at** `http://localhost:3000`

---

## 🌍 Environment Configuration

### Backend Configuration

**File:** `backend/src/main/resources/application.properties`

```properties
# MongoDB Configuration
spring.data.mongodb.uri=mongodb://localhost:27017/vit_results
spring.data.mongodb.database=vit_results

# Server Configuration
server.port=8080

# CORS Configuration (allows React frontend to connect)
spring.web.cors.allowed-origins=http://localhost:3000
spring.web.cors.allowed-methods=GET,POST,PUT,DELETE,OPTIONS
spring.web.cors.allowed-headers=*
```

**If using a different MongoDB setup:**

1. For remote MongoDB (e.g., MongoDB Atlas):
```properties
spring.data.mongodb.uri=mongodb+srv://username:password@cluster.mongodb.net/vit_results
```

2. For different port:
```properties
spring.data.mongodb.uri=mongodb://localhost:27018/vit_results
```

3. For different database name:
```properties
spring.data.mongodb.database=your_database_name
```

---

### Frontend Configuration

**File:** `frontend/src/App.js`

Find this line (around line 22):
```javascript
const API_URL = 'http://localhost:8080/api/students';
```

**Change for production:**
```javascript
const API_URL = 'https://your-backend-domain.com/api/students';
```

**OR use environment variable:**

Create `frontend/.env`:
```env
REACT_APP_API_URL=http://localhost:8080/api/students
```

Then in `App.js`:
```javascript
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api/students';
```

---

## 📁 Project Structure

```
vit-result-system/
│
├── backend/                                    # Spring Boot Backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/vit/resultsystem/
│   │   │   │   ├── ResultSystemApplication.java    # Main entry point
│   │   │   │   ├── controller/
│   │   │   │   │   └── StudentController.java      # REST API endpoints
│   │   │   │   ├── model/
│   │   │   │   │   ├── Student.java               # Student entity
│   │   │   │   │   └── Subject.java               # Subject entity
│   │   │   │   ├── repository/
│   │   │   │   │   └── StudentRepository.java     # MongoDB operations
│   │   │   │   └── service/
│   │   │   │       └── StudentService.java        # Business logic
│   │   │   └── resources/
│   │   │       └── application.properties         # Configuration
│   │   └── test/
│   ├── pom.xml                                    # Maven dependencies
│   └── .gitignore                                 # Git ignore rules
│
├── frontend/                                   # React Frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js                             # Main React component
│   │   ├── App.css                            # Styling
│   │   ├── index.js                           # Entry point
│   │   └── index.css                          # Global styles
│   ├── package.json                           # npm dependencies
│   └── .gitignore                             # Git ignore rules
│
├── .gitignore                                 # Root Git ignore
└── README.md                                  # This file
```

---

## 🔌 API Documentation

### Base URL
```
http://localhost:8080/api/students
```

---

### Endpoints

#### 1. Add Student Result

**POST** `/api/students`

**Request Body:**
```json
{
  "name": "Rahul Sharma",
  "regNo": "21BCE1234",
  "email": "rahul@vitstudent.ac.in",
  "semester": "5",
  "subjects": [
    {
      "name": "Data Structures",
      "mse": 28,
      "ese": 65,
      "total": 54.5
    },
    {
      "name": "Database Management",
      "mse": 25,
      "ese": 60,
      "total": 49.5
    },
    {
      "name": "Web Technologies",
      "mse": 29,
      "ese": 68,
      "total": 56.3
    },
    {
      "name": "Operating Systems",
      "mse": 27,
      "ese": 63,
      "total": 52.2
    }
  ]
}
```

**Response:** 200 OK
```json
{
  "id": "507f1f77bcf86cd799439011",
  "name": "Rahul Sharma",
  "regNo": "21BCE1234",
  ...
}
```

---

#### 2. Get All Students

**GET** `/api/students`

**Response:** 200 OK
```json
[
  {
    "id": "507f1f77bcf86cd799439011",
    "name": "Rahul Sharma",
    "regNo": "21BCE1234",
    "email": "rahul@vitstudent.ac.in",
    "semester": "5",
    "subjects": [...]
  },
  ...
]
```

---

#### 3. Get Student by Registration Number

**GET** `/api/students/{regNo}`

**Example:** `/api/students/21BCE1234`

**Response:** 200 OK
```json
{
  "id": "507f1f77bcf86cd799439011",
  "name": "Rahul Sharma",
  "regNo": "21BCE1234",
  ...
}
```

---

### Testing API with cURL

```bash
# Get all students
curl http://localhost:8080/api/students

# Get specific student
curl http://localhost:8080/api/students/21BCE1234

# Add student
curl -X POST http://localhost:8080/api/students \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Student",
    "regNo": "21BCE9999",
    "email": "test@vitstudent.ac.in",
    "semester": "5",
    "subjects": [
      {"name": "Data Structures", "mse": 28, "ese": 65, "total": 54.5},
      {"name": "Database Management", "mse": 25, "ese": 60, "total": 49.5},
      {"name": "Web Technologies", "mse": 29, "ese": 68, "total": 56.3},
      {"name": "Operating Systems", "mse": 27, "ese": 63, "total": 52.2}
    ]
  }'
```

---

## 🧪 Testing the Application

### 1. Test Backend API

**Before starting frontend, test if backend works:**

```bash
# Open browser or use curl
curl http://localhost:8080/api/students

# Should return: []
# (Empty array if no students added yet)
```

---

### 2. Test Complete Flow

1. **Open** `http://localhost:3000` in browser

2. **Add a Test Student:**
   - Click "Add Result" tab
   - Fill in:
     - Name: `Test Student`
     - Registration Number: `21BCE9999`
     - Email: `test@vitstudent.ac.in`
     - Semester: `5`
   - Enter marks for all 4 subjects:
     - Data Structures: MSE=28, ESE=65
     - Database Management: MSE=25, ESE=60
     - Web Technologies: MSE=29, ESE=68
     - Operating Systems: MSE=27, ESE=63
   - Click "Submit Result"
   - Should see: ✅ "Student result added successfully!"

3. **View Results:**
   - Click "View Results" tab
   - Click "View All" button
   - Should see the student card with:
     - Name, email, registration number
     - Calculated percentage and grade
     - Individual subject grades

4. **Test Search:**
   - Enter registration number: `21BCE9999`
   - Click "Search"
   - Should show only that student

5. **Verify in MongoDB:**
   ```bash
   mongosh
   use vit_results
   db.students.find().pretty()
   # Should see your test student
   exit
   ```

---

## 🐛 Troubleshooting

### Issue 1: "Port 8080 already in use"

**Problem:** Another application is using port 8080

**Solution:**

**Windows:**
```bash
# Find process using port 8080
netstat -ano | findstr :8080

# Kill the process (replace XXXX with PID)
taskkill /F /PID XXXX
```

**macOS/Linux:**
```bash
# Find and kill process
lsof -ti:8080 | xargs kill -9
```

**OR change port in** `application.properties`:
```properties
server.port=8081
```

---

### Issue 2: "Port 3000 already in use"

**Solution:**

```bash
# Kill process on port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /F /PID XXXX

# macOS/Linux:
lsof -ti:3000 | xargs kill -9
```

**OR run on different port:**
```bash
# Windows:
set PORT=3001 && npm start

# macOS/Linux:
PORT=3001 npm start
```

---

### Issue 3: "MongoDB connection refused"

**Problem:** MongoDB is not running

**Solution:**

**Check if running:**
```bash
# Windows:
Get-Service MongoDB

# macOS:
brew services list | grep mongodb

# Linux:
sudo systemctl status mongod
```

**Start MongoDB:**
```bash
# Windows:
net start MongoDB

# macOS:
brew services start mongodb-community

# Linux:
sudo systemctl start mongod
```

---

### Issue 4: Backend fails to start - "Could not resolve dependencies"

**Problem:** Maven dependencies not downloaded

**Solution:**

```bash
cd backend

# Clean and rebuild
mvn clean install -U

# If still fails, delete .m2 cache
# Windows: C:\Users\YourName\.m2\repository
# macOS/Linux: ~/.m2/repository
# Then run: mvn clean install
```

---

### Issue 5: Frontend shows blank page

**Problem:** React compilation error or wrong API URL

**Solution:**

1. **Check browser console (F12)** for errors

2. **Verify backend is running:**
   ```bash
   curl http://localhost:8080/api/students
   ```

3. **Clear React cache:**
   ```bash
   cd frontend
   rm -rf node_modules package-lock.json
   npm cache clean --force
   npm install
   npm start
   ```

---

### Issue 6: CORS Error

**Problem:** Frontend can't connect to backend

**Symptoms:** Browser console shows:
```
Access to fetch at 'http://localhost:8080' has been blocked by CORS policy
```

**Solution:**

1. **Verify** `StudentController.java` has:
   ```java
   @CrossOrigin(origins = "http://localhost:3000")
   ```

2. **Restart backend server**

3. **Check** `application.properties` has CORS settings

---

### Issue 7: "Student not found" when searching

**Problem:** Wrong registration number or not in database

**Solution:**

1. **Verify student exists:**
   ```bash
   mongosh
   use vit_results
   db.students.find({regNo: "21BCE1234"})
   ```

2. **Check exact registration number** (case-sensitive)

3. **Add student first** if not exists

---

### Issue 8: Wrong percentage calculation

**Problem:** Math calculation error

**Solution:**

The formula is:
- Each subject total = (MSE × 0.3) + (ESE × 0.7)
- Overall percentage = (Sum of all subject totals) / (Number of subjects)

**Example:**
- Subject 1: MSE=28, ESE=65 → Total = 8.4 + 45.5 = 53.9
- Subject 2: MSE=25, ESE=60 → Total = 7.5 + 42 = 49.5
- Subject 3: MSE=29, ESE=68 → Total = 8.7 + 47.6 = 56.3
- Subject 4: MSE=27, ESE=63 → Total = 8.1 + 44.1 = 52.2
- **Total:** 211.9 / 4 = **52.975%** → Grade: **D**

---

## 📊 Database Schema

### Student Collection

```javascript
{
  "_id": ObjectId("..."),              // Auto-generated by MongoDB
  "name": "String",                    // Student name
  "regNo": "String",                   // Registration number (unique)
  "email": "String",                   // Email address
  "semester": "String",                // Semester (1-8)
  "subjects": [                        // Array of subjects
    {
      "name": "String",                // Subject name
      "mse": Number,                   // MSE marks (0-30)
      "ese": Number,                   // ESE marks (0-70)
      "total": Number                  // Total = (mse × 0.3) + (ese × 0.7)
    }
  ]
}
```

---

## 🔒 Security Notes

⚠️ **This is a development setup. For production:**

1. **Add authentication** (JWT, OAuth, etc.)
2. **Use HTTPS** (SSL certificates)
3. **Environment variables** for sensitive data
4. **MongoDB authentication** (username/password)
5. **Input validation** on both frontend and backend
6. **Rate limiting** for API endpoints
7. **CORS** - Restrict to specific domains only

---

## 📝 Additional Commands

### Useful MongoDB Commands

```bash
# Open MongoDB shell
mongosh

# Show all databases
show dbs

# Use vit_results database
use vit_results

# Show all collections
show collections

# Count students
db.students.countDocuments()

# Find all students
db.students.find()

# Find specific student
db.students.find({regNo: "21BCE1234"})

# Delete a student
db.students.deleteOne({regNo: "21BCE1234"})

# Delete all students (careful!)
db.students.deleteMany({})

# Exit
exit
```

---

### Useful Maven Commands

```bash
# Clean build
mvn clean

# Install dependencies
mvn install

# Run tests
mvn test

# Run application
mvn spring-boot:run

# Package as JAR
mvn package

# Skip tests
mvn install -DskipTests
```

---

### Useful npm Commands

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Clear cache
npm cache clean --force

# Update packages
npm update
```

---

## 🚢 Building for Production

### Backend

```bash
cd backend

# Create JAR file
mvn clean package -DskipTests

# JAR file will be in: target/result-system-1.0.0.jar

# Run the JAR
java -jar target/result-system-1.0.0.jar
```

---

### Frontend

```bash
cd frontend

# Create production build
npm run build

# Build files will be in: build/

# Serve the build (for testing)
npx serve -s build
```

---

## 📞 Support

If you encounter any issues:

1. Check the [Troubleshooting](#troubleshooting) section
2. Verify all [Prerequisites](#prerequisites) are installed
3. Make sure MongoDB is running
4. Check that ports 8080 and 3000 are available
5. Open an issue on GitHub

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

---

<div align="center">

### 🎓 Made for VIT Students

https://claude.ai/share/f0663ea1-42f8-4cd7-9540-756e18fc890c

**⭐ If this project helped you, please star it on GitHub!**

</div>
