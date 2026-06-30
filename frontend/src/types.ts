export interface KPI {
  id: number;
  name: string;
  value: number;
  unit: string;
  trend: string;
}

export interface SalesByRegion {
  region: string;
  sales: number;
}

export interface Order {
  id: string;
  customer: string;
  amount: number;
  status: string;
}

export interface ChartPlaceholder {
  note: string;
  series: { name: string; data: number[] }[];
}

export interface DashboardData {
  title: string;
  updatedAt: string;
  kpis: KPI[];
  salesByRegion: SalesByRegion[];
  recentOrders: Order[];
  chartPlaceholder: ChartPlaceholder;
}