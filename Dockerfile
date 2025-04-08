# Use official Node image
FROM node:20

# Create app directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire app
COPY . .

# Build the app
RUN npm run build

# Expose the port Next.js uses
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
