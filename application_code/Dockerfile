# Use Node.js as the base image
FROM node:20-slim

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (for caching dependencies)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project into the container
COPY . .

# Expose the default Vite port
EXPOSE 5173

# Start the application
CMD ["npm", "run", "dev", "--", "--host"]