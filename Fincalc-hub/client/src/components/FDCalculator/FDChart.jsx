import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function FDChart({ data }) {
  const fmt = (v) => '₹' + (v / 1000).toFixed(0) + 'K'
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="year" tick={{ fontSize: 11 }} />
        <YAxis tickFormatter={fmt} tick={{ fontSize: 11 }} />
        <Tooltip formatter={(v) => '₹' + v.toLocaleString('en-IN')} />
        <Legend />
        <Bar dataKey="Principal" fill="#a5b4fc" radius={[4, 4, 0, 0]} />
        <Bar dataKey="Interest" fill="#4f46e5" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}