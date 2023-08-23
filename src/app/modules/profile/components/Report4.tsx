/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Card5 } from "../../../../_metronic/partials/content/cards/Card5";
import { MixedWidget9Copy } from "../../../../_metronic/partials/widgets/mixed/MixedWidget9-copy";
import { ChartsWidget3 } from "../../../../_metronic/partials/widgets";

export function Report4() {
  const array = [1, 2, 3, 4, 5, 6, 7];

  return (
    <>
      <div className="d-flex flex-wrap flex-stack mb-6">
        <h3 className="fw-bolder my-2">Raporum</h3>
      </div>

      {/* <div className="d-flex-col">
        <MixedWidget9Copy
          className="card-xl-stretch mb-xl-2 col-md-10 mx-auto"
          chartColor="primary"
          chartHeight="150px"
          title="Pazartesi"
        />
        <MixedWidget9Copy
          className="card-xl-stretch mb-xl-2 col-md-10 mx-auto"
          chartColor="info"
          chartHeight="150px"
          title="Salı"
        />
        <MixedWidget9Copy
          className="card-xl-stretch mb-xl-2 col-md-10 mx-auto"
          chartColor="success"
          chartHeight="150px"
          title="Çarşamba"
        />
      </div>
      <div className="d-flex-col">
        <MixedWidget9Copy
          className="card-xl-stretch mb-xl-2 col-md-10 mx-auto"
          chartColor="danger"
          chartHeight="150px"
          title="Perşembe"
        />
        <MixedWidget9Copy
          className="card-xl-stretch mb-xl-2 col-md-10 mx-auto"
          chartColor="warning"
          chartHeight="150px"
          title="Cuma"
        />
        <MixedWidget9Copy
          className="card-xl-stretch mb-xl-2 col-md-10 mx-auto"
          chartColor="danger"
          chartHeight="150px"
          title="Cumartesi"
        />
      </div>
      <div className="d-flex-col">
        <MixedWidget9Copy
          className="card-xl-stretch mb-xl-2 col-md-10 mx-auto"
          
          chartHeight="150px"
          title="Pazar"
        /> */}

      <ChartsWidget3 className="card-xl-stretch mb-xl-8" definition={"Pazartesi"} chartColor='#EB4C42' />

      <ChartsWidget3 className="card-xl-stretch mb-xl-8" definition={"Salı"} chartColor='#084c9e' />

      <ChartsWidget3 className="card-xl-stretch mb-xl-8" definition={"Çarşamba"} chartColor='#C71585' />

      <ChartsWidget3 className="card-xl-stretch mb-xl-8" definition={"Perşembe"} chartColor='#87CEEB' />

      <ChartsWidget3 className="card-xl-stretch mb-xl-8" definition={"Cuma"} chartColor='#4B0082' />

      <ChartsWidget3 className="card-xl-stretch mb-xl-8" definition={"Cumartesi"} chartColor='#5F9EA0' />

      <ChartsWidget3 className="card-xl-stretch mb-xl-8" definition={"Pazar"} chartColor='#ffd700'/>

      <div className="card-xl-stretch mb-xl-2 col-md-10 mx-auto"> </div>
      <div className="card-xl-stretch mb-xl-2 col-md-10 mx-auto"> </div>
    </>
  );
}
