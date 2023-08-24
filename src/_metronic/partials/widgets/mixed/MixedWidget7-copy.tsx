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
  header: string
  point: number
}

const MixedWidget7Copy: React.FC<Props> = ({className, chartColor, chartHeight, header,point}) => {
  const chartRef = useRef<HTMLDivElement | null>(null)
  const {mode} = useThemeMode()
  const refreshChart = () => {
    if (!chartRef.current) {
      return
    }

    const chart = new ApexCharts(chartRef.current, chartOptions(chartColor, chartHeight, point))
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
  }, [chartRef, mode, point])

  return (
    <div className={`card ${className} bg-example `}>
      {/* begin::Beader */}
      <div className='card-header border-0 py-5'>
        <h3 className='card-title align-items-start flex-column '>
          <span className='card-label fw-bold fs-3 mb-1 text-white'>{header}</span>
          {/* <span className='text-muted fw-semibold fs-7'>Toplan oyunlardaki başarı oranı</span> */}
        </h3>

        
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className='card-body d-flex flex-column'>
        <div className='flex-grow-1'>
          <div ref={chartRef} className='mixed-widget-4-chart'></div>
        </div>

        <div className='pt-5'>
          {/* <a href='#' className={`btn btn-${chartColor} w-100 py-3`}>
            Take Action
          </a> */}
        </div>
      </div>
      {/* end::Body */}
    </div>
  )
}

const chartOptions = (chartColor: string, chartHeight: string, point: number): ApexOptions => {
  const baseColor = getCSSVariableValue('--bs-' + chartColor)
  const lightColor = getCSSVariableValue('--bs-' + chartColor + '-light')
  const labelColor = getCSSVariableValue('--bs-white')

  return {
    series: [point],
    chart: {
      fontFamily: 'inherit',
      height: chartHeight,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: '50%',
        },
        dataLabels: {
          name: {
            show: false,
            fontWeight: '700',
          },
          value: {
            color: labelColor,
            fontSize: '30px',
            fontWeight: '700',
            offsetY: 12,
            show: true,
            formatter: function (val) {
              return val + '%'
            },
          },
        },
        track: {
          background: lightColor,
          strokeWidth: '120%',
        },
      },
    },
    colors: [baseColor],
    stroke: {
      lineCap: 'round',
    },
    labels: ['Progress'],
  }
}

export {MixedWidget7Copy}
