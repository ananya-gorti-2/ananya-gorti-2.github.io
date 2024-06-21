const express = require('express');
const bodyParser = require('body-parser');
const { google } = require('googleapis');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());

// Load client secrets from a local file.
const credentials = JSON.parse(fs.readFileSync('credentials.json'));
const { client_email, private_key } = credentials;
const oAuth2Client = new google.auth.JWT(
  client_email,
  null,
  private_key,
  ['https://www.googleapis.com/auth/spreadsheets']
);

// Append data to Google Sheets
async function appendOrderToSheet(orderDetails) {
  try {
    const sheets = google.sheets({ version: 'v4', auth: oAuth2Client });
    const spreadsheetId = '1ywHqvuD4pjIFO3fg1e2Nj5p07fVL9yo_EZ9zhetludk'; // replace with your Google Sheets ID
    const range = 'Culinary Harbor Orders!A:F'; // replace with your sheet name and range

    const values = [
      [
        new Date().toISOString(),
        orderDetails.address,
        orderDetails.date,
        orderDetails.phone,
        orderDetails.totalPrice,
        JSON.stringify(orderDetails.cart)
      ],
    ];

    const resource = {
      values,
    };

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      resource,
    });

    console.log('Google Sheets API response:', response.data);
  } catch (error) {
    console.error('Error appending to Google Sheets:', error);
    throw error;
  }
}

// API endpoint to receive order details
app.post('/submit-order', async (req, res) => {
  try {
    console.log('Received order details:', req.body);
    const orderDetails = req.body;
    await appendOrderToSheet(orderDetails);
    res.json({ success: true });
  } catch (error) {
    console.error('Error submitting order:', error);
    res.json({ success: false, error });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});