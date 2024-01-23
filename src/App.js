import "./App.css";
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Вид деятельности", "Часов в день"],
  ["Работа", 6],
  ["Приготовление еды", 2],
  ["Общение", 2],
  ["Обучение", 3],
  ["Сон", 8],
];

export const options = {
  title: "Мои ежедневные активности",
  is3D: true,
};

export function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}

export default App;
