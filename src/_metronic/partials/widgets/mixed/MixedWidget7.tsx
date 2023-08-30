/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useRef} from 'react'
import ApexCharts, {ApexOptions} from 'apexcharts'
import {KTIcon} from '../../../helpers'
import {getCSSVariableValue} from '../../../assets/ts/_utils'
import {Dropdown1} from '../../content/dropdown/Dropdown1'
import {useThemeMode} from '../../layout/theme-mode/ThemeModeProvider'
import { getUserId } from '../../../../app/modules/auth'

type Props = {
  className: string
  chartColor: string
  chartHeight: string
  header: string
}

const MixedWidget7: React.FC<Props> = ({className, chartColor, chartHeight, header}) => {
  const chartRef = useRef<HTMLDivElement | null>(null)
  const {mode} = useThemeMode()

  const userId = getUserId();

  const list1: any[] = [82, 33]
  const list2: any[] = [88, 234]
  const list3: any[] = [92, 125]
  const list4: any[] = [78, 83]
  const list5: any[] = [94, 96]


  const userData = [list1, list2, list3, list4, list5];

  console.log(userId)

  const data: number = userData[userId - 1][0]
  const label: string = userData[userId -1][1]

  const refreshChart = () => {
    if (!chartRef.current) {
      return
    }

    const chart = new ApexCharts(chartRef.current, chartOptions(chartColor, chartHeight, data))
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
            {label} oyun
          </h3>
        </div>
      </div>
    </div>
  )
}

const chartOptions = (chartColor: string, chartHeight: string, data:number): ApexOptions => {
  const labelColor = getCSSVariableValue('--bs-gray-100')
  const color = chartColor
  
  return {
    series: [data],
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
