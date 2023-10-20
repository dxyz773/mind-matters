CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(30) UNIQUE NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT,
  img_url TEXT,
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



CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(30) UNIQUE NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT,
  img_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);


-- Sample user:
-- INSERT INTO users (username, first_name, last_name, email) 
-- VALUES ('testuser', 'test', 'user', 'test@test.com');

-- Sample user_task:
-- INSERT INTO user_task (user_id, task_id, status) 
-- VALUES (1, 2, false), (1, 6, false);