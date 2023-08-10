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
    },
    title: {
      text: "Tech Pay Gap in Kenya",
    },
    xAxis: {
      title: {
        text: "Years",
      },
      categories: ["2018", "2019", "2020", "2021", "2022", "2023"],
    },
    yAxis: {
      title: {
        text: "",
      },
    },
    series: [
      {
        name: "",
        data: [10000, 30000, 32000, 40000, 60000, 70000],
        // color: theme.palette.secondary.main,
      },
    ],
    credits: {
      enabled: false,
    },
    exporting: {
      enabled: false,
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
