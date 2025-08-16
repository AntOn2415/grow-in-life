// src/components/InteractiveContent/Diagram/Diagram.jsx
import React, { useMemo } from "react";
import {
  DiagramContainer,
  DiagramWrapper,
  ChartBox,
  LegendBox,
  LegendItem,
  LegendColor,
  LegendText,
} from "./Diagram.styled";
import TokenRenderer from "../../TokenRenderer/TokenRenderer";

import { Line, Bar, Pie, Doughnut, PolarArea, Radar, Bubble, Scatter } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { useTheme } from "../../../contexts/ThemeProvider";
import { getChartOptionsWithTheme, getChartDataWithTheme } from "../../../utils/chartHelpers";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

const renderChart = (chartType, chartData, chartOptions) => {
  // ✅ ДОДАНО ПЕРЕВІРКУ: не рендеримо, якщо немає даних або datasets
  if (!chartData || !chartData.datasets || chartData.datasets.length === 0) {
    return <p>Недостатньо даних для побудови діаграми.</p>;
  }

  switch (chartType) {
    case "line":
      return <Line data={chartData} options={chartOptions} />;
    case "bar":
      return <Bar data={chartData} options={chartOptions} />;
    case "pie":
      return <Pie data={chartData} options={chartOptions} />;
    case "doughnut":
      return <Doughnut data={chartData} options={chartOptions} />;
    case "polarArea":
      return <PolarArea data={chartData} options={chartOptions} />;
    case "radar":
      return <Radar data={chartData} options={chartOptions} />;
    case "bubble":
      return <Bubble data={chartData} options={chartOptions} />;
    case "scatter":
      return <Scatter data={chartData} options={chartOptions} />;
    default:
      return <p>Невідомий тип діаграми: {chartType}</p>;
  }
};

function Diagram({ title, description, chartType, chartData, chartOptions }) {
  const { currentTheme } = useTheme();

  // ✅ ДОДАНО ПЕРЕВІРКУ: якщо chartData не існує, повертаємо пустий об'єкт
  const memoizedChartData = useMemo(() => {
    return getChartDataWithTheme(chartData || {}, currentTheme, chartType);
  }, [chartData, currentTheme, chartType]);

  const memoizedChartOptions = useMemo(() => {
    return getChartOptionsWithTheme({ ...chartOptions, chartType }, currentTheme);
  }, [chartOptions, currentTheme, chartType]);

  // ✅ ДОДАНО ПЕРЕВІРКУ: якщо немає memoizedChartData, повертаємо порожній масив
  const customLegendItems = useMemo(() => {
    if (
      !memoizedChartData ||
      !memoizedChartData.labels ||
      !memoizedChartData.datasets ||
      memoizedChartData.datasets.length === 0
    ) {
      return [];
    }
    const colors = memoizedChartData.datasets[0]?.backgroundColor || [];

    return memoizedChartData.labels.map((label, index) => ({
      text: label,
      color: Array.isArray(colors) ? colors[index % colors.length] : colors,
    }));
  }, [memoizedChartData]);

  if (!currentTheme) {
    return <p>Завантаження діаграми...</p>;
  }

  // ✅ ДОДАНО ПЕРЕВІРКУ: якщо немає chartData, повертаємо повідомлення
  if (!chartData) {
    return <p>Діаграма завантажується або відсутні дані.</p>;
  }

  return (
    <DiagramContainer>
      {title && (
        <h4>
          <TokenRenderer tokens={title} />
        </h4>
      )}
      {description && (
        <p>
          <TokenRenderer tokens={description} />
        </p>
      )}

      <DiagramWrapper>
        <ChartBox>{renderChart(chartType, memoizedChartData, memoizedChartOptions)}</ChartBox>
        <LegendBox>
          {customLegendItems.map((item, index) => (
            <LegendItem key={index}>
              <LegendColor style={{ backgroundColor: item.color }} />
              <LegendText style={{ color: currentTheme.color }}>{item.text}</LegendText>
            </LegendItem>
          ))}
        </LegendBox>
      </DiagramWrapper>
    </DiagramContainer>
  );
}

export default Diagram;
