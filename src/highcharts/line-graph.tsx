"use client";

import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";
import { useState } from "react";

if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
}

export const LineGraph = () => {
  const [options, setOptions] = useState({
    chart: {
      // height: 540,
      style: {
        fontFamily: "inherit", // Set the desired font family
        fontSize: "14px", // Set the desired font size
      },
      zIndex: -1, // Set the desired z-index value here
    },
    title: {
      text: "Rise of Tech Experts in Kenya",
    },
    xAxis: {
      title: {
        text: "Technology Industry Sector",
      },
      categories: ["AI & Machine Learning", "DevOps", "Quality Assurance", "Data Science", "Android Developers", "Web Developers"],
    },
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: "Industry Sector",
      },
      labels: {
        format: "{value}%", // Display y-axis labels as percentages
      },
    },
    series: [
      {
        name: "",
        data: [10, 30, 40, 50, 70, 90],
        // color: theme.palette.secondary.main,
      },
    ],
    credits: {
      enabled: false,
    },
    exporting: {
      enabled: true,
    },
  });
  return (
    <>
      <div className="bg-white shadow-2xl w-full rounded z-0">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </>
  );
};
