import axios from "axios";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { SubCategoryWrapper } from '../../../../services/SubCategoryWrapper';

interface ApexChartProps {}

interface ApexChartState {
  series: number[];
  options: {
    chart: {
      width: number;
      type: "pie";
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
  private readonly list: number[] = [0, 0, 0, 0, 0];
  private readonly labels: string[] = ['Görsel Uzamsal', 'Matematiksel Mantıksal', 'Müziksel Ritmik', 'Dikkat Hafıza', 'Sözel Dilbilimsel']
   

  constructor(props: ApexChartProps) {
    super(props);

    this.state = {
      series: this.list,
      options: {
        chart: {
          width: 380,
          type: 'pie', 
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

  async componentDidMount() {
    try {
      const response = await axios.get('https://edunimbus-django-backend.onrender.com/users/17/'); 
      const data = response.data;

      console.log(data.result.data2)

      SubCategoryWrapper(data.result.data2, 1)
      const chartData: number[] = await SubCategoryWrapper(data.result.data2, 1);

      this.setState({
        series: chartData,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
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
