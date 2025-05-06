// Import the HTTP module
const http = require('http');

// Define the hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Handle different routes
  const url = req.url;
  
  if (url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Node.js HTTP Server</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
            h1 { color: #333; }
            nav { margin-bottom: 20px; }
            nav a { margin-right: 15px; color: #0066cc; text-decoration: none; }
            nav a:hover { text-decoration: underline; }
          </style>
        </head>
        <body>
          <h1>Welcome to my Node.js Server</h1>
          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
          <p>This is the home page of our simple HTTP server created with Node.js.</p>
        </body>
      </html>
    `);
  } 
  else if (url === '/about') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>About - Node.js HTTP Server</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
            h1 { color: #333; }
            nav { margin-bottom: 20px; }
            nav a { margin-right: 15px; color: #0066cc; text-decoration: none; }
            nav a:hover { text-decoration: underline; }
          </style>
        </head>
        <body>
          <h1>About Page</h1>
          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
          <p>This is the About page of our simple HTTP server.</p>
        </body>
      </html>
    `);
  } 
  else if (url === '/contact') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Contact - Node.js HTTP Server</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
            h1 { color: #333; }
            nav { margin-bottom: 20px; }
            nav a { margin-right: 15px; color: #0066cc; text-decoration: none; }
            nav a:hover { text-decoration: underline; }
          </style>
        </head>
        <body>
          <h1>Contact Page</h1>
          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
          <p>This is the Contact page of our simple HTTP server.</p>
        </body>
      </html>
    `);
  } 
  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>404 - Page Not Found</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
            h1 { color: #d9534f; }
            nav { margin-bottom: 20px; }
            nav a { margin-right: 15px; color: #0066cc; text-decoration: none; }
            nav a:hover { text-decoration: underline; }
          </style>
        </head>
        <body>
          <h1>404 - Page Not Found</h1>
          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
          <p>The page you requested could not be found.</p>
        </body>
      </html>
    `);
  }
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});