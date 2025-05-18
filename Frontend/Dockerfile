# Stage 1: Build the Angular app
FROM node:20 AS build

# Set the working directory in the container
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy all source code to the container
COPY . .

# Build the Angular app for production
RUN npm run build -- --configuration production

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Remove default Nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built Angular app to Nginx's HTML directory
COPY --from=build /app/dist/<your-app-name> /usr/share/nginx/html

# Copy custom nginx config (optional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

