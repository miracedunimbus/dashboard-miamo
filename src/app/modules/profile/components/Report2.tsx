import {
  MixedWidget7,
} from "../../../../_metronic/partials/widgets";
import { MixedWidget7Copy } from "../../../../_metronic/partials/widgets/mixed/MixedWidget7-copy";

export function Report2() {
  return (
    <>
       <div className='d-flex flex-wrap flex-stack mb-6'>
        <h3 className='fw-bolder my-2'>
          Hangi bilişsel alanda yüzde kaçlık dilimde
        </h3>
      </div>

      <div className="flex flex-col">
        <div className="d-flex">

        <MixedWidget7
              className="card-xl-stretch mb-xl-8 col-md-3 mx-auto"
              chartColor="#007EF9"
              chartHeight="200px"
              header="Oyunlardaki Toplam Başarı Oranı"

            />
          <MixedWidget7Copy
            className="card-xl-stretch mb-xl-8 col-md-3 mx-auto"
            chartColor="primary"
            chartHeight="200px"
            header="GÖRSEL UZAMSAL" point={56}           
          />
          <MixedWidget7Copy
            className="card-xl-stretch mb-xl-8 col-md-3 mx-auto"
            chartColor="success"
            chartHeight="200px"
            header="MATEMATİK MANTIK" point={76}          />
        </div>

        <div className="d-flex">
          <MixedWidget7Copy
            className="card-xl-stretch mb-xl-8 col-md-3 mx-auto"
            chartColor="danger"
            chartHeight="200px"
            header=" MÜZİKSEL RİTMİK" point={83}          />
          <MixedWidget7Copy
            className="card-xl-stretch mb-xl-8 col-md-3 mx-auto"
            chartColor="warning"
            chartHeight="200px"
            header="SÖZEL DİLBİLİMSEL" point={47}          />
          <MixedWidget7Copy
            className="card-xl-stretch mb-xl-8 col-md-3 mx-auto"
            chartColor="dark"
            chartHeight="200px"
            header="DİKKAT HAFIZA" point={23}          />
        </div>
      </div>
    </>
  );
}
