# Use an official Node runtime as a parent image
FROM node:18-alpine as build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Build the app
RUN npm run build

# Use serve to serve the app on container startup
FROM node:18-alpine

# Install serve - a lightweight server capable of serving static files
RUN npm install -g serve

# Copy the build artifacts from the previous stage
COPY --from=build /usr/src/app/build /usr/share/app

# Set the working directory to where we have our build files
WORKDIR /usr/share/app

# Instruct the container to listen on port 3000
EXPOSE 3000

# Command to run the app using serve
CMD ["serve", "-s", ".", "-l", "3000"]
