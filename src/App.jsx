import React from 'react';

export default function App() {
  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1 style={{ color: '#f57c00' }}>FPT Telecom - Performance Dashboard</h1>
      <p>Hệ thống đang hoạt động và đã Deploy thành công lên Vercel!</p>
      <div style={{ display: 'inline-block', marginTop: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h2>Thống kê hệ thống</h2>
        <p>Trạng thái: <strong>Online</strong></p>
        <p>Thời gian phản hồi: <strong>24ms</strong></p>
      </div>
    </div>
  );
}
