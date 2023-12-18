# Server-Side Application for Web Frameworks and Languages Module

## Introduction

This server-side component, part of a larger web application, serves as a backend built using Node.js and Express.js. It handles server logic and provides API endpoints for the client-side application, focusing on item management and user interactions.

## Technology Stack
• Node.js: JavaScript runtime environment that executes JavaScript code outside a web browser.
• Express.js: Web application framework for Node.js, designed for building web applications and APIs.

## Repository Structure

The codebase is organized as follows:

- `api/`: Manages the Express.js routes and controllers.
  - `controllers/`: Contains the logic for processing API requests.
  - `routes/`: Defines API paths and links them to their controllers.
- `models/`: Defines the structure of the data entities.
- `public/`: Stores static files and includes the API documentation (`openapi.html`).
- `tests/`: Contains test cases for the application.
- `node_modules/`: A directory for npm dependencies (not tracked by Git).
- `.gitignore`: Lists files and directories ignored by Git.
- `Dockerfile`: Provides Docker containerization instructions.
- `index.js`: The server's entry point.
- `Makefile`: Defines a set of tasks for make utility.
- `package-lock.json`: Locks the versions of npm dependencies.
- `package.json`: Lists dependencies and scripts.
- `README.md`: Documentation for setting up and using the application.

## Quick Start

### Prerequisites

- Node.js
- npm
- Git
- Docker (for containerization)

### Setup and Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/calaldees/frameworks_and_languages_module.git
    cd /workspaces/frameworks_and_languages_module/server
2. Install the necessary dependencies
   npm install (it will install all the required dependencies)

Dependencies:
 body-parser: Middleware for parsing incoming request bodies in a middleware before handlers, available under req.body.
 cors: Package for providing a Connect/Express middleware that can be used to enable CORS (Cross-Origin Resource Sharing).
 express: Fast, unopinionated, minimalist web framework for Node.js, which is the backbone of this server.

DevDependencies:
jest: A delightful JavaScript Testing Framework with a focus on simplicity. It works as a test runner that let us access the DOM via jsdom.
supertest: A SuperAgent driven library for testing HTTP servers. It allows you to test your REST services by making test calls to your endpoints and ensuring they return the expected results.

3. Starting the server
   npm start
   the server will be running on https://urban-robot-57xg7qjv5wvfppv7-8000.app.github.dev

4. Check if the items are being created and the server is responding to the client go to:
   https://urban-robot-57xg7qjv5wvfppv7-8000.app.github.dev/api/items

5. Testing
   npm test ( to test locally)

## Contact
For questions or support, please contact: ma806@canterbury.ac.uk 

## License
This project is licensed under the MIT License. 

