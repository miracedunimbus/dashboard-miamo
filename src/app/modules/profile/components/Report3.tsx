import axios from "axios";
import { ChartsWidget3 } from "../../../../_metronic/partials/widgets";
import { useEffect, useState } from "react";
// import { getUserCatYearData } from "../../../../services/getUserData";
import { Monthly, setYearDataByDatas } from "../../../../services/SubCategoryWrapper";
import { getYearDataCat } from "../../../../services/parantCatData";

export function Report3() {
  const array = [1, 2, 3, 4, 5, 6, 7];
  const [data, setData] = useState({});
  // const [state, setState] = useState<'loading' | 'done' | null>(null);
  const [month, setMonth]: any[] = useState({})
  const [yearData, setYearData]: any[] = useState({})
  const [gorsel, setGorsel]: any[] = useState(null);
  const [matematik, setMatematik]: any[] = useState(null);
  const [muzik, setMuzik]: any[] = useState(null);
  const [sozel, setSozel]: any[] = useState(null);
  const [dikkat, setDikkat]: any[] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const userData = await getYearDataCat(17);
      if (userData) {
        setData(userData);
        setMonth(userData.months)
        const monthlyData = await Monthly(userData.yearData, 0)
        setYearData(monthlyData)
        const data = await setYearDataByDatas(monthlyData)
        setGorsel(data.gorsel)
        setMatematik(data.matematik)
        setMuzik(data.muzik)
        setSozel(data.sozel)
        setDikkat(data.dikkat)
      }
    }

    fetchData();
  }, []);

  return (
    <>
      { gorsel && <ChartsWidget3 className="card-xl-stretch mb-xl-8" definition={"Görsel Uzamsal"} chartColor='#EB4C42' data={gorsel} month={month} /> }
      
      { matematik &&  <ChartsWidget3 className="card-xl-stretch mb-xl-8" definition={"Matematiksel Mantıksal"} chartColor='#084c9e' data={matematik} month={month} /> }
      
      { muzik && <ChartsWidget3 className="card-xl-stretch mb-xl-8" definition={"Müziksel Ritmik"} chartColor='#C71585' data={muzik} month={month} />  }

      { dikkat && <ChartsWidget3 className="card-xl-stretch mb-xl-8" definition={"Dikkat Hafıza"} chartColor='#87CEEB' data={dikkat} month={month} /> }

      { sozel && <ChartsWidget3 className="card-xl-stretch mb-xl-8" definition={"Söz Bilimsel"} chartColor='#4B0082' data={sozel} month={month} /> }

    </>
  );
}