# ---------- Stage 1: Build Angular app ----------
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build Angular app in production mode
RUN npm run build -- --configuration production

# ---------- Stage 2: Serve app with Nginx ----------
FROM nginx:stable-alpine

# Remove default nginx static content
RUN rm -rf /usr/share/nginx/html/*

# Copy built Angular files from previous stage
COPY --from=build /app/dist/frontend /usr/share/nginx/html

# Copy custom nginx config (optional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose HTTP port
EXPOSE 80

# Run Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
