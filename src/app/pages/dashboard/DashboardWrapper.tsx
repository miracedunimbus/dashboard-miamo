import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  StatisticsWidget5,
  TablesWidget10,
} from '../../../_metronic/partials/widgets'

const DashboardPage = () => (
  <>
    <div className='row gy-5 gx-xl-8'>
      <div className='col-xxl-4'>
      <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='chart-simple-3'
            color='danger'
            iconColor='white'
            title='Sınıf İstatistikleri'
            titleColor='white'
            description=''
            descriptionColor='white'
          />
      </div>
    
      <div className='col-xl-4'>
      <StatisticsWidget5
            className='card-xl-stretch mb-5 mb-xl-8'
            svgIcon='chart-simple-3'
            color='success'
            iconColor='white'
            title='Öğrenci İstatistikleri'
            titleColor='white'
            description=''
            descriptionColor='white'
          />
      </div>
    </div>

    <div className='row gy-5 gx-xl-8'>
    <TablesWidget10 className='card-xxl-stretch mb-5 mb-xl-8' />
    </div>
   
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
