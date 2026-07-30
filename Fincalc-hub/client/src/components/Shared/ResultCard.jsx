export default function ResultCard({ label, value, highlight = false }) {
  return (
    <div className={`p-4 rounded-xl border ${
      highlight
        ? 'bg-indigo-600 text-white border-indigo-600'
        : 'bg-white text-gray-800 border-gray-200'
    }`}>
      <p className={`text-xs font-medium ${
        highlight ? 'text-indigo-100' : 'text-gray-500'
      }`}>
        {label}
      </p>
      <p className="text-xl font-bold mt-1">{value}</p>
    </div>
  )
}