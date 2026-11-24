FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN if [ -f package.json ]; then npm ci --only=production || npm install --omit=dev; fi

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
