CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(30) UNIQUE NOT NULL,
  password TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  category TEXT NOT NULL UNIQUE,
  description TEXT
);

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  task TEXT,
  category_id INTEGER REFERENCES categories ON DELETE CASCADE
);

CREATE TABLE user_task (
  user_id INTEGER REFERENCES users ON DELETE CASCADE,
  task_id INTEGER REFERENCES tasks ON DELETE CASCADE,
  status BOOLEAN,
  PRIMARY KEY (user_id, task_id)
);

