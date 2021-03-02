SELECT 
  customers.name,
  invoices.invoice_number,
  expenses.description,
  expenses.number_of_units,
  expenses.rate
FROM expenses
JOIN customers ON (customers.id = invoices.customer_id)
JOIN invoices ON (invoices.invoice_number = expenses.invoice_id)
WHERE customers.name;

-- AND THIS ONE!! 