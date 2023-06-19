# Etap pierwszy
FROM node:latest AS builder
WORKDIR /app

COPY package.json ./
COPY index.js .

RUN npm install

# Etap drugi
FROM node:14-slim
WORKDIR /app

COPY --from=builder /app .

# Healthcheck
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:5000/ || exit 1

CMD ["node", "index.js"]
EXPOSE 5000
