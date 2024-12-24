import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

function Invoices() {
  const [invoiceData, setInvoiceData] = useState({
    customerName: '',
    customerAddress: '',
    invoiceDate: new Date().toISOString().slice(0, 10),
    invoiceNumber: '',
    items: [],
  });

  const [showInvoice, setShowInvoice] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInvoiceData({ ...invoiceData, [name]: value });
  };

  const handleAddItem = () => {
    setInvoiceData({
      ...invoiceData,
      items: [
        ...invoiceData.items,
        {
          name: '',
          quantity: 1,
          price: 0,
        },
      ],
    });
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...invoiceData.items];
    updatedItems[index][field] = value;
    setInvoiceData({ ...invoiceData, items: updatedItems });
  };

  const calculateTotal = () => {
    return invoiceData.items.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);
  };

  const generateInvoice = () => {
    if (
      !invoiceData.customerName ||
      !invoiceData.customerAddress ||
      invoiceData.items.length === 0
    ) {
      alert('Please fill in all required fields.');
      return;
    }

    const uniqueID = Date.now().toString(36) + Math.random().toString(36).substring(2);
    setInvoiceData({ ...invoiceData, invoiceNumber: uniqueID });

    setShowInvoice(true);
  };

  const downloadPDF = () => {
    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
    });

    // Unique template design for the PDF
    doc.setDrawColor(0, 123, 255);
    doc.setFillColor(235, 245, 255);
    doc.rect(10, 10, 190, 277, 'FD');

    doc.setFontSize(20);
    doc.setTextColor(0, 123, 255);
    doc.text('INVOICE', 105, 20, { align: 'center' });

    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.text(`Invoice Number: ${invoiceData.invoiceNumber}`, 20, 40);
    doc.text(`Date: ${invoiceData.invoiceDate}`, 20, 50);
    doc.text(`Customer Name: ${invoiceData.customerName}`, 20, 60);
    doc.text(`Customer Address: ${invoiceData.customerAddress}`, 20, 70);

    const tableBody = invoiceData.items.map((item) => [
      item.name,
      item.quantity,
      `$${item.price.toFixed(2)}`,
      `$${(item.quantity * item.price).toFixed(2)}`,
    ]);

    doc.autoTable({
      startY: 80,
      head: [['Item', 'Quantity', 'Price', 'Total']],
      body: tableBody,
      theme: 'grid',
      styles: { fontSize: 10, fillColor: [235, 245, 255] },
    });

    const finalY = doc.lastAutoTable.finalY;
    doc.setFontSize(14);
    doc.setTextColor(0, 123, 255);
    doc.text(`Total: $${calculateTotal().toFixed(2)}`, 20, finalY + 10);

    doc.save(`invoice_${invoiceData.invoiceNumber}.pdf`);
  };

  return (
    <div className="bg-gradient-to-br from-blue-100 via-white to-blue-50 min-h-screen">
      <div className="container mx-auto p-6 rounded-lg shadow-xl bg-white">
        <h1 className="text-3xl font-bold mb-6 text-blue-700 text-center">Invoice Generator</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">
              Customer Name
            </label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              value={invoiceData.customerName}
              onChange={handleInputChange}
              className="mt-1 p-3 w-full border border-blue-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="customerAddress" className="block text-sm font-medium text-gray-700">
              Customer Address
            </label>
            <textarea
              id="customerAddress"
              name="customerAddress"
              value={invoiceData.customerAddress}
              onChange={handleInputChange}
              rows={3}
              className="mt-1 p-3 w-full border border-blue-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="invoiceDate" className="block text-sm font-medium text-gray-700">
            Invoice Date
          </label>
          <input
            type="date"
            id="invoiceDate"
            name="invoiceDate"
            value={invoiceData.invoiceDate}
            onChange={handleInputChange}
            className="mt-1 p-3 w-full border border-blue-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold text-blue-700">Invoice Items</h2>
          <table className="table-auto w-full border-collapse border border-blue-200">
            <thead className="bg-blue-100">
              <tr>
                <th className="border border-blue-200 px-4 py-2">Item</th>
                <th className="border border-blue-200 px-4 py-2">Quantity</th>
                <th className="border border-blue-200 px-4 py-2">Price</th>
                <th className="border border-blue-200 px-4 py-2">Total</th>
                <th className="border border-blue-200 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {invoiceData.items.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border border-blue-200 px-4 py-2">
                    <input
                      type="text"
                      value={item.name}
                      onChange={(e) => handleItemChange(index, 'name', e.target.value)}
                      className="border border-blue-300 p-2 w-full rounded-md"
                    />
                  </td>
                  <td className="border border-blue-200 px-4 py-2">
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        handleItemChange(index, 'quantity', Number(e.target.value))
                      }
                      className="border border-blue-300 p-2 w-full rounded-md"
                    />
                  </td>
                  <td className="border border-blue-200 px-4 py-2">
                    <input
                      type="number"
                      step="0.01"
                      value={item.price}
                      onChange={(e) =>
                        handleItemChange(index, 'price', Number(e.target.value))
                      }
                      className="border border-blue-300 p-2 w-full rounded-md"
                    />
                  </td>
                  <td className="border border-blue-200 px-4 py-2">
                    ${(item.quantity * item.price).toFixed(2)}
                  </td>
                  <td className="border border-blue-200 px-4 py-2 flex gap-4">
                    <button
                      onClick={() => {
                        const updatedItems = [...invoiceData.items];
                        updatedItems.splice(index, 1);
                        setInvoiceData({ ...invoiceData, items: updatedItems });
                      }}
                      className="text-red-500 hover:text-red-700 font-bold"
                    >
                      Remove
                    </button>
                    <button
                      onClick={() => {
                        const updatedItems = [...invoiceData.items];
                        updatedItems[index] = { ...updatedItems[index] };
                        setInvoiceData({ ...invoiceData, items: updatedItems });
                      }}
                      className="text-blue-500 hover:text-blue-700 font-bold"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button
            onClick={handleAddItem}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-4"
          >
            Add Item
          </button>
        </div>

        <div className="mt-8 flex justify-between">
          <button
            onClick={generateInvoice}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md"
          >
            Generate Invoice
          </button>
          {showInvoice && (
            <button
              onClick={downloadPDF}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md"
            >
              Download PDF
            </button>
          )}
        </div>

        {showInvoice && (
          <div className="container mx-auto mt-8 p-6 rounded-lg shadow-md bg-gradient-to-br from-white to-blue-50">
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Invoice Preview</h2>
            <p><strong>Invoice Number:</strong> {invoiceData.invoiceNumber}</p>
            <p><strong>Date:</strong> {invoiceData.invoiceDate}</p>
            <p><strong>Customer Name:</strong> {invoiceData.customerName}</p>
            <p><strong>Customer Address:</strong> {invoiceData.customerAddress}</p>

            <table className="table-auto w-full mt-4 border-collapse border border-blue-200">
              <thead className="bg-blue-100">
                <tr>
                  <th className="border border-blue-200 px-4 py-2">Item</th>
                  <th className="border border-blue-200 px-4 py-2">Quantity</th>
                  <th className="border border-blue-200 px-4 py-2">Price</th>
                  <th className="border border-blue-200 px-4 py-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {invoiceData.items.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="border border-blue-200 px-4 py-2">{item.name}</td>
                    <td className="border border-blue-200 px-4 py-2">{item.quantity}</td>
                    <td className="border border-blue-200 px-4 py-2">${item.price.toFixed(2)}</td>
                    <td className="border border-blue-200 px-4 py-2">${(item.quantity * item.price).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="mt-4 text-blue-700 font-bold">
              Total: ${calculateTotal().toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Invoices;
