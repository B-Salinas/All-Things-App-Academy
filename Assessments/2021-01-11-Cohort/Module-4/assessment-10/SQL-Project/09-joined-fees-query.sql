SELECT name, invoice_number, description, amount
FROM customers
INNER JOIN invoices ON (customers.id = invoices.customer_id)
INNER JOIN fees ON (invoices.id = fees.invoice_id)
ORDER BY customers.name;