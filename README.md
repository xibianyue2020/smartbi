# Smart BI 数据仪表盘

这是一个用于"大模型工程能力测试"的靶场项目,主题是 Smart BI 数据仪表盘,包含 React (Vite) 前端和一个 Node.js/Express Mock 接口服务。

## 目录结构

```
smartBI/
├── frontend/         # React + TypeScript + Vite 前端
├── mock-server/      # Node.js + Express Mock 接口
├── package.json      # 根 workspace 配置
└── Dockerfile        # 容器化配置
```

## 启动方式

```bash
# 安装依赖
npm install

# 启动后端 (端口 3000)
npm start

# 启动前端 (端口 5173)
npm run dev
```