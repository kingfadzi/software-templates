# Stage 1: Build the React application
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application
COPY . .

# Build the React application
RUN yarn build

# Stage 2: Set up the Node.js server
FROM node:18

# Set working directory
WORKDIR /app

# Copy only the server source code and package.json
COPY package.json yarn.lock ./
COPY src/server.ts ./src/

# Install dependencies
RUN yarn install

# Copy the build output from the previous stage
COPY --from=builder /app/public /app/public

# Build the server code
RUN yarn add typescript ts-node
RUN yarn tsc src/server.ts --outDir dist

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "dist/server.js"]
