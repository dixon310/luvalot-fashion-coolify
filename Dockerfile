# --- Stage 1: Build Stage ---
FROM node:20-alpine AS build

# Set working directory for the build stage
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
# This means npm install will only rerun if these files change
COPY package*.json ./

# Install dependencies, including devDependencies for building
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the Next.js application
# Using 'npm run build' will typically output to a '.next' directory
RUN npm run build

# --- Stage 2: Production Stage ---
FROM node:20-alpine AS production

# Set working directory for the production stage
WORKDIR /app

# Only copy necessary files from the build stage
# Copy built Next.js app, package.json, and node_modules (for production dependencies)
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

# If you have custom server.js or other files for production, copy them too
# For example, if you use a custom server.js for Next.js:
# COPY --from=build /app/server.js ./server.js

# Set environment variables for Next.js production
ENV NODE_ENV=production

# Expose the port Next.js listens on
EXPOSE 3000

# Command to start the Next.js production server
CMD ["npm", "start"]
