# Mind Matters

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

