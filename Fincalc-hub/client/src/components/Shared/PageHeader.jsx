export default function PageHeader({ title, description, emoji }) {
  return (
    <div className="text-center mb-10">
      <span className="text-6xl">{emoji}</span>
      <h1 className="text-3xl font-bold text-gray-800 mt-4">{title}</h1>
      <p className="text-gray-500 mt-2 max-w-lg mx-auto">{description}</p>
    </div>
  )
}