import {
  AreaChart, Area, XAxis, YAxis,
  Tooltip, ReferenceLine, ResponsiveContainer
} from 'recharts'

export default function SavingsChart({ data, goalAmount }) {
  const fmt = (v) => '₹' + (v / 1000).toFixed(0) + 'K'
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
        <defs>
          <linearGradient id="savingsGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.4} />
            <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="year" tick={{ fontSize: 11 }} />
        <YAxis tickFormatter={fmt} tick={{ fontSize: 11 }} />
        <Tooltip
          formatter={(v) => '₹' + v.toLocaleString('en-IN')}
          labelFormatter={(l) => `Year ${l.replace('Y', '')}`}
        />
        <ReferenceLine
          y={goalAmount}
          stroke="#f59e0b"
          strokeDasharray="4 4"
          label={{ value: 'Goal', position: 'right', fill: '#f59e0b', fontSize: 11 }}
        />
        <Area
          type="monotone"
          dataKey="Savings"
          stroke="#4f46e5"
          strokeWidth={2}
          fill="url(#savingsGradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
