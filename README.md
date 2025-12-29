# 🌍 Wanderlust

Wanderlust is a full-stack web application designed for discovering, creating, and managing travel accommodation listings. The project focuses on secure user authentication, strict authorization rules, and a clean MVC architecture to ensure scalability, maintainability, and a smooth user experience.

This project is built as a real-world full-stack application showcasing backend logic, database relationships, middleware-based security, and structured application design.


##  Features

###  Authentication
- User registration and login
- Secure password hashing
- Session-based authentication using Passport.js
- Persistent login sessions

###  Authorization
- Only authenticated users can create listings and reviews
- Only the owner of a listing can edit or delete it
- Only the author of a review can delete it
- Route protection using custom middleware
- Flash messages for unauthorized access attempts

###  Listings
- Create, read, update, and delete listings
- Each listing contains title, description, price, location, and image
- Default image support if no image is provided
- Individual listing detail pages

###  Reviews
- Add reviews to listings
- Rating and comment support
- Review ownership validation
- Cascade deletion of reviews when a listing is deleted

###  MVC Architecture
- **Models** handle database schemas and relationships
- **Views** manage UI using EJS templates
- **Controllers** contain all business logic
- Clean separation of concerns for better maintainability

###  Additional Functionality
- Server-side data validation
- Centralized error handling using async wrappers
- Flash messages for success and error feedback
- RESTful routing conventions


##  How to Run the Website Locally

Follow the steps below to run the Wanderlust website on your local machine.


### 1️ Prerequisites

Make sure the following are installed on your system:

- **Node.js** (v16 or higher)
- **MongoDB** (running locally or MongoDB Atlas)
- **Git**
- **Nodemon** (optional but recommended)


### 2️ Clone the Repository

```bash
git clone https://github.com/MOHAMMAD-SAIF1/wanderlust.git

```
### 3 Navigate to the Project Directory

```bash
cd wanderlust
```
### 4 Install Project Dependencies

```bash
npm install
```

### 5 Configure Environment Variables

Create a .env file in the root directory and add the following:
```bash
DB_URL=your DB_URL Key.
SESSION_SECRET=yourSecretKey
```
### 6 Start MongoDB

If using local MongoDB:
```bash
mongod
```
### 7 Run the Application

Using Nodemon (recommended):
```bash
nodemon app.js
```
or 
```bash
node app.js
```
### 8 Open in Browser

Visit the following URL in your browser:
```bash
http://localhost:4000
```
### 9 Stop the Server

Press Ctrl + C in the terminal to stop the server.
