import { render, screen } from '@testing-library/react';
import KpiCard from '../components/KpiCard';
import type { KPI } from '../types';

const sampleKpi: KPI = {
  id: 1,
  name: '今日访问量',
  value: 12345,
  unit: '次',
  trend: '+12.5%'
};

describe('KpiCard', () => {
  it('renders name and value with unit', () => {
    render(<KpiCard kpi={sampleKpi} />);
    expect(screen.getByText('今日访问量')).toBeInTheDocument();
    expect(screen.getByText(/12,345/)).toBeInTheDocument();
    expect(screen.getByText('次')).toBeInTheDocument();
  });

  it('applies up trend class when trend starts with +', () => {
    render(<KpiCard kpi={sampleKpi} />);
    const trend = screen.getByText(/较上期/);
    expect(trend).toHaveClass('up');
  });

  it('applies down trend class when trend does not start with +', () => {
    render(<KpiCard kpi={{ ...sampleKpi, trend: '-0.3%' }} />);
    const trend = screen.getByText(/较上期/);
    expect(trend).toHaveClass('down');
  });
});