/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useRef} from 'react'
import ApexCharts, {ApexOptions} from 'apexcharts'
import {KTIcon} from '../../../helpers'
import {getCSSVariableValue} from '../../../assets/ts/_utils'
import {Dropdown1} from '../../content/dropdown/Dropdown1'
import {useThemeMode} from '../../layout/theme-mode/ThemeModeProvider'

type Props = {
  className: string
  chartColor: string
  chartHeight: string
  title: string
}

const MixedWidget9Copy: React.FC<Props> = ({className, chartColor, chartHeight,title}) => {
  const chartRef = useRef<HTMLDivElement | null>(null)
  const {mode} = useThemeMode()
  const refreshChart = () => {
    if (!chartRef.current) {
      return
    }

    const chart = new ApexCharts(chartRef.current, chartOptions(chartColor, chartHeight))
    if (chart) {
      chart.render()
    }

    return chart
  }

  useEffect(() => {
    const chart = refreshChart()
    return () => {
      if (chart) {
        chart.destroy()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartRef, mode])

  return (
    <div className={`card ${className} `}>
      {/* begin::Beader */}
      <div className='card-header border-0'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>{title}</span>

        </h3>
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className='card-body'>
        {/* begin::Chart */}
        <div ref={chartRef} className='mixed-widget-6-chart card-rounded-bottom'></div>
        {/* end::Chart */}
      </div>
      {/* end::Body */}
    </div>
  )
}

const chartOptions = (chartColor: string, chartHeight: string): ApexOptions => {
  const labelColor = getCSSVariableValue('--bs-gray-800')
  const strokeColor = getCSSVariableValue('--bs-gray-300')
  const baseColor = getCSSVariableValue('--bs-' + chartColor)
  const lightColor = getCSSVariableValue('--bs-' + chartColor + '-light')

  return {
    series: [
      {
        name: 'Net Profit',
        data: [30, 25, 45, 30, 55, 55],
      }
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'area',
      height: chartHeight,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {},
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'solid',
      opacity: 1,
    },
    stroke: {
      curve: 'smooth',
      show: true,
      width: 3,
      colors: [baseColor],
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: true,
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
      crosshairs: {
        show: false,
        position: 'front',
        stroke: {
          color: strokeColor,
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      min: 0,
      max: 60,
      labels: {
        show: false,
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      hover: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function (val) {
          return '$' + val + ' thousands'
        },
      },
    },
    colors: [lightColor],
    markers: {
      colors: [lightColor],
      strokeColors: [baseColor],
      strokeWidth: 3,
    },
  }
}

export {MixedWidget9Copy}
