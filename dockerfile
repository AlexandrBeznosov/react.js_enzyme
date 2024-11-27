# Use the official Node.js image from the Docker Hub and specify the version
FROM node:16.10.1

# Create and set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the project dependencies
RUN yarn

# Copy the rest of the project files
COPY . .

# Expose the port the app runs on (change this if your app uses a different port)
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]