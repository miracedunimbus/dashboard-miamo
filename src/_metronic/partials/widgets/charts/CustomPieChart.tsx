import React from "react";
import ReactApexChart from "react-apexcharts";

interface ApexChartProps {}

interface ApexChartState {
  series: number[];
  options: {
    chart: {
      width: number;
      type: "pie"; // Grafik tipini burada belirtiyoruz
    };
    labels: string[];
    responsive: {
      breakpoint: number;
      options: {
        chart: {
          width: number;
        };
        legend: {
          position: string;
        };
      };
    }[];
  };
}

class ApexChart extends React.Component<ApexChartProps, ApexChartState> {
  private readonly list: number[] = [44, 55, 13, 43, 16];
  private readonly labels: string[] = ['Görsel Uzamsal', 'Matematiksel Mantıksal', 'Müziksel Ritmik', 'Dikkat Hafıza', 'Sözel Dilbilimsel']

  constructor(props: ApexChartProps) {
    super(props);

    this.state = {
      series: this.list,
      options: {
        chart: {
          width: 380,
          type: 'pie', // Grafik tipini burada da belirtiyoruz
        },
        labels: this.labels,     
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      }
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={700} />
      </div>
    );
  }
}

export default ApexChart;
