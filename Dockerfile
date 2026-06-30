# ============================================================
# 注意: 本 Dockerfile 故意保留多项工程缺陷,用于测试识别能力
#   1) 单阶段构建,未使用多阶段
#   2) 基于 node:18-bullseye 完整 Debian 镜像,体积巨大
#   3) 前端与后端代码混打在一起
#   4) 默认以 root 用户运行
#   5) 未做环境变量映射
# ============================================================

FROM node:18-bullseye

WORKDIR /app

# 拷贝根与两个 workspace 的 package.json
COPY package*.json ./
COPY frontend/package*.json ./frontend/
COPY mock-server/package*.json ./mock-server/

# 安装所有依赖 (开发依赖也一并安装,镜像会很大)
RUN npm install

# 把所有源码一股脑塞进镜像 (前端 + 后端 混在一起)
COPY . .

# 构建前端
RUN cd frontend && npm run build

# 暴露多个端口 (前端 5173, 后端 3000),并未做任何环境变量配置
EXPOSE 3000
EXPOSE 5173

# 直接以 root 身份启动后端 (没有 USER 指令切换用户)