import {
  MixedWidget7,
} from "../../../../_metronic/partials/widgets";
import { MixedWidget7Copy } from "../../../../_metronic/partials/widgets/mixed/MixedWidget7-copy";
import { getUserId } from "../../auth";

export function Report2() {
  const userId = getUserId();

  const list1: any[] = [84, 81, 90, 87, 92]
  const list2: any[] = [85, 91, 87, 90, 86]
  const list3: any[] = [89, 92, 91, 87, 94]
  const list4: any[] = [76, 79, 82, 85, 74]
  const list5: any[] = [92, 88, 98, 96, 95]

  const userData = [list1, list2, list3, list4, list5];

  console.log(userId)

  const data: number[] = userData[userId - 1]


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
            header="GÖRSEL UZAMSAL" point={data[0]}           
          />
          <MixedWidget7Copy
            className="card-xl-stretch mb-xl-8 col-md-3 mx-auto"
            chartColor="success"
            chartHeight="200px"
            header="MATEMATİK MANTIK" point={data[1]}          />
        </div>

        <div className="d-flex">
          <MixedWidget7Copy
            className="card-xl-stretch mb-xl-8 col-md-3 mx-auto"
            chartColor="danger"
            chartHeight="200px"
            header=" MÜZİKSEL RİTMİK" point={data[2]}          />
          <MixedWidget7Copy
            className="card-xl-stretch mb-xl-8 col-md-3 mx-auto"
            chartColor="warning"
            chartHeight="200px"
            header="SÖZEL DİLBİLİMSEL" point={data[3]}          />
          <MixedWidget7Copy
            className="card-xl-stretch mb-xl-8 col-md-3 mx-auto"
            chartColor="dark"
            chartHeight="200px"
            header="DİKKAT HAFIZA" point={data[4]}          />
        </div>
      </div>
    </>
  );
}
