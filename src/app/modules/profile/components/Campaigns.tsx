/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Card5} from '../../../../_metronic/partials/content/cards/Card5'
import { MixedWidget9Copy } from '../../../../_metronic/partials/widgets/mixed/MixedWidget9-copy'

export function Campaigns() {
  const array = [1,2,3,4,5,6,7]

  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-6'>
        <h3 className='fw-bolder my-2'>
          Raporum
        </h3>
      </div>

      <div className="d-flex">
      <MixedWidget9Copy
            className='card-xl-stretch mb-xl-2 col-md-3 mx-auto'
            chartColor='primary'
            chartHeight='150px'
            title='Pazartesi'
          />
          <MixedWidget9Copy
                        className='card-xl-stretch mb-xl-2 col-md-3 mx-auto'

            chartColor='info'
            chartHeight='150px'
            title='Salı'
          />
          <MixedWidget9Copy
                        className='card-xl-stretch mb-xl-2 col-md-3 mx-auto'

            chartColor='success'
            chartHeight='150px'
            title='Çarşamba'
          />
      </div>
      <div className='d-flex'
      >
<MixedWidget9Copy
                        className='card-xl-stretch mb-xl-2 col-md-3 mx-auto'

            chartColor='danger'
            chartHeight='150px'
            title='Perşembe'
          />
          <MixedWidget9Copy
                       className='card-xl-stretch mb-xl-2 col-md-3 mx-auto'

            chartColor='warning'
            chartHeight='150px'
            title='Cuma'
          />
          <MixedWidget9Copy
                        className='card-xl-stretch mb-xl-2 col-md-3 mx-auto'

            chartColor='danger'
            chartHeight='150px'
            title='Cumartesi'
          />
      </div>
      <div className='d-flex'>
      <MixedWidget9Copy
                        className='card-xl-stretch mb-xl-2 col-md-3 mx-auto'

            chartColor='dark'
            chartHeight='150px'
            title='Pazar'
          />
<div className='card-xl-stretch mb-xl-2 col-md-3 mx-auto' > </div>
<div className='card-xl-stretch mb-xl-2 col-md-3 mx-auto' > </div>
        
      </div>
    </>
  )
}
