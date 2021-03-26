SELECT name, invoice_number, description, number_of_units, rate
FROM customers
INNER JOIN invoices ON (customers.id = invoices.customer_id)
INNER JOIN expenses ON (invoices.id = expenses.invoice_id)
ORDER BY customers.name;