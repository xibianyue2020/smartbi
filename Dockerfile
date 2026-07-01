

FROM node:18-bullseye

WORKDIR /app

COPY package*.json ./
COPY frontend/package*.json ./frontend/
COPY mock-server/package*.json ./mock-server/

RUN npm install

COPY . .

# 构建前端
RUN cd frontend && npm run build

EXPOSE 3000
EXPOSE 5173
