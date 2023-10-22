### Introduction
Mind Matters is an application designed to help individuals improve their well-being and mental health by providing a structured way to engage in self-care tasks. It offers a task tracking system to motivate users to perform these tasks regularly.In addition, the app provides a wealth of wellness resources and information on how to perform various self-care tasks effectively.

### Problem Statement
Maintaining mental health and well-being is essential, but many people struggle to establish and stick to a self-care routine. Our app addresses this challenge by offering a solution that encourages users to engage in tasks that promote mental health and overall well-being. Moreover, we understand that individuals may need guidance on how to perform self-care tasks effectively

### Key Features
Task Tracking: Users can create and track self-care tasks they want to perform regularly.
Motivation: The app provides a motivating system to encourage users to complete their tasks.
Progress Monitoring: Users can monitor their task completion progress over time.
User-Friendly Interface: A simple and intuitive user interface for an enjoyable user experience.
Wellness Resources: Access resources explaining how to perform different activities to improve mental well-being

### How It Works
Users choose from a variety of self care tasks organized by category. Users select the task they wish to perform.
Users can monitor their task completion progress and track improvements in their well-being and mental health over time.

### Tech Stack 

Frontend
The Well-Being and Mental Health Task Tracker utilizes a comprehensive tech stack to deliver a robust and engaging user experience.

React: The frontend of our application is built using React, a powerful JavaScript library for creating dynamic and interactive user interfaces. React enables us to develop a responsive and user-friendly front-end.

JavaScript: JavaScript is the primary programming language for our application. It is essential for building the logic and interactivity of our frontend components.

Tailwind CSS: We leverage Tailwind CSS for styling and layout. Tailwind is a utility-first CSS framework that facilitates rapid UI development and customization. It helps us maintain a clean and consistent design.

DaisyUI: DaisyUI is an extension for Tailwind CSS that provides additional utility classes and components. It enhances our design capabilities and streamlines the styling process.

Backend
For the backend of our application, we have chosen a versatile tech stack that offers reliability and scalability:

Node.js: Node.js is the foundation of our backend, enabling us to build server-side applications efficiently. It is known for its speed and versatility.

Express.js: We use Express.js, a popular web application framework for Node.js. Express provides the essential features and tools for routing, middleware, and API development.

PostgreSQL: Our application relies on PostgreSQL, a robust and open-source relational database management system (RDBMS). PostgreSQL ensures the secure storage and retrieval of user data and task information.

Design and Collaboration
Figma: Figma is our primary design and collaboration tool. It empowers our design team to create interactive prototypes, iterate on the user interface, and collaborate effectively. Figma plays a crucial role in shaping our app's visual design. 

### Instructions to run client in development:

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

### Instructions to run server/backend in development:

#### FIRST TIME running server:
1. Open new terminal
2. cd into backend folder
3. Install nodemon globally. This will restart server when you edit files or if the server crashes.

```
npm install --global nodemon
```

4. Install dependencies

```
npm i
```

5. Start local server. You should see "Server started on PORT 3001" printed in the terminal.

```
npm start
```

---

#### After first time running server:

1. Open new terminal
2. cd into backend folder
3. Start local server. You should see "Server started on PORT 3001" printed in the terminal.

```
npm start
```
#### First Time adding .env variables:
1. Make sure you have a .env file inside your backend folder
2. go to the passage console for wellness warriors
3. click on the mind matters application
4. in the .env file paste the ap ID into PASSAGE_APP_ID=
5. go to API Keys in the passage console
6. create a new key 
7. copy the value of that key into the .env file after PASSAGE_API_KEY=
8. make sure you dont track the .env file 

