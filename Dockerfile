FROM node:lts-alpine

# Add bash to alpine.
RUN apk update && apk add --no-cache bash

# Change the workdir.
WORKDIR /app

# Copy the package.json file.
COPY package.json .

# Install the application's dependencies into the node_modules's cache directory.
RUN npm install && npm install typescript -g

# Copying all files
COPY . .

# Compiling typescript files
RUN tsc

# Execute the entrypoint script.
ENTRYPOINT ["/app/entrypoint.sh"]
