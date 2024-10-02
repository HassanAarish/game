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

  const handleDescisionChange = (value, index) => {
    setCurrentIndex(index + 1);
    setDataState((prevDataState) => {
      const newArr = prevDataState;
      newArr[index] = {
        decisionValue: value,
        banker: value === "B" ? 1 : "NP",
        player: value === "P" ? 1 : "NP",
        opposite: "NP",
        sameOpposite: "NP",
        plusMinus: "",
      };
      return newArr;
    });
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
              disabled={currentIndex !== i}
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
