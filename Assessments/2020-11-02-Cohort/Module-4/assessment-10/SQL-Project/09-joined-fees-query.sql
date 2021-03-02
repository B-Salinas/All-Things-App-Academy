SELECT
  customers.name,
  invoices.invoice_number,
  fees.description,
  fees.amount
FROM fees
JOIN customers ON (customers.name = invoices.customer_id)
JOIN invoices ON (invoices.id = fees.invoice_id)
ORDER BY customers.name;

-- I don't know why this isn't working!

