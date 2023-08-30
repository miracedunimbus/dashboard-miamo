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
            <ApexChart />
          </div>
        </div>
    </>
  )
}