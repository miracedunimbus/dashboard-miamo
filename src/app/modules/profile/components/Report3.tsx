import { ChartsWidget3 } from "../../../../_metronic/partials/widgets";
import { getUserId } from "../../auth";

export function Report3() {
  const array = [1, 2, 3, 4, 5, 6, 7];
  const userId = getUserId();

  const list1: any[] = [[81, 86, 76, 78, 83, 84, 81, 90], [83, 86, 88, 79, 92, 91, 93, 95], [78, 81, 91, 86, 92, 94, 91, 95], [89,  83, 93, 87, 93, 96, 93, 96], [83, 86, 88, 79, 92, 91, 93, 95]]
  const list2: any[] = [[73,  76, 81, 87, 92, 84, 89,  87], [79, 82, 81, 88, 92, 93, 89, 97], [81, 85, 82, 89, 90, 94, 91, 95], [81, 83, 78, 87, 92, 86, 81, 91],[79, 82, 81, 88, 92, 93, 89, 97]]
  const list3: any[] = [[91,  87, 92, 87, 92, 94, 91, 96], [81, 84, 88, 87, 93, 96, 94, 98], [80, 82, 84, 83, 91, 89, 93, 90], [92, 91, 94, 95, 93, 96, 95, 97], [73, 76, 82, 84, 80, 83, 82, 85]]
  const list4: any[] = [[68, 72, 71, 79, 82, 81, 83, 86], [73, 76, 82, 84, 80, 83, 82, 85], [84, 81, 83, 74, 88, 81, 78, 87], [78, 73, 81, 83, 85, 72, 89, 69],[81, 85, 82, 89, 90, 94, 91, 95]]
  const list5: any[] = [[89, 88, 90, 92, 92, 94, 96, 93], [84, 83, 91, 90, 87, 93, 91, 93], [95, 93, 97, 98, 98, 99, 98, 97], [96, 94, 92, 91, 97,  84, 96, 92], [81, 85, 82, 89, 90, 94, 91, 95]]

  const userData = [list1, list2, list3, list4, list5];

  const data = userData[userId - 1]

  const data1: number[] = data[0]
  const data2: number[] = data[1]
  const data3: number[] = data[2]
  const data4: number[] = data[3]
  const data5: number[] = data[4]

  return (
    <>
      <ChartsWidget3 className="card-xl-stretch mb-xl-8" definition={"Görsel Uzamsal"} chartColor='#EB4C42' data={data1} />

      <ChartsWidget3 className="card-xl-stretch mb-xl-8" definition={"Matematiksel Mantıksal"} chartColor='#084c9e'data={data2} />

      <ChartsWidget3 className="card-xl-stretch mb-xl-8" definition={"Müziksel Ritmik"} chartColor='#C71585'data={data3} />

      <ChartsWidget3 className="card-xl-stretch mb-xl-8" definition={"Dikkat Hafıza"} chartColor='#87CEEB'data={data4} />

      <ChartsWidget3 className="card-xl-stretch mb-xl-8" definition={"Söz Bilimsel"} chartColor='#4B0082'data={data5} />

      <div className="card-xl-stretch mb-xl-2 col-md-10 mx-auto"> </div>
      <div className="card-xl-stretch mb-xl-2 col-md-10 mx-auto"> </div>
    </>
  );
}
