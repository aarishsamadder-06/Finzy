import PageHeader from "../components/Shared/PageHeader";
import EmergencyFund from "../components/EmergencyFund/EmergencyFund";

export default function EmergencyPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <PageHeader
        emoji="🛡️"
        title="Emergency Fund Calculator"
        description="Calculate how much emergency savings you should keep based on your monthly expenses."
      />

      <EmergencyFund />
    </div>
  );
}