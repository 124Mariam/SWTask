FROM node:14-alpine
WORKDIR /app
COPY Task.js package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD node Task.js
