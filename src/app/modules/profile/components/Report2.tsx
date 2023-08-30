import axios from "axios";
import {
  MixedWidget7,
} from "../../../../_metronic/partials/widgets";
import { MixedWidget7Copy } from "../../../../_metronic/partials/widgets/mixed/MixedWidget7-copy";
import { useEffect, useState } from "react";
import { getUserCategoryData, getUserData } from "../../../../services/getUserData";
import { SubCategoryWrapper } from "../../../../services/SubCategoryWrapper";
import { getParentCat } from "../../../../services/parantCatData";

export function Report2() {

  const [data, setData]: any = useState(null);
  const [gorsel, setGorsel]: any = useState(null);
  const [matematik, setMatematik]: any = useState(null);
  const [muzik, setMuzik]: any = useState(null);
  const [sozel, setSozel]: any = useState(null);
  const [dikkat, setDikkat]: any = useState(null);

  useEffect(() => {
    async function fetchData() {
      const userData = await getUserData(17);
      if (userData) {
        setData(userData);
      }
    }
    fetchData();

    async function getCategoryData() {
      const userCategoryData = await getParentCat(17);
      const parentCatData = await SubCategoryWrapper(userCategoryData.result.data4, 2)
      console.log(parentCatData)
      setGorsel(parentCatData[0])
      setMatematik(parentCatData[1])
      setMuzik(parentCatData[2])
      setSozel(parentCatData[3])
      setDikkat(parentCatData[4])
    }
    getCategoryData()

  }, []);

  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-6'>
        <h3 className='fw-bolder my-2'>
          Hangi bilişsel alanda yüzde kaçlık dilimde
        </h3>
      </div>

      <div className="flex flex-col">
        <div className="d-flex">
          {data && data.amount !== undefined && (
            <MixedWidget7
              className="card-xl-stretch mb-xl-8 col-md-3 mx-auto"
              chartColor="#007EF9"
              chartHeight="200px"
              header="Oyunlardaki Toplam Başarı Oranı"
              point={data.result}
              gameCount={data.amount}
            />
          )}
          {
            gorsel && (
              <MixedWidget7Copy
                className="card-xl-stretch mb-xl-8 col-md-3 mx-auto"
                chartColor="primary"
                chartHeight="200px"
                header="GÖRSEL UZAMSAL"
                point={gorsel}
              />
            )
          }
          {
            matematik &&
            <MixedWidget7Copy
              className="card-xl-stretch mb-xl-8 col-md-3 mx-auto"
              chartColor="success"
              chartHeight="200px"
              header="MATEMATİK MANTIK"
              point={matematik}
            />
          }
        </div>

        <div className="d-flex">
          {
            muzik && (
              <MixedWidget7Copy
                className="card-xl-stretch mb-xl-8 col-md-3 mx-auto"
                chartColor="danger"
                chartHeight="200px"
                header=" MÜZİKSEL RİTMİK"
                point={muzik}
              />
            )
          }
          {
            sozel && (
              <MixedWidget7Copy
                className="card-xl-stretch mb-xl-8 col-md-3 mx-auto"
                chartColor="warning"
                chartHeight="200px"
                header="SÖZEL DİLBİLİMSEL"
                point={sozel}
              />
            )
          }
          {
            dikkat && dikkat > 0 && (
              <MixedWidget7Copy
                className="card-xl-stretch mb-xl-8 col-md-3 mx-auto"
                chartColor="dark"
                chartHeight="200px"
                header="DİKKAT HAFIZA"
                point={dikkat}
              />
            )
          }
        </div>
      </div>
    </>
  );
}