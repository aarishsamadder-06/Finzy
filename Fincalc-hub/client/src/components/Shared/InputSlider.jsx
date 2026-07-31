export default function InputSlider({
  label, value, min, max, step,
  onChange, prefix = '₹', suffix = ''
}) {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>
        <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
          {prefix}{Number(value).toLocaleString('en-IN')}{suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="w-full accent-indigo-600 cursor-pointer"
      />
      <div className="flex justify-between text-xs text-gray-400 dark:text-gray-500 mt-1">
        <span>{prefix}{Number(min).toLocaleString('en-IN')}{suffix}</span>
        <span>{prefix}{Number(max).toLocaleString('en-IN')}{suffix}</span>
      </div>
    </div>
  )
}