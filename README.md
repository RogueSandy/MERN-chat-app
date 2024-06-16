# Chat Application
This is a real-time chat application built using the MERN stack (MongoDB, Express.js, React, Node.js). Users can create accounts, send messages to all other users, and use emojis in their messages. The application ensures real-time communication using Socket.IO.

## Table of Contents
 - Features
 - Installation
 - Usage
 - Known Issues
 - Technologies Used
 - Contributing
 - License
 - Contact

## Features
 - User Authentication: Register and login functionality for users.
 - Real-Time Messaging: Users can send and receive messages instantly.
 - Emoji Support: Users can include emojis in their messages.
 - MongoDB Integration: All messages and user data are stored in MongoDB.
 - Real-Time Communication: Implemented using Socket.IO.

## Installation
To get a local copy up and running follow these simple steps:

### Prerequisites
 - Node.js
 - npm (Node Package Manager)
 - MongoDB

### Backend Setup
 - git clone `repo link` //Clone the repository
 - cd chat-app
 - cd server //Navigate to the server directory
 - npm install //Install dependencies
 - Create a .env file in the server directory and add the following environment variables:
      MONGO_URI=your_mongodb_connection_string
      PORT=port_number
 - npm start //Start the backend server
The backend server will be running on http://localhost:port. //On port mentioned in .env file

### Frontend Setup
 - cd ../client //Navigate to the client directory
 - npm install //Install dependencies
 - npm start //Start the frontend development server
The frontend server will be running on http://localhost:3000.

## Usage
 - Register or log in to the application.
 - Start sending messages to other users in real-time.
 - Use emojis to enhance your messages.

## Known Issues
There is currently no feature to upload avatar images during the sign-up process.

## Technologies Used
 - MongoDB: For the database.
 - Express.js: For the backend framework.
 - React: For the frontend framework.
 - Node.js: For the server environment.
 - JWT: For user authentication.
 - Socket.IO: For real-time communication.
 - Emoji Picker: For emoji support in messages.

## Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

### Fork the Project
 - Create your Feature Branch (git checkout -b feature/AmazingFeature)
 - Commit your Changes (git commit -m 'Add some AmazingFeature')
 - Push to the Branch (git push origin feature/AmazingFeature
 - Open a Pull Request

## License
Distributed under the MIT License. See LICENSE for more information.

## Contact
Your Name - sandeshlawhale@gmail.com
