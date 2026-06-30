import type { DashboardData } from '../types';
import KpiCard from './KpiCard';
import OrdersTable from './OrdersTable';
import ChartPlaceholder from './ChartPlaceholder';

interface Props {
  data: DashboardData;
}

function Dashboard({ data }: Props) {
  return (
    <div className="dashboard" data-testid="dashboard">
      <div className="dashboard-header">
        <h1>{data.title}</h1>
        <span className="updated">更新时间: {data.updatedAt}</span>
      </div>

      <div className="kpi-grid">
        {data.kpis.map((kpi) => (
          <KpiCard key={kpi.id} kpi={kpi} />
        ))}
      </div>

      <ChartPlaceholder chart={data.chartPlaceholder} />

      <div className="section">
        <h2>各区域销售额</h2>
        <table>
          <thead>
            <tr>
              <th>区域</th>
              <th>销售额(元)</th>
            </tr>
          </thead>
          <tbody>
            {data.salesByRegion.map((r) => (
              <tr key={r.region}>
                <td>{r.region}</td>
                <td>{r.sales.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <OrdersTable orders={data.recentOrders} />
    </div>
  );
}

export default Dashboard;