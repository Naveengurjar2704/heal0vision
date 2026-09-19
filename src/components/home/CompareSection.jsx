import SectionHeading from "../shared/SectionHeading";
import ComparisonTable from "../shared/ComparisonTable";
import "./CompareSection.css";

export default function CompareSection() {
  return (
    <section className="section section--tint">
      <div className="container">
        <SectionHeading
          eyebrow="Compare procedures"
          title="Compare our laser vision procedures, at a glance"
          description="Every eye is different — this is a starting point for conversation, not a diagnosis. Your free check-up confirms what's right for you."
        />
        <ComparisonTable />
      </div>
    </section>
  );
}
