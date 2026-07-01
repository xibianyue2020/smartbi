import type { ChartPlaceholder as ChartData } from '../types';

interface Props {
  chart: ChartData;
}

function ChartPlaceholder({ chart }: Props) {
  return (
    <div className="section">
      <h2>销售趋势</h2>
      <div className="chart-placeholder">
        {chart.note} · 系列: {chart.series.map((s) => s.name).join(' / ')}
      </div>
    </div>
  );
}

export default ChartPlaceholder;