import React, { useEffect, useState } from 'react';

const STOCKS = ["MWG", "TCB", "HPG", "FPT", "HCM"];

const mockData = () => {
  return STOCKS.map(symbol => ({
    symbol,
    price: (Math.random() * 100 + 20).toFixed(2),
    change: (Math.random() * 4 - 2).toFixed(2),
    volume: Math.floor(Math.random() * 1000000),
    updatedAt: new Date().toLocaleString(),
  }));
};

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetched = mockData();
    setData(fetched);
  }, []);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Bảng Theo Dõi Cổ Phiếu (HOSE)</h1>
      <div className="overflow-x-auto border rounded-lg">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Mã</th>
              <th className="px-4 py-2">Giá hiện tại</th>
              <th className="px-4 py-2">Thay đổi (%)</th>
              <th className="px-4 py-2">Khối lượng</th>
              <th className="px-4 py-2">Cập nhật lúc</th>
            </tr>
          </thead>
          <tbody>
            {data.map(stock => (
              <tr key={stock.symbol} className="border-t">
                <td className="px-4 py-2 font-semibold">{stock.symbol}</td>
                <td className="px-4 py-2">{stock.price}</td>
                <td className={`px-4 py-2 ${parseFloat(stock.change) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {stock.change}%
                </td>
                <td className="px-4 py-2">{stock.volume.toLocaleString()}</td>
                <td className="px-4 py-2">{stock.updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}