/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import { KTIcon } from '../../../../_metronic/helpers'
import {
  CardsWidget17,
  ChartsWidget1,
  ListsWidget5,
  MixedWidget7,
  TablesWidget1,
  TablesWidget5,
} from '../../../../_metronic/partials/widgets'

export function Overview() {
  return (
    <>
      <div className='card mb-5 mb-xl-10' id='kt_profile_details_view'>
        <div className='card-header cursor-pointer'>
          <div className='card-title m-0'>
            <h3 className='fw-bolder m-0'>Profil Detay</h3>
          </div>

          {/* <Link to='/crafted/account/settings' className='btn btn-primary align-self-center'>
            Edit Profile
          </Link> */}
        </div>

        <div className='card-body p-9'>
          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>İsim Soyisim</label>

            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>Aleyna Yılmaz</span>
            </div>
          </div>

          {/* <div className='notice d-flex bg-light-warning rounded border-warning border border-dashed p-6'>
            <KTIcon iconName='information-5' className='fs-2tx text-warning me-4' />
            <div className='d-flex flex-stack flex-grow-1'>
              <div className='fw-bold'>
                <h4 className='text-gray-800 fw-bolder'>We need your attention!</h4>
                <div className='fs-6 text-gray-600'>
                  Your payment was declined. To start using tools, please
                  <Link className='fw-bolder' to='/crafted/account/settings'>
                    {' '}
                    Add Payment Method
                  </Link>
                  .
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* <div className='row gy-10 gx-xl-12'>
        <div className='col-xl-2'>
          <MixedWidget7
            className='card-xl-stretch mb-xl-8'
            chartColor='primary'
            chartHeight='200px'
            header='deneme'

          />
        </div>

        <div className='col-xl-2'>
          <MixedWidget7
            className='card-xl-stretch mb-xl-8'
            chartColor='primary'
            chartHeight='200px'
            header='deneme'

          />
        </div>

        <div className='col-xl-2'>
          <MixedWidget7
            className='card-xl-stretch mb-xl-8'
            chartColor='primary'
            chartHeight='200px'
            header='deneme'

          />
        </div>

        <div className='col-xl-2'>
          <MixedWidget7
            className='card-xl-stretch mb-xl-8'
            chartColor='primary'
            chartHeight='200px'
            header='deneme'

          />
        </div>

        <div className='col-xl-2'>
          <MixedWidget7
            className='card-xl-stretch mb-xl-8'
            chartColor='primary'
            chartHeight='200px'
            header='deneme'

          />
        </div>

        <div className='col-xl-2'>
          <MixedWidget7
            className='card-xl-stretch mb-xl-8'
            chartColor='primary'
            chartHeight='200px'
            header='deneme'

          />
        </div>
      </div>

      <div className='row gy-10 gx-xl-10'>
        <div className='col-xl-6'>
          <ChartsWidget1 className='card-xxl-stretch mb-5 mb-xl-10' />
        </div>

        <div className='col-xl-6'>
          <TablesWidget1 className='card-xxl-stretch mb-5 mb-xl-10' />

        </div>
      </div>

      <div className="row gy-10 gx-xl-12">
        <div className='col-xl-6'>
          <CardsWidget17 className='card-xxl-stretch mb-5 mb-xl-10' />
        </div>

        <div className='col-xl-6'>
          <CardsWidget17 className='card-xxl-stretch mb-5 mb-xl-10' />

        </div>
      </div>

      <div className='row gy-10 gx-xl-10'>
        <div className='col-xl-6'>
          <ListsWidget5 className='card-xxl-stretch mb-5 mb-xl-10' />
        </div>

        <div className='col-xl-6'>
          <TablesWidget5 className='card-xxl-stretch mb-5 mb-xl-10' />
        </div>
      </div> */}
    </>
  )
}
