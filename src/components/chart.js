import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const config = {
  // add color for labels
  plugins: {
    legend: {
      labels: {
        color: "#caff33",
      },
    },
  },
  scales: {
    r: {
      angleLines: {
        color: "#e5ff99",
      },
      grid: {
        borderWidth: 1,
        color: "#c9ff334d",
      },
      pointLabels: {
        color: "#caff33",
        font: {
          size: 10,
        },
      },
      ticks: {
        backdropColor: "transparent",
        color: "#e5ff99",
        size: 10,
      },
    },
  },
};

export default function StatsChart({ players }) {
  console.log(players);
  // map player datasets
  const test = players.map((player) => {
    return {
      label: player.name,
      data: [
        player.PlayersMatches.average,
        player.PlayersMatches.goals,
        player.PlayersMatches.assists,
        player.PlayersMatches.shoots
      ],
      // backgroundColor: "transparent",
      backgroundColor: "rgba(0,0,0,0.2)",
      // backgroundColor: player.name === "Steph" ? "#d62540a8" :
      // player.name === "Quentin" ? "#fcda00b2" : 
      // player.name === "Tom" ? "#08a3cab0" :
      // player.name === "Pedro" ? "#6cb34baf" :
      // player.name === "Ben" ? "#e66e3fb0" :
      // "transparent",
      borderColor: player.name === "Steph" ? "#d62541" :
                    player.name === "Quentin" ? "#fcda00" : 
                    player.name === "Tom" ? "#08a2ca" :
                    player.name === "Pedro" ? "#6cb34b" :
                    player.name === "Ben" ? "#e66f3f" :
                    "#transparent",
      borderWidth: 1.5,
      
      pointRadius: 5,
    };
  });

  const data = {
    labels: ["Moyenne", "Buts", "Passes D", "Tirs", ],
    datasets: 
      test
    ,
  };
  return (
    <div>
      <Radar data={data} options={config} />
    </div>
  );
}

// export function App() {
//   return <Radar data={data} />;
// }
