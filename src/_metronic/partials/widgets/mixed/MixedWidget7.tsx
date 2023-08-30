/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useRef} from 'react'
import ApexCharts, {ApexOptions} from 'apexcharts'
import {KTIcon} from '../../../helpers'
import {getCSSVariableValue} from '../../../assets/ts/_utils'
import {Dropdown1} from '../../content/dropdown/Dropdown1'
import {useThemeMode} from '../../layout/theme-mode/ThemeModeProvider'
import axios from 'axios'

type Props = {
  className: string
  chartColor: string
  chartHeight: string
  header: string
  point: number
  gameCount: number
}

const MixedWidget7: React.FC<Props> = ({className, chartColor, chartHeight, header, point, gameCount}) => {
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
  }, [chartRef, mode])

  return (
    <div className={`card ${className} bg-example`}>
      <div className='card-header border-0 py-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1 text-white'>{header}</span>
          {/* <span className="fw-semibold fs-7 text-white">Oyunlardaki toplam başarı oranı</span> */}
        </h3>

        
      </div>

      <div className='card-body d-flex flex-column'>
        <div className='flex-grow-1'>
          <div ref={chartRef} className='mixed-widget-4-chart'></div>
        </div>

        <div className='pt-5'>
          <h3 className='text-center text-white'>
            {gameCount} oyun
          </h3>
        </div>
      </div>
    </div>
  )
}

const chartOptions = (chartColor: string, chartHeight: string, point: number): ApexOptions => {
  const baseColor = getCSSVariableValue('--bs-' + chartColor)
  const lightColor = getCSSVariableValue('--bs-' + chartColor + '-light')
  const labelColor = getCSSVariableValue('--bs-gray-100')

  

const color = chartColor
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
          size: '70%',
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
              return   '%' + val
            },
          },
        },
        track: {
          background: "#fff",
          strokeWidth: '200%',
        },
      },
    },
    colors: [color],
    stroke: {
      lineCap: 'round',
    },
    labels: ['Progress'],
  }
}

export {MixedWidget7}
