FROM node:latest
COPY package*.json ./
RUN npm install --force
COPY . .
EXPOSE 8080
CMD ["node", "src/index.js"]