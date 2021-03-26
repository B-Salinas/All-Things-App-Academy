const { Customer, Invoice  } = require('../models');

async function lookupCustomerAndInvoicesById(id) {
  // Find customer and associated invoices by customer `id`
  let something = await Customer.findByPk(id, {
    include: Invoice
  });
  return something;
};

// ya i dont know these

async function lookupCustomersByName(name) {
  // Find customers (plural) by customer `name`
  let something = await Invoice.findAll(name, {
    where: {
      name: Customer
    }
  })
  return something;
};

async function lookupCustomerByInvoiceNumber(invoiceNumber) {
  // Find invoice by `invoiceNumber` and return associated customer
  // Hint: each invoice has a `customerId`
  let something = await Invoice.findOne(invoiceNumber, {
    where: {
      name: Customer
    },
    include: Invoice
  })

  return something;
};

module.exports = {
  lookupCustomerAndInvoicesById,
  lookupCustomersByName,
  lookupCustomerByInvoiceNumber,
};
