import BudgetSplitter from "../components/BudgetSplitter/BudgetSplitter";

const BudgetPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">

      {/* Hero Section */}

      <section className="py-14 text-center text-white">

        <h1 className="text-5xl font-extrabold">
          Smart Budget Splitter
        </h1>

        <p className="mt-5 text-lg text-gray-300 max-w-2xl mx-auto">
          Plan your monthly income wisely using the
          <span className="text-cyan-400 font-semibold">
            {" "}50-30-20 budgeting rule
          </span>.
          Track your Needs, Wants, and Savings with
          beautiful visual insights.
        </p>

      </section>

      {/* Budget Calculator */}

      <section className="pb-20">
        <BudgetSplitter />
      </section>

    </div>
  );
};

export default BudgetPage;