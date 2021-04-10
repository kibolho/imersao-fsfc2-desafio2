FROM node:14.15.4 AS builder
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
COPY . .
RUN npm run build

# two stages build for lowest image size
FROM node:14.15.4-alpine3.12
ENV NODE_ENV=production
WORKDIR /app
COPY --from=builder /app ./
#EXPOSE 3000
#CMD ["npm", "run", "start:prod"]
CMD ["npm", "start"]