import React from "react";
import ReactApexChart from "react-apexcharts";
import { getUserId } from "../../../../app/modules/auth";

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

    const list1: number[] = [28, 14, 19, 12, 27]
    const list2: number[] = [15, 16, 23, 11, 35]
    const list3: number[] = [48, 2, 6, 44, 0]
    const list4: number[] = [19, 31, 10, 19, 21]
    const list5: number[] = [31, 11, 19, 27, 12]
    
    const dataList = [list1, list2, list3, list4, list5]
    const userId = getUserId()

    const data = dataList[userId  - 1]

    console.log(data)

    return (
      <div id="chart">
        <ReactApexChart options={this.state.options} series={data} type="pie" width={700} />
      </div>
    );
  }
}

export default ApexChart;
