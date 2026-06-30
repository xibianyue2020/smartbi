import { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';
import type { DashboardData } from './types';

function App() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/dashboard-data')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        return res.json() as Promise<DashboardData>;
      })
      .then((json) => {
        if (!cancelled) {
          setData(json);
          setLoading(false);
        }
      })
      .catch((err: Error) => {
        if (!cancelled) {
          setError(err.message || '加载失败');
          setLoading(false);
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) return <div className="loading">数据加载中...</div>;
  if (error) return <div className="error">数据加载失败: {error}</div>;
  if (!data) return <div className="loading">暂无数据</div>;

  return <Dashboard data={data} />;
}

export default App;