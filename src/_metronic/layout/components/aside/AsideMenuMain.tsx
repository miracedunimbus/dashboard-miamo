/* eslint-disable react/jsx-no-target-blank */
import {useIntl} from 'react-intl'
import {KTIcon} from '../../../helpers'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'
import { CheckUserLoggedIn } from '../../../../app/modules/auth'

export function AsideMenuMain() {
  const intl = useIntl()
  const user: string = "teacher";
  const currentUser: any = CheckUserLoggedIn()
  console.log(currentUser)

  return (
    <>
      {
        currentUser?.role !== 'student'  && (
          <AsideMenuItem
            to='/dashboard'
            icon='element-11'
            title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
          />
        )
      }
      
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Crafted</span>
        </div>
      </div>
      <AsideMenuItem to='/crafted/pages/profile/report1' icon='shield-tick' title='Raporum' />
      <AsideMenuItem to='/crafted/account/overview' icon='shield-tick' title='Profil' />

      
      <div className='menu-item'>
        <div className='menu-content'>
          <div className='separator mx-1 my-4'></div>
        </div>
      </div>
    </>
  )
}
