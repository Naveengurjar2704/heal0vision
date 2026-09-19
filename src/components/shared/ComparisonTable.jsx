import { laserProcedures, comparisonRows } from "../../data/procedures";
import "./ComparisonTable.css";

export default function ComparisonTable() {
  return (
    <div className="comparison">
      <table>
        <thead>
          <tr>
            <th scope="col">&nbsp;</th>
            {laserProcedures.map((p) => (
              <th scope="col" key={p.slug}>
                {p.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row) => (
            <tr key={row.label}>
              <th scope="row">{row.label}</th>
              {laserProcedures.map((p) => (
                <td key={p.slug}>{row.values[p.slug]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
