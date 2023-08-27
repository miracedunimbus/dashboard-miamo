/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../_metronic/helpers'
import {Link, useLocation} from 'react-router-dom'
import {Dropdown1} from '../../../_metronic/partials'

const ProfileHeader: React.FC = () => {
  const location = useLocation()

  return (
    <div className='card mb-5 mb-xl-10'>
      <div className='card-body pt-9 pb-0'>
        <div className='d-flex overflow-auto h-55px'>
          <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/crafted/pages/profile/report1' && 'active')
                }
                to='/crafted/pages/profile/report1'
              >
                Çalışma Raporu
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/crafted/pages/profile/report3' && 'active')
                }
                to='/crafted/pages/profile/report3'
              >
                Bilişsel Analiz Raporu
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/crafted/pages/profile/report4' && 'active')
                }
                to='/crafted/pages/profile/report4'
              >
                Zaman Süreci Raporu / Aylık
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/crafted/pages/profile/report5' && 'active')
                }
                to='/crafted/pages/profile/report5'
              >
                Zaman Süreci Raporu / Yıllık
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/crafted/pages/profile/report6' && 'active')
                }
                to='/crafted/pages/profile/report6'
              >
                Bilişsel Analiz Raporu
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/crafted/pages/profile/result' && 'active')
                }
                to='/crafted/pages/profile/result'
              >
                Sonuç
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export {ProfileHeader}
