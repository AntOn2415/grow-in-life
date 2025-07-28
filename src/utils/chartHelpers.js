// src/utils/chartHelpers.js

/**
 * Повертає опції Chart.js з урахуванням теми.
 * @param {object} options - Початкові опції діаграми.
 * @param {object} themeColors - Об'єкт кольорів поточної теми.
 * @returns {object} Оновлені опції діаграми.
 */
export const getChartOptionsWithTheme = (options, themeColors) => {
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
          color: themeColors?.color,
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
          color: themeColors?.color,
          font: {
            size: 10,
          },
        },
        grid: {
          display: false, // Вимкнено лінії сітки на осі Y
          color: (themeColors?.borderColor || "#D3D3D3") + "80",
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
          color: themeColors?.color,
          font: {
            size: 10,
          },
        },
        grid: {
          display: false, // Вимкнено лінії сітки на осі X
          color: (themeColors?.borderColor || "#D3D3D3") + "80",
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
 * @param {object} themeColors - Об'єкт кольорів поточної теми.
 * @param {string} type - Тип діаграми (для коректного застосування кольорів).
 * @returns {object} Оновлені дані діаграми.
 */
export const getChartDataWithTheme = (data, themeColors, type) => {
  if (!data || !data.datasets) return data;

  if (!themeColors) {
    return data;
  }

  const newChartData = { ...data };
  newChartData.datasets = newChartData.datasets.map(dataset => {
    const newDataset = { ...dataset };

    const dynamicColors = [
      themeColors.accentColor,
      themeColors.navActive,
      themeColors.accentBg,
      themeColors.color,
      themeColors.navBg,
      themeColors.background,
      themeColors.borderColor,
      themeColors.interactiveBgLight,
      themeColors.interactiveBorderLight,
      themeColors.interactiveBgYellow,
      themeColors.interactiveBorderYellow,
      themeColors.buttonBg,
      themeColors.successColor,
      themeColors.dangerColor,
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
        newDataset.borderColor = themeColors.borderColor;
      } else {
        newDataset.backgroundColor = themeColors.accentColor + "B3";
        newDataset.borderColor = themeColors.accentColor;
      }
    } else if (Array.isArray(newDataset.backgroundColor)) {
      newDataset.backgroundColor = newDataset.backgroundColor.map((color, i) =>
        color === "dynamic" ? dynamicColors[i % dynamicColors.length] : color
      );
      if (!newDataset.borderColor) {
        newDataset.borderColor = themeColors.borderColor;
      }
    }

    if (newDataset.pointBackgroundColor === "dynamic") {
      newDataset.pointBackgroundColor = themeColors.accentColor;
    }
    if (newDataset.pointBorderColor === "dynamic") {
      newDataset.pointBorderColor = themeColors.color;
    }
    if (newDataset.hoverBackgroundColor === "dynamic") {
      newDataset.hoverBackgroundColor = themeColors.hoverBg;
    }
    if (newDataset.hoverBorderColor === "dynamic") {
      newDataset.hoverBorderColor = themeColors.borderColor;
    }
    if (newDataset.fill === true) {
      newDataset.backgroundColor = themeColors.accentBg + "50";
    }

    return newDataset;
  });
  return newChartData;
};
