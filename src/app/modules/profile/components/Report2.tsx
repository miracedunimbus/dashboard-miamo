import React from "react";
import {
  MixedWidget7,
  MixedWidget3,
} from "../../../../_metronic/partials/widgets";

export function Report2() {
  return (
    <>

        <div>
          <div className="d-flex justify-content-around">    
            <MixedWidget7
              className="card-xl-stretch mb-xl-6 col-md-5 bg-example"
              chartColor="#f1416c"
              chartHeight="300px"
              header="Çalışma Raporu"
            />
            <MixedWidget7
              className="card-xl-stretch mb-xl-8 col-md-5 bg-example"
              chartColor="#007EF9"
              chartHeight="300px"
              header="Öğrenci başarı raporu"
            />
          </div>

          {/* <MixedWidget3
            className="card-xl-stretch mb-xl-8 col-md-12 mx-auto bg-example"
            chartColor="bg-example"
            chartHeight="400px"
          /> */}
        </div>
      

  
    </>
  );
}

// Rest of the code
