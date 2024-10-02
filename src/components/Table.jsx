import { useState } from "react";

const Table = () => {
  const [dataState, setDataState] = useState(
    new Array(20).fill("").map(() => ({
      decisionValue: "",
      banker: "",
      player: "",
      opposite: "",
      sameOpposite: "",
      plusMinus: "",
    }))
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const disabled = () => {};

  const handleDescisionChange = (value, index) => {
    setDataState((prevDataState) =>
      prevDataState.map((row, i) => {
        if (i === index) {
          if (value === "P") {
            return {
              ...row,
              decisionValue: value,
              banker: "NP",
              player: 1,
              opposite: "NP",
              sameOpposite: "NP",
              plusMinus: "-",
            };
          } else if (value === "B") {
            return {
              ...row,
              decisionValue: value,
              banker: 1,
              player: "NP",
              opposite: "NP",
              sameOpposite: "NP",
              plusMinus: "",
            };
          }
        }
        return row;
      })
    );
  };

  return (
    <table>
      <tr>
        <th>Decision</th>
        <th>Banker</th>
        <th>Player</th>
        <th>Opposite</th>
        <th>Same Opposite</th>
        <th>+/-</th>
      </tr>
      {dataState.map((dt, i) => (
        <tr key={i}>
          <td>
            <select
              onChange={(e) => handleDescisionChange(e.target.value, i)}
              value={dt.decisionValue}
            >
              <option value="">Select Value</option>
              <option value="B">B</option>
              <option value="P">P</option>
            </select>
          </td>
          <td>{dt.banker}</td>
          <td>{dt.player}</td>
          <td>{dt.opposite}</td>
          <td>{dt.sameOpposite}</td>
          <td>{dt.plusMinus}</td>
        </tr>
      ))}
    </table>
  );
};

export default Table;
