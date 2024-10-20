# Use an official Node runtime as a parent image
FROM node:20

# Set the working directory to /app
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package.json ./

# Install the dependencies using Yarn
RUN yarn install

# Копируем остальные файлы проекта
COPY . .

# Build the application (if applicable)
ENTRYPOINT npm start

# Expose port 3000 for the application
EXPOSE 3000

# Start the application
CMD ["yarn", "run", "dev"]

