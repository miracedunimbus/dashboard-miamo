/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Card2} from '../../../../_metronic/partials/content/cards/Card2'
import {IconUserModel} from '../ProfileModels'
import { FeedsWidget2, FeedsWidget3, MixedWidget3, MixedWidget7, StatisticsWidget3, StatisticsWidget6 } from '../../../../_metronic/partials/widgets'
import { MixedWidget7Copy } from '../../../../_metronic/partials/widgets/mixed/MixedWidget7-copy'
import { MixedWidget3Copy } from '../../../../_metronic/partials/widgets/mixed/MixedWidget3-copy'
import ApexChart from '../../../../_metronic/partials/widgets/charts/CustomPieChart'

export function Report1() {
  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-6'>
        <h3 className='fw-bolder my-2'>
        Öğrencilerin Alt Zeka Alanlarına Göre Egzersiz Sayısının Yüzdelik Dağılımı
        </h3>
      </div>

        <div className="d-flex">
          <div className="col-md-6 offset-md-2">
            <p>
              {/* pie chart  */}
              {/* <a href='https://preview.keenthemes.com/html/metronic/docs/charts/google-charts/pie'>docs</a> */}
            </p>
            <ApexChart />

          </div>
          
          {/* <div className="col-md-6">
            <MixedWidget7
                className='card-xl-stretch mb-xl-8'
                chartColor='info'
                chartHeight='300px'
                header='ÇALIŞMA RAPORU'
              />
          </div> */}
        </div>

        {/* <div className="d-flex my-6">
          
        <MixedWidget7Copy
                className='card-xl-stretch mb-xl-8 col-md-2 mx-auto'
                chartColor='primary'
                chartHeight='200px'
                header='GÖRSEL UZAMSAL'
              />
              <MixedWidget7Copy
                className='card-xl-stretch mb-xl-8 col-md-2 mx-auto'
                chartColor='info'
                chartHeight='200px'
                header='OKUMA BECERİLERİ'
              />
              <MixedWidget7Copy
                className='card-xl-stretch mb-xl-8 col-md-2 mx-auto'
                chartColor='success'
                chartHeight='200px'
                header='MATEMATİK MANTIK'
              />
              <MixedWidget7Copy
                className='card-xl-stretch mb-xl-8 col-md-2 mx-auto'
                chartColor='danger'
                chartHeight='200px'
                header=' MÜZİKSEL RİTMİK'
              />
              <MixedWidget7Copy
                className='card-xl-stretch mb-xl-8 col-md-2 mx-auto'
                chartColor='warning'
                chartHeight='200px'
                header='SÖZEL DİLBİLİMSEL'
              />
        </div>

        <div className="d-flex">
        <StatisticsWidget6
            className='card-xl-stretch mb-xl-8 col-md-6 h-25'
            color='primary'
            title='400k Impressions'
            description='Marketing Analysis'
            progress='76%'
          />
          <MixedWidget3
            className='card-xl-stretch mb-xl-8 col-md-5  mx-auto'
            chartColor='primary'
            chartHeight='200px'
          />
        </div> */}
    </>
  )
}

// const users1: Array<IconUserModel> = [
//   {name: 'Emma Smith', avatar: '/media/avatars/300-6.jpg'},
//   {name: 'Rudy Stone', avatar: '/media/avatars/300-1.jpg'},
//   {name: 'Susan Redwood', initials: 'S', color: 'primary'},
// ]

// const users2 = [
//   {name: 'Alan Warden', initials: 'A', color: 'warning'},
//   {name: 'Brian Cox', avatar: '/media/avatars/300-5.jpg'},
// ]

// const users3 = [
//   {name: 'Mad Masy', avatar: '/media/avatars/300-6.jpg'},
//   {name: 'Cris Willson', avatar: '/media/avatars/300-1.jpg'},
//   {name: 'Mike Garcie', initials: 'M', color: 'info'},
// ]

// const users4 = [
//   {name: 'Nich Warden', initials: 'N', color: 'warning'},
//   {name: 'Rob Otto', initials: 'R', color: 'success'},
// ]

// const users5 = [
//   {name: 'Francis Mitcham', avatar: '/media/avatars/300-20.jpg'},
//   {name: 'Michelle Swanston', avatar: '/media/avatars/300-7.jpg'},
//   {name: 'Susan Redwood', initials: 'S', color: 'primary'},
// ]

// const users6 = [
//   {name: 'Emma Smith', avatar: '/media/avatars/300-6.jpg'},
//   {name: 'Rudy Stone', avatar: '/media/avatars/300-1.jpg'},
//   {name: 'Susan Redwood', initials: 'S', color: 'primary'},
// ]

// const users7 = [
//   {name: 'Meloday Macy', avatar: '/media/avatars/300-2.jpg'},
//   {name: 'Rabbin Watterman', initials: 'S', color: 'success'},
// ]

// const users8 = [
//   {name: 'Emma Smith', avatar: '/media/avatars/300-6.jpg'},
//   {name: 'Rudy Stone', avatar: '/media/avatars/300-1.jpg'},
//   {name: 'Susan Redwood', initials: 'S', color: 'primary'},
// ]

// const users9 = [
//   {name: 'Meloday Macy', avatar: '/media/avatars/300-2.jpg'},
//   {name: 'Rabbin Watterman', initials: 'S', color: 'danger'},
// ]
