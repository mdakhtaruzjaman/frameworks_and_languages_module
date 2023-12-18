# Client-Side Application for Web Frameworks and Languages Module

This repository contains the client-side application of a web project for the Web Frameworks and Languages Module. It is a Vue.js application that interacts with the server-side component to perform operations such as listing items, adding new items, and managing existing items.

## Project Structure

- `node_modules/`: Contains all the npm packages required by the project.
- `public/`: Stores static assets like the favicon and index.html.
- `src/`: Source directory for the Vue.js application.
  - `api/`: Contains Axios instance for API calls.
  - `assets/`: Stores static files like images.
  - `components/`: Vue components for the application.
  - `router/`: Vue Router for handling navigation.
  - `store/`: Vuex store for state management.
  - `tests/`: Contains tests for the application.
  - `App.vue`: Root Vue component.
  - `main.js`: Entry point for the Vue app.
- `.gitignore`: Specifies intentionally untracked files to ignore.
- `babel.config.js`: Configuration for Babel.
- `Dockerfile`: Docker configuration for the client application.
- `package.json`: Lists project dependencies and scripts.
- `README.md`: Documentation for the project.
- `vue.config.js`: Configuration for Vue CLI.

## Features

- Add, list, and manage items through a user-friendly interface.
- Responsive design with BootstrapVue 3.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. navigate to the project directory:

   cd /workspaces/frameworks_and_languages_module/client
   npm install ( it will install all the necessary dependencies for this project)

2. Running the application
   npm run serve

3. Running tests
   npm test

## Dependencies

	•	Vue.js, Vue Router, Vuex for the core framework.
	•	Axios for HTTP requests.
	•	Bootstrap Vue for UI components.

## Contact
For questions or support, please contact: ma806@canterbury.ac.uk 

## License

This project is licensed under the MIT License - see LICENSE.md for details.
