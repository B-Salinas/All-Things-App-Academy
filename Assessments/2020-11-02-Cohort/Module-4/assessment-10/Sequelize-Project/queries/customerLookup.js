const { Customer, Invoice  } = require('../models');

// dont even know where to begin 

async function lookupCustomerAndInvoicesById(id) {
  // Find customer and associated invoices by customer `id`
};

async function lookupCustomersByName(name) {
  // Find customers (plural) by customer `name`
};

async function lookupCustomerByInvoiceNumber(invoiceNumber) {
  // Find invoice by `invoiceNumber` and return associated customer
  // Hint: each invoice has a `customerId`
};

module.exports = {
  lookupCustomerAndInvoicesById,
  lookupCustomersByName,
  lookupCustomerByInvoiceNumber,
};
