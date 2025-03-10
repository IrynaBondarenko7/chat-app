# Chat App

## 🚀 Overview

Chat App is a modern real-time messaging application built using the MERN stack, Socket.io, and modern UI libraries.

## 🌟 Tech Stack

- **Frontend**: React, TailwindCSS, Daisy UI, Headless UI
- **Backend**: Node.js, Express, MongoDB
- **Real-time**: Socket.io
- **State Management**: Zustand
- **Authentication & Authorization**: JWT

## 🎃 Features

- 🔐 User registration and authentication via JWT
- 👾 Real-time chat powered by Socket.io
- 🚀 Display of online user status using Socket.io and React Context
- 📩 Unread messages count displayed as a badge
- 🔄 Global state management with Zustand
- 🐞 Error handling on both server and client sides

## 📌 How It Works

1. A user registers or logs into the system.
2. A list of users is displayed in the left panel. If a user is online, their status is indicated.
3. The user selects a chat partner and sends a message.
4. All messages are synchronized in real-time via WebSockets.

## 🛠 Installation & Setup

### 1. Clone the Repository

```sh
git clone https://github.com/IrynaBondarenko7/chat-app.git
cd chat-app
```

### 2. Set Up the Server

```sh
npm install
npm run server
```

### 3. Set Up the Client

```sh
cd frontend
npm install
npm run dev
```

### 3. Setup .env file

```sh
PORT=...
MONGO_DB_URI=...
JWT_SECRET=...
NODE_ENV=...
```

## 🌍 Deployment

Both the frontend and backend are located in the same repository and are deployed on [Render.com](https://render.com/). **Since this is a free resource, loading the live page may take some time.**

## 📚 Resources

For learning and reference, check out this YouTube course by **As a Programmer**:

- [MERN Stack Chat App Course](https://www.youtube.com/watch?v=HwCqsOis894)
