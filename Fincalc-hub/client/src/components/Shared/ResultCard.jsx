export default function ResultCard({ label, value, highlight = false }) {
  return (
    <div className={`p-4 rounded-xl border transition-colors ${
      highlight
        ? 'bg-indigo-600 text-white border-indigo-600'
        : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-gray-200 dark:border-gray-700'
    }`}>
      <p className={`text-xs font-medium ${
        highlight ? 'text-indigo-100' : 'text-gray-500 dark:text-gray-400'
      }`}>
        {label}
      </p>
      <p className="text-xl font-bold mt-1">{value}</p>
    </div>
  )
}