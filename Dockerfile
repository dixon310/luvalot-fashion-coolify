# Use official Node image as the build stage
FROM node:20 AS build

# Create app directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire app and build
COPY . .
RUN npm run build

# Use a smaller base image for the runtime
FROM nginx:alpine

# Copy the static files from the build stage
COPY --from=build /app/out /usr/share/nginx/html

# Expose the port Nginx uses
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
