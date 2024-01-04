# RapidQR.xyz QR Code Generator with Express and EJS

This project is a QR Code Generator web application built with Express.js and EJS templates. It generates QR codes for URLs, texts, emails, phone numbers, SMS, and geolocations.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
2. Navigate to the project directory:
   ```bash
   cd rapidqr

3. Install dependencies:
   ```bash
   npm install

4. Set up environment variables:
   Create a .env file in the root directory and add the following:
   ```bash
   SITE_NAME=your-site-name
   PORT=3000
   # Add any other environment variables if required

5. Run the application:
   ```bash
   npm start

## Usage
- Access the application in your browser at http://localhost:3000
- Generate QR codes by accessing different routes:
    ### / - Homepage with QR code generation options
    ### /help - Help page
    ### /api/documentation - API documentation
    ### /generate - Generate QR code based on query parameters (content and data)
    ### /api/generate - API route to generate QR code as JSON response

## Dependencies

- Express.js - Web application framework
- EJS - Embedded JavaScript templates
- QRCode - QR code generator
