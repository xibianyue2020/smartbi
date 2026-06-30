import type { Order } from '../types';

interface Props {
  orders: Order[];
}

function OrdersTable({ orders }: Props) {
  return (
    <div className="section">
      <h2>最近订单</h2>
      <table>
        <thead>
          <tr>
            <th>订单号</th>
            <th>客户</th>
            <th>金额(元)</th>
            <th>状态</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.customer}</td>
              <td>{o.amount.toFixed(2)}</td>
              <td className={`status-${o.status}`}>{o.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersTable;