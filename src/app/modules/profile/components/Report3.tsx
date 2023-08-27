import { ChartsWidget3 } from "../../../../_metronic/partials/widgets";

export function Report3() {
  const array = [1, 2, 3, 4, 5, 6, 7];

  return (
    <>
      <ChartsWidget3 className="card-xl-stretch mb-xl-8" definition={"Görsel Uzamsal"} chartColor='#EB4C42' />

      <ChartsWidget3 className="card-xl-stretch mb-xl-8" definition={"Matematiksel Mantıksal"} chartColor='#084c9e' />

      <ChartsWidget3 className="card-xl-stretch mb-xl-8" definition={"Müziksel Ritmik"} chartColor='#C71585' />

      <ChartsWidget3 className="card-xl-stretch mb-xl-8" definition={"Dikkat Hafıza"} chartColor='#87CEEB' />

      <ChartsWidget3 className="card-xl-stretch mb-xl-8" definition={"Söz Bilimsel"} chartColor='#4B0082' />

      <div className="card-xl-stretch mb-xl-2 col-md-10 mx-auto"> </div>
      <div className="card-xl-stretch mb-xl-2 col-md-10 mx-auto"> </div>
    </>
  );
}
