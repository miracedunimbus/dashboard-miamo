/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTIcon} from '../../../../_metronic/helpers'
import {Card4} from '../../../../_metronic/partials/content/cards/Card4'
import ChartWidget9 from '../../../../_metronic/partials/widgets/charts/ChartsWidget9'


export function Documents() {
  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-6'>
        <h3 className='fw-bolder my-2'>
          Rapor 3
          <span className='fs-6 text-gray-400 fw-bold ms-1'>Miray hanımdan alınacak veriler</span>
        </h3>
      </div>
      <a href="https://preview.keenthemes.com/metronic8/demo39/index.html?mode=light">
        1 yıllık geçmiş eğitimlerin toplam oranları hepsi tüm bir yılı kapsayacak şekilde olacak
      </a>
      <br />
<ChartWidget9/>
    </>
  )
}
