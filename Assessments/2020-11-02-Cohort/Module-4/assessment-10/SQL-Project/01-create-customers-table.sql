CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) UNIQUE NOT NULL,
  contact_email VARCHAR(200) UNIQUE NOT NULL
);