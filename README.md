# Mind Matters

## Introduction

This repository was created as part of the Women Who Code Hackathon For Social Code 2023. Mind Matters is an application designed to help individuals improve their well-being and mental health by providing a structured way to engage in self-care tasks. It offers a task tracking system to motivate users to perform these tasks regularly. In addition, the app provides a wealth of wellness resources and information on how to perform various self-care tasks effectively.

## Problem Statement

Maintaining mental health and well-being is essential, but many people struggle to establish and stick to a self-care routine. Our app addresses this challenge by offering a solution that encourages users to engage in tasks that promote mental health and overall well-being. Moreover, we understand that individuals may need guidance on how to perform self-care tasks effectively.

## Key Features

- **Task Tracking:** Users can create and track self-care tasks they want to perform regularly.
- **Motivation:** The app provides a motivating system to encourage users to complete their tasks.
- **User-Friendly Interface:** A simple and intuitive user interface for an enjoyable user experience.
- **Wellness Resources:** Access resources explaining how to perform different activities to improve mental well-being.
- **Passage by 1Password:** Passwordless authentication service using one-time code or passkey.

## How It Works

Users choose from a variety of self-care tasks organized by category. Users select the task they wish to perform. Users can monitor their task completion progress and track improvements in their well-being and mental health over time.

## Tech Stack

### Frontend

The Well-Being and Mental Health Task Tracker utilizes a comprehensive tech stack to deliver a robust and engaging user experience.

- **React**:

- **JavaScript**

- **Tailwind CSS**

- **DaisyUI**

### Backend

For the backend of our application, we have chosen a versatile tech stack that offers reliability and scalability:

- **Node.js**

- **Express.js**

- **PostgreSQL**

### Design and Collaboration

- **Figma**

## Instructions to run client in development:

#### FIRST TIME running client:

1. Open new terminal in IDE/code editor
2. cd into client folder
   2a. This is a test by Ray
3. Install dependencies

```
npm i
```

4. Start local server

```
npm run dev
```

5. Copy local host link from terminal into browser

---

#### After first time running client:

1. Open new terminal in IDE/code editor

2. cd into client folder

3. Start local server

```
npm run dev
```

4. Copy local host link from terminal into browser

---

### First Time adding .env variables:

1. Make sure you have a .env file inside your backend and frontend folders
2. Go to the Passage console for Wellness Warriors
3. Click on the Mind Matters application
4. In the .env file paste the app ID into PASSAGE_APP_ID=
5. Go to API Keys in the passage console
6. Create a new key 
7. Copy the value of that key into the .env file after PASSAGE_API_KEY=
8. Make sure you don't track the .env file 


