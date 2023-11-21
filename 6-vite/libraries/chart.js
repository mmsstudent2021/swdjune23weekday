import { Chart } from "chart.js/auto";
import "./index.css";

const ctx = document.querySelector("#myChart");

const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of a",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 4,
      },
      {
        label: "# of b",
        data: [5, 23, 13, 1, 7, 6],
        borderWidth: 4,
      },
      {
        label: "# of c",
        data: [7, 4, 13, 1, 17, 23],
        borderWidth: 4,
      },
    ],
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  },
});
