CREATE TABLE invoices (
  id SERIAL NOT NULL PRIMARY KEY,
  invoice_number VARCHAR(20) NOT NULL UNIQUE,
  created_at TIMESTAMP NOT NULL,
  paid_on TIMESTAMP,
  customer_id INTEGER NOT NULL,
  FOREIGN KEY (customer_id) REFERENCES customers(id)
);