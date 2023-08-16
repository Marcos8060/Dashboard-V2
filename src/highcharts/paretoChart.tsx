import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";

if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
}

const ParetoChart = () => {
  // Your data for complaints
  const complaintData = [74, 66, 49, 87, 58, 51, 36, 70];
  const totalComplaints = complaintData.reduce((sum, count) => sum + count, 0);
  const cumulativePercentageData = complaintData.map((count, index) =>
    ((complaintData.slice(0, index + 1).reduce((sum, c) => sum + c, 0)) / totalComplaints) * 100
  );

  const [options, setOptions] = useState({
    chart: {
      type: "column",
    },
    title: {
      text: "Restaurants Complaints",
    },
    tooltip: {
      shared: true,
    },
    xAxis: {
      categories: [
        "Fintech",
        "Healthcare",
        "Agriculture",
        "E-commerce and Retail",
        "Transport and Mobility",
        "Real Estate",
        "Travel and Tourism",
        "Logistics and Supply Chain",
      ],
      crosshair: true,
    },
    yAxis: [
      {
        title: {
          text: "Complaints",
        },
      },
      {
        title: {
          text: "Cumulative Percentage",
        },
        min: 0,
        max: 100,
        opposite: true,
        labels: {
          format: "{value}%",
        },
      },
    ],
    series: [
      {
        name: "Complaints",
        type: "column",
        data: complaintData,
      },
      {
        name: "Cumulative Percentage",
        type: "spline",
        yAxis: 1,
        data: cumulativePercentageData,
        tooltip: {
          valueSuffix: "%",
        },
      },
    ],
  });

  return (
    <section className="p-4 space-y-4 pb-20 z-0">
      <h1 className="text-2xl">Tech Industry's Impact Across Diverse Economy Sectors</h1>
      <div className="bg-white shadow-2xl w-full rounded z-0">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </section>
  );
};

export default ParetoChart;
