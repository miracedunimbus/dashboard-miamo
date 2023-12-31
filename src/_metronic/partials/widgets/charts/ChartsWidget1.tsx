/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef } from 'react'
import ApexCharts, { ApexOptions } from 'apexcharts'
import { getCSS, getCSSVariableValue } from '../../../assets/ts/_utils'
import { useThemeMode } from '../../layout/theme-mode/ThemeModeProvider'

type Props = {
  className: string
}

const ChartsWidget1: React.FC<Props> = ({ className }) => {
  const chartRef = useRef<HTMLDivElement | null>(null)
  const { mode } = useThemeMode()

  useEffect(() => {
    const chart = refreshChart()

    return () => {
      if (chart) {
        chart.destroy()
      }
    }
  }, [chartRef, mode])

  const refreshChart = () => {
    if (!chartRef.current) {
      return
    }

    const height = parseInt(getCSS(chartRef.current, 'height'))

    const chart = new ApexCharts(chartRef.current, getChartOptions(height))
    if (chart) {
      chart.render()
    }

    return chart
  }

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        {/* begin::Title */}
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Genel Öğrenci İstatistikleri</span>
          <span className='card-label fw-normal fs-3 mb-1'>Yaş Grubu</span>
          {/* <span className='text-muted fw-semibold fs-7'>More than 400 new members</span> */}
        </h3>
        {/* end::Title */}

      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className='card-body'>
        {/* begin::Chart */}
        <div ref={chartRef} id='kt_charts_widget_1_chart' style={{ height: '350px' }} />
        {/* end::Chart */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export { ChartsWidget1 }

function getChartOptions(height: number): ApexOptions {
  const labelColor = getCSSVariableValue('--bs-gray-500')
  const borderColor = getCSSVariableValue('--bs-gray-200')
  const baseColor = getCSSVariableValue('--bs-primary')
  const secondaryColor = getCSSVariableValue('--bs-gray-300')

  return {
    series: [
      {
        name: 'Öğrencim',
        data: [44, 55, 57, 56, 61, 58],
      },
      {
        name: 'Genel Ortalama',
        data: [76, 85, 101, 98, 87, 105],
      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'bar',
      height: height,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '30%',
        borderRadius: 5,
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      // categories: ['Çalışma Raporu ','Görsel Uzamsal', 'Matematiksel Mantıksal', 'Müziksel Ritmik Zeka', 'Dikkat Hafıza', 'Sözel Dilbilimsel', ],
      categories: [['Çalışma Raporu', 'Toplam Oyuncu Sayısı: 123'], ['Görsel Uzamsal', 'Toplam Oyuncu Sayısı: 123'], ['Matematiksel Mantıksal', 'Toplam Oyuncu Sayısı: 123'], ['Müziksel Ritmik Zeka', 'Toplam Oyuncu Sayısı: 123'], ['Dikkat Hafıza', 'Toplam Oyuncu Sayısı: 123'], ['Sözel Dilbilimsel', 'Toplam Oyuncu Sayısı: 123'],],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: true,
      },
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    fill: {
      opacity: 1,
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
          return '%' + val
        },
      },
    },
    colors: [baseColor, secondaryColor],
    grid: {
      borderColor: borderColor,
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
  }
}
