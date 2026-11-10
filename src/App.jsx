import React, { useState } from 'react';
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function App() {
  const [activeTab, setActiveTab] = useState('tongquan');

  const chartData = [
    { name: 'Xã Ba Vì', congNo: 55, traTruoc: 10, roiMang: 0.12 },
    { name: 'Xã Bất Bạt', congNo: 58, traTruoc: 12, roiMang: 0.15 },
    { name: 'Xã Cổ Động', congNo: 53, traTruoc: 11, roiMang: 0.18 },
    { name: 'Đoài Phương', congNo: 52, traTruoc: 14, roiMang: 0.19 },
    { name: 'Xã Hạ Bằng', congNo: 56, traTruoc: 10, roiMang: 0.16 },
    { name: 'Xã Hòa Lạc', congNo: 62, traTruoc: 13, roiMang: 0.32 },
    { name: 'Xã Quảng Oai', congNo: 54, traTruoc: 12, roiMang: 0.14 },
    { name: 'Xã Suối Hai', congNo: 51, traTruoc: 15, roiMang: 0.10 },
    { name: 'Xã Thạch Thất', congNo: 52, traTruoc: 11, roiMang: 0.22 },
    { name: 'Xã Yên Bài', congNo: 48, traTruoc: 13, roiMang: 0.18 },
    { name: 'Xã Yên Xuân', congNo: 47, traTruoc: 10, roiMang: 0.11 },
    { name: 'Xã Đan Phượng', congNo: 55, traTruoc: 12, roiMang: 0.13 },
  ];

  const blockHn91 = [
    { block: 'Hiennt181', au: 5267, rm: 0, congno: '55.21%', tratruoc: '8.1%', thietbi: '22.2%', cll2: 6.2, huy: 0, rmau: '0%' },
    { block: 'Mott5', au: 5430, rm: 0, congno: '52.72%', tratruoc: '13.1%', thietbi: '25.0%', cll2: 2.9, huy: 0, rmau: '0%' },
    { block: 'ThuyPT73', au: 4239, rm: 0, congno: '57.32%', tratruoc: '10.7%', thietbi: '41.7%', cll2: 8.5, huy: 0, rmau: '0%' },
    { block: 'Luonggh', au: 4737, rm: 1, congno: '52.15%', tratruoc: '7.7%', thietbi: '37.5%', cll2: 4.4, huy: 0, rmau: '0.02%' },
    { block: 'Lanhn3', au: 5017, rm: 2, congno: '57.15%', tratruoc: '7.8%', thietbi: '33.3%', cll2: 6.9, huy: 0, rmau: '0.04%' },
  ];

  const blockHn92 = [
    { block: 'Thunt20', au: 4929, rm: -1, congno: '58.21%', tratruoc: '8.8%', thietbi: '25.0%', cll2: 3.4, huy: 0, rmau: '-0.02%' },
    { block: 'Hanhnt17', au: 4702, rm: 0, congno: '48.38%', tratruoc: '6.9%', thietbi: '25.0%', cll2: 4.5, huy: 0, rmau: '0%' },
    { block: 'Hiennt191', au: 4744, rm: 0, congno: '54.77%', tratruoc: '12.9%', thietbi: '50.0%', cll2: 9.8, huy: 0, rmau: '0%' },
    { block: 'Thuynt447', au: 3516, rm: 0, congno: '60.47%', tratruoc: '8.1%', thietbi: '18.8%', cll2: 17.9, huy: 0, rmau: '0%' },
    { block: 'Yenkt2', au: 5122, rm: 0, congno: '59.64%', tratruoc: '18.5%', thietbi: '41.7%', cll2: 0.0, huy: 0, rmau: '0%' },
  ];

  const preDataHN91 = [
    { acc: 'Mott5', tong: 623, datt: 598, tt1t: 5, vvip: 0, tyle: '95.2%', conthu: -32 },
    { acc: 'Netpt2', tong: 464, datt: 438, tt1t: 3, vvip: 3, tyle: '94.4%', conthu: -20 },
    { acc: 'ThuyPT73', tong: 479, datt: 445, tt1t: 2, vvip: 1, tyle: '92.7%', conthu: -13 },
    { acc: 'LinhTK2', tong: 523, datt: 480, tt1t: 1, vvip: 2, tyle: '91.9%', conthu: -10 },
    { acc: 'ThuNT20', tong: 553, datt: 505, tt1t: 1, vvip: 1, tyle: '91.3%', conthu: -7 },
    { acc: 'HuongKTH', tong: 512, datt: 469, tt1t: 3, vvip: 0, tyle: '91.0%', conthu: -5 },
    { acc: 'Doannt9', tong: 494, datt: 453, tt1t: 6, vvip: 2, tyle: '90.9%', conthu: -4 },
    { acc: 'LanHN3', tong: 607, datt: 554, tt1t: 4, vvip: 0, tyle: '90.6%', conthu: -4 },


cat << 'EOF' > src/App.jsx
import React, { useState } from 'react';
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function App() {
  const [activeTab, setActiveTab] = useState('tongquan');

  const chartData = [
    { name: 'Xã Ba Vì', congNo: 55, traTruoc: 10, roiMang: 0.12 },
    { name: 'Xã Bất Bạt', congNo: 58, traTruoc: 12, roiMang: 0.15 },
    { name: 'Xã Cổ Động', congNo: 53, traTruoc: 11, roiMang: 0.18 },
    { name: 'Đoài Phương', congNo: 52, traTruoc: 14, roiMang: 0.19 },
    { name: 'Xã Hạ Bằng', congNo: 56, traTruoc: 10, roiMang: 0.16 },
    { name: 'Xã Hòa Lạc', congNo: 62, traTruoc: 13, roiMang: 0.32 },
    { name: 'Xã Quảng Oai', congNo: 54, traTruoc: 12, roiMang: 0.14 },
    { name: 'Xã Suối Hai', congNo: 51, traTruoc: 15, roiMang: 0.10 },
    { name: 'Xã Thạch Thất', congNo: 52, traTruoc: 11, roiMang: 0.22 },
    { name: 'Xã Yên Bài', congNo: 48, traTruoc: 13, roiMang: 0.18 },
    { name: 'Xã Yên Xuân', congNo: 47, traTruoc: 10, roiMang: 0.11 },
    { name: 'Xã Đan Phượng', congNo: 55, traTruoc: 12, roiMang: 0.13 },
  ];

  const blockHn91 = [
    { block: 'Hiennt181', au: 5267, rm: 0, congno: '55.21%', tratruoc: '8.1%', thietbi: '22.2%', cll2: 6.2, huy: 0, rmau: '0%' },
    { block: 'Mott5', au: 5430, rm: 0, congno: '52.72%', tratruoc: '13.1%', thietbi: '25.0%', cll2: 2.9, huy: 0, rmau: '0%' },
    { block: 'ThuyPT73', au: 4239, rm: 0, congno: '57.32%', tratruoc: '10.7%', thietbi: '41.7%', cll2: 8.5, huy: 0, rmau: '0%' },
    { block: 'Luonggh', au: 4737, rm: 1, congno: '52.15%', tratruoc: '7.7%', thietbi: '37.5%', cll2: 4.4, huy: 0, rmau: '0.02%' },
    { block: 'Lanhn3', au: 5017, rm: 2, congno: '57.15%', tratruoc: '7.8%', thietbi: '33.3%', cll2: 6.9, huy: 0, rmau: '0.04%' },
  ];

  const blockHn92 = [
    { block: 'Thunt20', au: 4929, rm: -1, congno: '58.21%', tratruoc: '8.8%', thietbi: '25.0%', cll2: 3.4, huy: 0, rmau: '-0.02%' },
    { block: 'Hanhnt17', au: 4702, rm: 0, congno: '48.38%', tratruoc: '6.9%', thietbi: '25.0%', cll2: 4.5, huy: 0, rmau: '0%' },
    { block: 'Hiennt191', au: 4744, rm: 0, congno: '54.77%', tratruoc: '12.9%', thietbi: '50.0%', cll2: 9.8, huy: 0, rmau: '0%' },
    { block: 'Thuynt447', au: 3516, rm: 0, congno: '60.47%', tratruoc: '8.1%', thietbi: '18.8%', cll2: 17.9, huy: 0, rmau: '0%' },
    { block: 'Yenkt2', au: 5122, rm: 0, congno: '59.64%', tratruoc: '18.5%', thietbi: '41.7%', cll2: 0.0, huy: 0, rmau: '0%' },
  ];

  const preDataHN91 = [
    { acc: 'Mott5', tong: 623, datt: 598, tt1t: 5, vvip: 0, tyle: '95.2%', conthu: -32 },
    { acc: 'Netpt2', tong: 464, datt: 438, tt1t: 3, vvip: 3, tyle: '94.4%', conthu: -20 },
    { acc: 'ThuyPT73', tong: 479, datt: 445, tt1t: 2, vvip: 1, tyle: '92.7%', conthu: -13 },
    { acc: 'LinhTK2', tong: 523, datt: 480, tt1t: 1, vvip: 2, tyle: '91.9%', conthu: -10 },
    { acc: 'ThuNT20', tong: 553, datt: 505, tt1t: 1, vvip: 1, tyle: '91.3%', conthu: -7 },
    { acc: 'HuongKTH', tong: 512, datt: 469, tt1t: 3, vvip: 0, tyle: '91.0%', conthu: -5 },
    { acc: 'Doannt9', tong: 494, datt: 453, tt1t: 6, vvip: 2, tyle: '90.9%', conthu: -4 },
    { acc: 'LanHN3', tong: 607, datt: 554, tt1t: 4, vvip: 0, tyle: '90.6%', conthu: -4 },
    { acc: 'Hoant197', tong: 553, datt: 501, tt1t: 5, vvip: 1, tyle: '89.9%', conthu: 1 },
    { acc: 'Tiendt15', tong: 491, datt: 438, tt1t: 4, vvip: 3, tyle: '88.9%', conthu: 5 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans p-4">
      <header className="bg-white rounded-lg shadow-sm p-4 mb-4 flex flex-wrap items-center justify-between border border-slate-200">
        <div className="flex items-center space-x-3">
          <div className="bg-orange-500 text-white font-extrabold text-xl px-3 py-1 rounded">FPT</div>
          <div>
            <h1 className="text-xl font-bold text-blue-900 uppercase">FPT Telecom - Hệ Thống Báo Cáo KHỐI DVKH</h1>
            <p className="text-xs text-slate-500">Đơn vị HN9 | Số liệu lũy kế cập nhật đến ngày 07/11/2026</p>
          </div>
        </div>

        <div className="flex space-x-2 bg-slate-100 p-1 rounded-lg border border-slate-200">
          <button
            onClick={() => setActiveTab('tongquan')}
            className={`px-4 py-2 text-xs font-bold rounded-md transition ${activeTab === 'tongquan' ? 'bg-blue-700 text-white shadow' : 'text-slate-600 hover:bg-slate-200'}`}
          >
            📊 BÁO CÁO TỔNG QUAN
          </button>
          <button
            onClick={() => setActiveTab('tratruoc')}
            className={`px-4 py-2 text-xs font-bold rounded-md transition ${activeTab === 'tratruoc' ? 'bg-blue-700 text-white shadow' : 'text-slate-600 hover:bg-slate-200'}`}
          >
            💳 ĐÁO HẠN TRẢ TRƯỚC (T10.2026)
          </button>
        </div>
      </header>

      {activeTab === 'tongquan' && (
        <div className="space-y-4">
          <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <span className="bg-blue-800 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">1. TỔNG QUAN THỰC HIỆN</span>
              <div className="flex items-center space-x-2 bg-blue-950 text-white px-3 py-1 rounded text-xs font-bold">
                <span>👤 TỔNG AU:</span>
                <span className="bg-blue-600 px-2 py-0.5 rounded text-sm">84.631</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-xs">
              <div className="bg-emerald-50 border border-emerald-300 rounded-lg p-3">
                <div className="text-emerald-800 font-bold mb-1">RM INTERNET</div>
                <div className="text-slate-500 text-[11px]">KH: 552 | Thực hiện:</div>
                <div className="flex items-baseline space-x-2 mt-1">
                  <span className="text-2xl font-black text-slate-800">65 ca</span>
                  <span className="bg-emerald-500 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">TỐT (11.8%)</span>
                </div>
              </div>
              <div className="bg-emerald-50 border border-emerald-300 rounded-lg p-3">
                <div className="text-emerald-800 font-bold mb-1">RM TRUYỀN HÌNH</div>
                <div className="text-slate-500 text-[11px]">KH: 404 | Thực hiện:</div>
                <div className="flex items-baseline space-x-2 mt-1">
                  <span className="text-2xl font-black text-slate-800">15 ca</span>
                  <span className="bg-emerald-500 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">TỐT (3.7%)</span>
                </div>
              </div>
              <div className="bg-red-50 border border-red-300 rounded-lg p-3">
                <div className="text-red-700 font-bold mb-1">CÔNG NỢ</div>
                <div className="text-slate-500 text-[11px]">KH: 99.70% | Thực hiện:</div>
                <div className="flex items-baseline space-x-2 mt-1">
                  <span className="text-2xl font-black text-red-600">56.12%</span>
                  <span className="bg-amber-100 text-amber-800 text-[10px] px-1.5 py-0.5 rounded font-bold">CẦN TĂNG ⚠️</span>
                </div>
              </div>
              <div className="bg-red-50 border border-red-300 rounded-lg p-3">
                <div className="text-red-700 font-bold mb-1">TRẢ TRƯỚC</div>
                <div className="text-slate-500 text-[11px]">KH: 87.0% | Thực hiện:</div>
                <div className="flex items-baseline space-x-2 mt-1">
                  <span className="text-2xl font-black text-red-600">10.29%</span>
                  <span className="bg-amber-100 text-amber-800 text-[10px] px-1.5 py-0.5 rounded font-bold">CẦN TĂNG ⚠️</span>
                </div>
              </div>
              <div className="bg-red-50 border border-red-300 rounded-lg p-3">
                <div className="text-red-700 font-bold mb-1">THU HỒI THIẾT BỊ</div>
                <div className="text-slate-500 text-[11px]">KH: 65.0% | Thực hiện:</div>
                <div className="flex items-baseline space-x-2 mt-1">
                  <span className="text-2xl font-black text-red-600">25.00%</span>
                  <span className="bg-amber-100 text-amber-800 text-[10px] px-1.5 py-0.5 rounded font-bold">CẦN TĂNG ⚠️</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-bold text-slate-700 uppercase">2. BIỂU ĐỒ SO SÁNH CÔNG NỢ, TRẢ TRƯỚC VÀ TỶ LỆ RỜI MẠNG (NET/AU) THEO XÃ / PHƯỜNG</span>
              <div className="flex items-center space-x-4 text-[11px]">
                <span className="flex items-center"><span className="w-3 h-3 bg-blue-800 mr-1 inline-block"></span> Công nợ (%)</span>
                <span className="flex items-center"><span className="w-3 h-3 bg-orange-500 mr-1 inline-block"></span> Trả trước (%)</span>
                <span className="flex items-center text-red-600 font-bold"><span className="w-3 h-0.5 bg-red-600 mr-1 inline-block"></span> Rời mạng Net/AU (%)</span>
              </div>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" angle={-35} textAnchor="end" interval={0} tick={{ fontSize: 10 }} />
                  <YAxis yAxisId="left" unit="%" domain={[0, 100]} tick={{ fontSize: 10 }} />
                  <YAxis yAxisId="right" orientation="right" unit="%" domain={[0, 0.5]} tick={{ fontSize: 10 }} />
                  <Tooltip />
                  <Bar yAxisId="left" dataKey="congNo" fill="#1e3a8a" barSize={12} />
                  <Bar yAxisId="left" dataKey="traTruoc" fill="#f97316" barSize={12} />
                  <Line yAxisId="right" type="monotone" dataKey="roiMang" stroke="#dc2626" strokeWidth={2.5} dot={{ r: 4 }} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
            <span className="bg-blue-800 text-white text-xs font-bold px-3 py-1 rounded-full uppercase inline-block mb-3">
              3. KẾT QUẢ THỰC HIỆN CHI TIẾT THEO BLOCK NHÂN SỰ
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[11px]">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-slate-200 text-center">
                  <thead className="bg-slate-100 text-slate-700 font-bold">
                    <tr>
                      <th className="p-1 border">Block</th>
                      <th className="p-1 border">AU</th>
                      <th className="p-1 border">Đã RM</th>
                      <th className="p-1 border">CÔNG NỢ</th>
                      <th className="p-1 border">TRẢ TRƯỚC</th>
                      <th className="p-1 border">THIẾT BỊ</th>
                      <th className="p-1 border">CLL2</th>
                      <th className="p-1 border">TỶ LỆ RM/AU</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blockHn91.map((r, i) => (
                      <tr key={i} className="hover:bg-slate-50">
                        <td className="p-1 border font-bold text-left">{r.block}</td>
                        <td className="p-1 border">{r.au.toLocaleString()}</td>
                        <td className="p-1 border">{r.rm}</td>
                        <td className="p-1 border">{r.congno}</td>
                        <td className="p-1 border">{r.tratruoc}</td>
                        <td className="p-1 border">{r.thietbi}</td>
                        <td className="p-1 border">{r.cll2}</td>
                        <td className="p-1 border font-bold text-emerald-600">{r.rmau}</td>
                      </tr>
                    ))}
                    <tr className="bg-blue-50 font-bold text-blue-900">
                      <td className="p-1 border text-left">TỔNG HN9.1</td>
                      <td className="p-1 border">53,156</td>
                      <td className="p-1 border">26</td>
                      <td className="p-1 border">55.70%</td>
                      <td className="p-1 border">9.8%</td>
                      <td className="p-1 border">22.0%</td>
                      <td className="p-1 border">6.8</td>
                      <td className="p-1 border">0.10%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-slate-200 text-center">
                  <thead className="bg-slate-100 text-slate-700 font-bold">
                    <tr>
                      <th className="p-1 border">Block</th>
                      <th className="p-1 border">AU</th>
                      <th className="p-1 border">Đã RM</th>
                      <th className="p-1 border">CÔNG NỢ</th>
                      <th className="p-1 border">TRẢ TRƯỚC</th>
                      <th className="p-1 border">THIẾT BỊ</th>
                      <th className="p-1 border">CLL2</th>
                      <th className="p-1 border">TỶ LỆ RM/AU</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blockHn92.map((r, i) => (
                      <tr key={i} className="hover:bg-slate-50">
                        <td className="p-1 border font-bold text-left">{r.block}</td>
                        <td className="p-1 border">{r.au.toLocaleString()}</td>
                        <td className="p-1 border">{r.rm}</td>
                        <td className="p-1 border">{r.congno}</td>
                        <td className="p-1 border">{r.tratruoc}</td>
                        <td className="p-1 border">{r.thietbi}</td>
                        <td className="p-1 border">{r.cll2}</td>
                        <td className="p-1 border font-bold text-emerald-600">{r.rmau}</td>
                      </tr>
                    ))}
                    <tr className="bg-red-50 font-bold text-red-700">
                      <td className="p-1 border text-left">TỔNG HN9.2</td>
                      <td className="p-1 border">31,371</td>
                      <td className="p-1 border">3</td>
                      <td className="p-1 border">56.78%</td>
                      <td className="p-1 border">11.1%</td>
                      <td className="p-1 border">25.0%</td>
                      <td className="p-1 border">7.0</td>
                      <td className="p-1 border">0.04%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
            <span className="bg-blue-800 text-white text-xs font-bold px-3 py-1 rounded-full uppercase inline-block mb-3">
              4. HÀNH ĐỘNG TRỌNG TÂM
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center text-xs">
              <div className="border border-orange-400 rounded-lg p-3 bg-orange-50/30">
                <div className="font-bold text-orange-600 mb-1 uppercase">HÀNH ĐỘNG 1</div>
                <p className="text-slate-700 font-semibold">Tập trung thu trả trước & thu nợ rủi ro</p>
              </div>
              <div className="border border-blue-400 rounded-lg p-3 bg-blue-50/30">
                <div className="font-bold text-blue-600 mb-1 uppercase">HÀNH ĐỘNG 2</div>
                <p className="text-slate-700 font-semibold">Tối ưu thu hồi thiết bị tái sử dụng</p>
              </div>
              <div className="border border-red-400 rounded-lg p-3 bg-red-50/30">
                <div className="font-bold text-red-600 mb-1 uppercase">HÀNH ĐỘNG 3</div>
                <p className="text-slate-700 font-semibold">Triệt tiêu RM đáng tiếc</p>
              </div>
              <div className="border border-emerald-400 rounded-lg p-3 bg-emerald-50/30">
                <div className="font-bold text-emerald-600 mb-1 uppercase">HÀNH ĐỘNG 4</div>
                <p className="text-slate-700 font-semibold">Tăng tỷ lệ TPTC tập KH nguy cơ rời mạng</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'tratruoc' && (
        <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm max-w-4xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-lg font-extrabold text-slate-800">ĐÁO HẠN TRẢ TRƯỚC T10.2026</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-slate-400 text-xs text-center">
              <thead>
                <tr className="bg-emerald-700 text-white font-bold text-sm">
                  <th colSpan="7" className="p-2 border border-slate-400">KẾ HOẠCH THÁNG</th>
                </tr>
                <tr className="bg-emerald-600 text-white font-bold">
                  <th className="p-2 border border-slate-400">ACC IS</th>
                  <th className="p-2 border border-slate-400">Tổng</th>
                  <th className="p-2 border border-slate-400">Đã TT</th>
                  <th className="p-2 border border-slate-400 bg-red-600">Tra truoc 1T</th>
                  <th className="p-2 border border-slate-400 bg-red-600">Loại V.VIP</th>
                  <th className="p-2 border border-slate-400">Tỷ lệ</th>
                  <th className="p-2 border border-slate-400 bg-amber-400 text-slate-900">Còn phải thu 90%</th>
                </tr>
              </thead>
              <tbody>
                {preDataHN91.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="p-1.5 border border-slate-300 font-bold text-emerald-700 text-left">{row.acc}</td>
                    <td className="p-1.5 border border-slate-300 font-bold">{row.tong}</td>
                    <td className="p-1.5 border border-slate-300">{row.datt}</td>
                    <td className="p-1.5 border border-slate-300">{row.tt1t}</td>
                    <td className="p-1.5 border border-slate-300 font-bold">{row.vvip}</td>
                    <td className="p-1.5 border border-slate-300 font-bold bg-lime-200 text-emerald-900">{row.tyle}</td>
                    <td className={`p-1.5 border border-slate-300 font-bold ${row.conthu < 0 ? 'text-emerald-700' : 'text-red-600 bg-red-50'}`}>
                      {row.conthu}
                    </td>
                  </tr>
                ))}
                <tr className="bg-emerald-200 font-extrabold text-emerald-950">
                  <td className="p-2 border border-slate-400 text-left">HN9.1</td>
                  <td className="p-2 border border-slate-400">6927</td>
                  <td className="p-2 border border-slate-400">6321</td>
                  <td className="p-2 border border-slate-400">40</td>
                  <td className="p-2 border border-slate-400">20</td>
                  <td className="p-2 border border-slate-400">90.9%</td>
                  <td className="p-2 border border-slate-400 text-emerald-800">-272</td>
                </tr>
                <tr className="bg-amber-300 font-black text-amber-950 text-sm">
                  <td className="p-2 border border-slate-400 text-left">HN9</td>
                  <td className="p-2 border border-slate-400">10136</td>
                  <td className="p-2 border border-slate-400">9278</td>
                  <td className="p-2 border border-slate-400">91</td>
                  <td className="p-2 border border-slate-400">26</td>
                  <td className="p-2 border border-slate-400 text-emerald-900">90.9%</td>
                  <td className="p-2 border border-slate-400 text-emerald-900">-88</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
