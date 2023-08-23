/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Card5 } from "../../../../_metronic/partials/content/cards/Card5";
import { MixedWidget9Copy } from "../../../../_metronic/partials/widgets/mixed/MixedWidget9-copy";

export function Campaigns() {
  const array = [1, 2, 3, 4, 5, 6, 7];

  return (
    <>
      <div className="d-flex flex-wrap flex-stack mb-6">
        <h3 className="fw-bolder my-2">Raporum</h3>
      </div>

      <div className="d-flex">
        <MixedWidget9Copy
          className="card-xl-stretch mb-xl-2 me-auto"
          chartColor="primary"
          chartHeight="150px"
          description={"Pazartesi"}
        />
        <MixedWidget9Copy
          className="card-xl-stretch mb-xl-2 me-auto"
          chartColor="info"
          chartHeight="150px"
          description={"Salı"}
        />
        <MixedWidget9Copy
          className="card-xl-stretch mb-xl-2 me-auto"
          chartColor="primary"
          chartHeight="150px"
          description={"Çarşamba"}
        />
      </div>
      <div className="d-flex">
        <MixedWidget9Copy
          className="card-xl-stretch mb-xl-2 me-auto"
          chartColor="info"
          chartHeight="150px"
          description={"Perşembe"}
        />
        <MixedWidget9Copy
          className="card-xl-stretch mb-xl-2 me-auto"
          chartColor="primary"
          chartHeight="150px"
          description={"Cuma"}
        />
        <MixedWidget9Copy
          className="card-xl-stretch mb-xl-2 me-auto"
          chartColor="info"
          chartHeight="150px"
          description={"Cumartesi"}
        />
      </div>
      <div className="d-flex">
        <MixedWidget9Copy
          className="card-xl-stretch mb-xl-2 me-auto"
          chartColor="primary"
          chartHeight="150px"
          description={"Pazar"}
        />
      </div>
    </>
  );
}
