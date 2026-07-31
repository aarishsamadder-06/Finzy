import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#3B82F6",
  "#10B981",
  "#F59E0B",
];

const BudgetChart = ({ data }) => {
  return (
    <div className="w-full">

      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Budget Distribution
      </h2>

      <ResponsiveContainer width="100%" height={350}>

        <PieChart>

          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={120}
            paddingAngle={5}
            dataKey="value"
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
            animationDuration={1200}
            animationBegin={200}
          >

            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}

          </Pie>

          <Tooltip
            formatter={(value) =>
              `₹${Number(value).toLocaleString("en-IN")}`
            }
          />

          <Legend />

        </PieChart>

      </ResponsiveContainer>

      <div className="grid grid-cols-3 gap-4 mt-8">

        {data.map((item, index) => (

          <div
            key={index}
            className="rounded-xl shadow-lg border p-4 text-center hover:scale-105 transition"
          >

            <div
              className="w-5 h-5 rounded-full mx-auto mb-2"
              style={{
                backgroundColor: COLORS[index],
              }}
            />

            <p className="font-semibold text-gray-700">
              {item.name}
            </p>

            <h3 className="text-xl font-bold mt-2">
              ₹{item.value.toLocaleString("en-IN")}
            </h3>

          </div>

        ))}

      </div>

    </div>
  );
};

export default BudgetChart;