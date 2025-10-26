"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ChartDataPoint {
  name: string;
  revenue: number;
  conversion: number;
}

const ConversionTrendsChart: React.FC = () => {
  const chartData: ChartDataPoint[] = [
    { name: "Jan 1", revenue: 50, conversion: 30 },
    { name: "Jan 8", revenue: 80, conversion: 60 },
    { name: "Jan 15", revenue: 70, conversion: 50 },
    { name: "Jan 22", revenue: 120, conversion: 90 },
    { name: "Jan 29", revenue: 100, conversion: 70 },
    { name: "Feb 5", revenue: 140, conversion: 100 },
    { name: "Feb 12", revenue: 120, conversion: 90 },
    { name: "Feb 19", revenue: 160, conversion: 120 },
    { name: "Feb 26", revenue: 180, conversion: 140 },
  ];

  return (
    <div className="bg-white rounded-[20px] sm:p-[20px] p-[15px] shadow-[0_16px_32px_-12px_rgba(88,92,95,0.10)]">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
        <h2 className="text-lg font-bold text-[#111827]">Conversion Trends</h2>
        <div className="flex items-center gap-4 ms-auto">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF6B6B]"></div>
            <span className="text-sm text-[#6B7280]">Revenue</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#4ECDC4]"></div>
            <span className="text-sm text-[#6B7280]">Conversion</span>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <AreaChart
          data={chartData}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF6B6B" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#FF6B6B" stopOpacity={0.05} />
            </linearGradient>
            <linearGradient id="colorConversion" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4ECDC4" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#4ECDC4" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#F3F4F6"
            vertical={false}
          />

          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9CA3AF", fontSize: 12 }}
            dy={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9CA3AF", fontSize: 12 }}
            domain={[0, 300]}
            ticks={[0, 50, 100, 150, 200, 250, 300]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #E5E7EB",
              borderRadius: "8px",
              fontSize: "12px",
            }}
          />

          {/* 🟠 Revenue Line */}
          <Area
            type="linear"
            dataKey="revenue"
            stroke="#FF6B6B"
            strokeWidth={2}
            strokeDasharray="5 5"
            fillOpacity={1}
            fill="url(#colorRevenue)"
          />

          {/* 🟢 Conversion Line */}
          <Area
            type="linear"
            dataKey="conversion"
            stroke="#4ECDC4"
            strokeWidth={2}
            strokeDasharray="5 5"
            fillOpacity={1}
            fill="url(#colorConversion)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ConversionTrendsChart;
