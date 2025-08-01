// src/utils/chartHelpers.js

/**
 * Повертає опції Chart.js з урахуванням теми.
 * @param {object} options - Початкові опції діаграми.
 * @param {object} theme - Об'єкт поточної теми (містить colors).
 * @returns {object} Оновлені опції діаграми.
 */
export const getChartOptionsWithTheme = (options, theme) => {
  let newOptions = {
    ...options,
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 5,
        right: 40,
        top: 10,
        bottom: 5,
      },
    },
    plugins: {
      ...options.plugins,
      legend: {
        // Вмикаємо легенду тільки для Line/Bar/Radar/Scatter/Bubble/PolarArea.
        // Для Pie/Doughnut вона буде вимкнена, оскільки для них використовується кастомна HTML-легенда.
        display: !["pie", "doughnut"].includes(options.chartType),
        labels: {
          color: theme.colors?.color,
          font: {
            size: 12,
          },
          boxWidth: 20,
          padding: 10,
        },
        position: "right",
        align: "center",
      },
      tooltip: {
        ...options.plugins?.tooltip,
        bodyFont: {
          size: 12,
        },
        titleFont: {
          size: 14,
        },
      },
    },
    scales: {
      ...options.scales,
      y: {
        ...options.scales?.y,
        border: {
          display: false,
        },
        ticks: {
          // ✅ ДОДАНО: Вимкнення відображення міток на осі Y
          display: false,
          color: theme.colors?.color,
          font: {
            size: 10,
          },
        },
        grid: {
          display: false, // Вимкнено лінії сітки на осі Y
          color: (theme.colors?.borderColor || "#D3D3D3") + "80",
        },
      },
      x: {
        ...options.scales?.x,
        border: {
          display: false,
        },
        ticks: {
          // ✅ ДОДАНО: Вимкнення відображення міток на осі X
          display: false,
          color: theme.colors?.color,
          font: {
            size: 10,
          },
        },
        grid: {
          display: false, // Вимкнено лінії сітки на осі X
          color: (theme.colors?.borderColor || "#D3D3D3") + "80",
        },
      },
    },
  };

  if (["doughnut", "pie"].includes(options.chartType)) {
    newOptions.cutout = options.cutout || "70%";
  }

  if (!newOptions.plugins) newOptions.plugins = {};
  return newOptions;
};

/**
 * Повертає дані Chart.js з застосованими кольорами теми.
 * @param {object} data - Початкові дані діаграми.
 * @param {object} theme - Об'єкт поточної теми (містить colors).
 * @param {string} type - Тип діаграми (для коректного застосування кольорів).
 * @returns {object} Оновлені дані діаграми.
 */
export const getChartDataWithTheme = (data, theme, type) => {
  if (!data || !data.datasets) return data;

  if (!theme || !theme.colors) {
    return data;
  }

  const newChartData = { ...data };
  newChartData.datasets = newChartData.datasets.map(dataset => {
    const newDataset = { ...dataset };

    const dynamicColors = [
      theme.colors.accentColor,
      theme.colors.navActive,
      theme.colors.accentBg,
      theme.colors.color,
      theme.colors.navBg,
      theme.colors.background,
      theme.colors.borderColor,
      theme.colors.interactiveBgLight,
      theme.colors.interactiveBorderLight,
      theme.colors.interactiveBgYellow,
      theme.colors.interactiveBorderYellow,
      theme.colors.buttonBg,
      theme.colors.successColor,
      theme.colors.dangerColor,
    ];

    if (
      !newDataset.backgroundColor ||
      newDataset.backgroundColor.length === 0 ||
      newDataset.backgroundColor === "dynamic"
    ) {
      if (type === "pie" || type === "doughnut" || type === "polarArea") {
        const dataPointsCount = newDataset.data.length;
        newDataset.backgroundColor = Array.from(
          { length: dataPointsCount },
          (_, i) => dynamicColors[i % dynamicColors.length]
        );
        newDataset.borderColor = theme.colors.borderColor;
      } else {
        newDataset.backgroundColor = theme.colors.accentColor + "B3";
        newDataset.borderColor = theme.colors.accentColor;
      }
    } else if (Array.isArray(newDataset.backgroundColor)) {
      newDataset.backgroundColor = newDataset.backgroundColor.map((color, i) =>
        color === "dynamic" ? dynamicColors[i % dynamicColors.length] : color
      );
      if (!newDataset.borderColor) {
        newDataset.borderColor = theme.colors.borderColor;
      }
    }

    if (newDataset.pointBackgroundColor === "dynamic") {
      newDataset.pointBackgroundColor = theme.colors.accentColor;
    }
    if (newDataset.pointBorderColor === "dynamic") {
      newDataset.pointBorderColor = theme.colors.color;
    }
    if (newDataset.hoverBackgroundColor === "dynamic") {
      newDataset.hoverBackgroundColor = theme.colors.hoverBg;
    }
    if (newDataset.hoverBorderColor === "dynamic") {
      newDataset.hoverBorderColor = theme.colors.borderColor;
    }
    if (newDataset.fill === true) {
      newDataset.backgroundColor = theme.colors.accentBg + "50";
    }

    return newDataset;
  });
  return newChartData;
};
