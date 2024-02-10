// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const htmlToDocx = require('html-docx-js');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.post('/convertToDocx', (req, res) => {
  const htmlContent = '<h1>Hello</h1>';

  // Convert HTML to DOCX
  const docxBuffer = htmlToDocx(htmlContent);

  // Send the DOCX file as a response
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
  res.setHeader('Content-Disposition', 'attachment; filename=Hallticket.docx');
  res.send(docxBuffer);
});

app.listen(port, () => { 
  console.log(`Server is running on port ${port}`);
});
