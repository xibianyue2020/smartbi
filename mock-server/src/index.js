const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// 健康检查
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: Date.now() });
});

// Dashboard 数据接口
app.get('/api/dashboard-data', (req, res) => {
  const data = {
    title: 'Smart BI 数据仪表盘',
    updatedAt: new Date().toISOString(),
    kpis: [
      { id: 1, name: '今日访问量', value: 12835, unit: '次', trend: '+12.5%' },
      { id: 2, name: '新增用户', value: 342, unit: '人', trend: '+8.1%' },
      { id: 3, name: '订单总数', value: 1890, unit: '单', trend: '+3.7%' },
      { id: 4, name: '转化率', value: 4.6, unit: '%', trend: '-0.3%' }
    ],
    salesByRegion: [
      { region: '华东', sales: 5240 },
      { region: '华北', sales: 4310 },
      { region: '华南', sales: 3980 },
      { region: '西部', sales: 2160 },
      { region: '东北', sales: 1850 }
    ],
    recentOrders: [
      { id: 'ORD-1001', customer: '张三', amount: 1280.5, status: '已完成' },
      { id: 'ORD-1002', customer: '李四', amount: 599.0,  status: '配送中' },
      { id: 'ORD-1003', customer: '王五', amount: 2399.9, status: '待支付' },
      { id: 'ORD-1004', customer: '赵六', amount: 89.0,   status: '已完成' },
      { id: 'ORD-1005', customer: '钱七', amount: 1450.0, status: '已完成' },
      { id: 'ORD-1006', customer: '孙八', amount: 768.0,  status: '已取消' }
    ],
    chartPlaceholder: {
      note: '占位图表数据,实际项目接入 ECharts/Recharts 等',
      series: [
        { name: '本月', data: [120, 132, 101, 134, 90, 230, 210] },
        { name: '上月', data: [220, 182, 191, 234, 290, 330, 310] }
      ]
    }
  };
  res.json(data);
});

// 兜底 404
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found', path: req.path });
});

app.listen(PORT, () => {
  console.log(`[mock-server] listening on http://localhost:${PORT}`);
});