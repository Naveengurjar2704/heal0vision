import { comparisonRows } from "../../data/procedures";
import "./ComparisonTable.css";

export default function ComparisonTable() {
  return (
    <div className="comparison">
      <table>
        <thead>
          <tr>
            <th scope="col">&nbsp;</th>
            <th scope="col">LASIK</th>
            <th scope="col">SMILE</th>
            <th scope="col">TransPRK</th>
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row) => (
            <tr key={row.label}>
              <th scope="row">{row.label}</th>
              <td>{row.lasik}</td>
              <td>{row.smile}</td>
              <td>{row.transprk}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
