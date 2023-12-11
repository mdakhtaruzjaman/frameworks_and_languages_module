# Use the official Node.js 14 image.
FROM node:14

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./

# Install production dependencies.
RUN npm install --only=production

# Copy local code to the container image.
COPY . .

# Bind the Express app to port 3000.
EXPOSE 3000

# Define the command to run your app using CMD which defines your runtime.
# Here we will use the basic npm start which will run node server.js to start your server
CMD [ "npm", "start" ]
