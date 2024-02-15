# Use nginx as the base image
FROM nginx:alpine

# Copy the HTML files from the local directory to the nginx HTML directory
COPY  index.html /usr/share/nginx/html/

