# Use an ARM64 compatible Node.js image for Apple Silicon
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Install global dependencies
RUN npm install -g gatsby-cli --unsafe-perm=true

# Copy only the package.json and yarn.lock first to install dependencies
COPY package.json yarn.lock ./

# Install project dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Expose port 9000 for Gatsby's default development server
EXPOSE 9000

# Default command to run Gatsby's development server
CMD ["npm", "run", "build"]
CMD ["npm", "run", "serve"]
