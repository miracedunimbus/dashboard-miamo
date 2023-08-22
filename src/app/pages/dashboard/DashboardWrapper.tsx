import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  ChartsWidget1,
  ChartsWidget2,
  ListsWidget2,
  ListsWidget3,
  ListsWidget4,
  ListsWidget6,
  StatisticsWidget5,
  TablesWidget10,
} from '../../../_metronic/partials/widgets'

const DashboardPage = () => (
  <>
    <div className='row gy-5 gx-xl-8'>
      <div className='col-xxl-4'>
      <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='basket'
            color='danger'
            iconColor='white'
            title='Toplam öğrenci sayısı'
            titleColor='white'
            description='Lands, Houses, Ranchos, Farms'
            descriptionColor='white'
          />
      </div>
      <div className='col-xl-4'>
      <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='cheque'
            color='primary'
            iconColor='white'
            title='toplam eğitim sayısı'
            titleColor='white'
            description='Flats, Shared Rooms, Duplex'
            descriptionColor='white'
          />
      </div>
      <div className='col-xl-4'>
      <StatisticsWidget5
            className='card-xl-stretch mb-5 mb-xl-8'
            svgIcon='chart-simple-3'
            color='success'
            iconColor='white'
            title='Sales Stats'
            titleColor='white'
            description='50% Increased for FY20'
            descriptionColor='white'
          />
      </div>
    </div>

    <div className='row gy-5 gx-xl-8'>
    <TablesWidget10 className='card-xxl-stretch mb-5 mb-xl-8' />
    </div>
    {/* end::Row */}
  </>
)

const DashboardWrapper = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
