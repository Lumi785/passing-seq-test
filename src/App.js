import React from "react";

import BarChart from "./components/BarChart";
import "./App.css";

const App = () => {
  const data = {
    labels: ["3", "6", "5", "8", "2"],
    datasets: [
      {
        label: "# of votes",
        data: [0, 0, 0, 0, 0, 0],

        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 6,
      },
      {
        label: "Quantity",
        data: [5, 5, 5, 5],
        backgroundColor: "orange",
        borderColor: "red",
      },
    ],
  };

  return (
    <div>
      <BarChart data={data} />
    </div>
  );
};

export default App;
