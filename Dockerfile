FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN if [ -f package.json ] && node -e "const s=require('./package.json').scripts||{}; process.exit(s.build?0:1)"; then npm run build; fi
FROM node:20-alpine
WORKDIR /app
RUN npm install -g serve@14
COPY --from=build /app /app
ENV NODE_ENV=production HOSTNAME=0.0.0.0 PORT=3000
EXPOSE 3000
CMD ["sh", "-c", "if [ -d build ] && [ -f build/index.html ]; then exec serve -s build -l 3000; elif [ -f package.json ]; then exec npm start; else exec sleep infinity; fi"]
