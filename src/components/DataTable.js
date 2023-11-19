import { calculateMean, calculateMedian, calculateMode } from "../utils/common";
import "./table.css";
export const DataTable = ({ dataObj, mesaureName }) => {
  const dataClasses = Object.keys(dataObj);
  return (
    <div>
      <table>
        <tr>
          <th> Measure </th>
          {dataClasses.map((element) => {
            return <th key={element}>Class {element}</th>;
          })}
        </tr>

        <tr>
          <td>{mesaureName} Mean</td>
          {dataClasses.map((element) => {
            return <td>{calculateMean(dataObj[element]).toFixed(3)}</td>;
          })}
        </tr>

        <tr>
          <td>{mesaureName} Median</td>
          {dataClasses.map((element) => {
            return <td>{calculateMedian(dataObj[element]).toFixed(3)}</td>;
          })}
        </tr>

        <tr>
          <td>{mesaureName} Mode</td>
          {dataClasses.map((element) => {
            return <td>{calculateMode(dataObj[element]).toFixed(3)}</td>;
          })}
        </tr>
      </table>
    </div>
  );
};
