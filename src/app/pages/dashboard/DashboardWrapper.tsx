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
            svgIcon='chart-simple-3'
            color='danger'
            iconColor='white'
            title='Sınıf İstatistikleri'
            titleColor='white'
            description=''
            descriptionColor='white'
          />
      </div>
      {/* <div className='col-xl-4'>
      <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='cheque'
            color='primary'
            iconColor='white'
            title='Appartments'
            titleColor='white'
            description=''
            descriptionColor='white'
          />
      </div> */}
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
      <div className='col-xxl-6'>
        <ChartsWidget1 className='card-xxl-stretch mb-xl-3' />
      </div>
      <div className='col-xl-6'>
        <ChartsWidget2 className='card-xxl-stretch mb-5 mb-xl-8' />
      </div>
    </div>

    {/* begin::Row */}
    <div className='row gy-5 gx-xl-8'>
      <div className='col-xxl-4'>
        <ListsWidget3 className='card-xxl-stretch mb-xl-3' />
      </div>
      <div className='col-xl-8'>
        <TablesWidget10 className='card-xxl-stretch mb-5 mb-xl-8' />
      </div>
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className='row gy-5 g-xl-8'>
      <div className='col-xl-4'>
        <ListsWidget2 className='card-xl-stretch mb-xl-8' />
      </div>
      <div className='col-xl-4'>
        <ListsWidget6 className='card-xl-stretch mb-xl-8' />
      </div>
      <div className='col-xl-4'>
        <ListsWidget4 className='card-xl-stretch mb-5 mb-xl-8' items={5} />
        {/* partials/widgets/lists/_widget-4', 'class' => 'card-xl-stretch mb-5 mb-xl-8', 'items' => '5' */}
      </div>
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
