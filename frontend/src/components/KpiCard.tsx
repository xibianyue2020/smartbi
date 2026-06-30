import type { KPI } from '../types';

interface Props {
  kpi: KPI;
}

function KpiCard({ kpi }: Props) {
  const isUp = kpi.trend.startsWith('+');
  return (
    <div className="kpi-card" data-testid="kpi-card">
      <div className="name">{kpi.name}</div>
      <div className="value">
        {kpi.value.toLocaleString()} <span style={{ fontSize: 14 }}>{kpi.unit}</span>
      </div>
      <div className={`trend ${isUp ? 'up' : 'down'}`}>较上期 {kpi.trend}</div>
    </div>
  );
}

export default KpiCard;