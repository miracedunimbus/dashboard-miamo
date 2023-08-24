/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { KTIcon } from '../../../../_metronic/helpers'
import { Card4 } from '../../../../_metronic/partials/content/cards/Card4'
import ChartWidget9 from '../../../../_metronic/partials/widgets/charts/ChartsWidget9'
import ChartWidget10 from '../../../../_metronic/partials/widgets/charts/ChartsWidget10'
import ApexChart from '../../../../_metronic/partials/widgets/charts/CustomPieChart'


export function Report4() {
  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-6'>
        <h3 className='fw-bolder my-2'>
          Rapor 3
        </h3>

      <ChartWidget10 />
      <br/>
      {/* <ChartWidget9 /> */}
      </div>
    </>
  )
}
