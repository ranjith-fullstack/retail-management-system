import React from 'react';

export default function TrendChart({ data }) {
  const maxValue = Math.max(...data.values);
  const points = data.values.map((value, index) => ({
    x: (index / (data.values.length - 1)) * 100,
    y: ((maxValue - value) / maxValue) * 100
  }));

  const pathData = points.reduce((path, point, index) => {
    const command = index === 0 ? 'M' : 'L';
    return `${path} ${command} ${point.x} ${point.y}`;
  }, '');

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">{data.title}</h3>
        <div className="flex gap-2">
          {data.legend.map((item) => (
            <span key={item} className="text-sm text-gray-500">{item}</span>
          ))}
        </div>
      </div>
      
      <div className="h-64 relative">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full overflow-visible"
          preserveAspectRatio="none"
        >
          <path
            d={pathData}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-blue-500"
          />
          {points.map((point, index) => (
            <circle
              key={index}
              cx={point.x}
              cy={point.y}
              r="1.5"
              className="fill-current text-blue-500"
            />
          ))}
        </svg>
      </div>
    </div>
  );
}