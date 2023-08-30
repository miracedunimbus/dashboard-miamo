import React, { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { getUserId } from "../../../../app/modules/auth";

const ChartWidget9: React.FC = () => {
  useEffect(() => {
    const root = am5.Root.new("chartdiv");

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
      })
    );

    chart.set(
      "scrollbarX",
      am5.Scrollbar.new(root, { orientation: "horizontal" })
    );

    var cursor = chart.set(
      "cursor",
      am5xy.XYCursor.new(root, {
        behavior: "none",
      })
    );
    cursor.lineY.set("visible", false);

    // The data
    var data = [
      [{
        month: "Ocak",
        "matematiksel-mantıksal": 697,
        "dikkat-hafıza": 680,
        "müziksel-ritmik": 101,
        "görsel-uzamsal": 110,
        "sözel-dilbilimsel": 257,
      },
      {
        month: "Şubat",
        "matematiksel-mantıksal": 869,
        "dikkat-hafıza": 664,
        "müziksel-ritmik": 97,
        "görsel-uzamsal": 110,
        "sözel-dilbilimsel": 445,
      },
      {
        month: "Mart",
        "matematiksel-mantıksal": 689,
        "dikkat-hafıza": 648,
        "müziksel-ritmik": 93,
        "görsel-uzamsal": 110,
        "sözel-dilbilimsel": 467,
      },
      {
        month: "Nisan",
        "matematiksel-mantıksal": 869,
        "dikkat-hafıza": 879,
        "müziksel-ritmik": 111,
        "görsel-uzamsal": 110,
        "sözel-dilbilimsel": 346,
      },
      {
        month: "Mayıs",
        "matematiksel-mantıksal": 689,
        "dikkat-hafıza": 633,
        "müziksel-ritmik": 87,
        "görsel-uzamsal": 110,
        "sözel-dilbilimsel": 256,
      },
      {
        month: "Haziran",
        "matematiksel-mantıksal": 789,
        "dikkat-hafıza": 621,
        "müziksel-ritmik": 79,
        "görsel-uzamsal": 110,
        "sözel-dilbilimsel": 986,
      },
      {
        month: "Temmuz",
        "matematiksel-mantıksal": 970,
        "dikkat-hafıza": 210,
        "müziksel-ritmik": 81,
        "görsel-uzamsal": 110,
        "sözel-dilbilimsel": 567,
      },
      {
        month: "Ağustos",
        "matematiksel-mantıksal": 799,
        "dikkat-hafıza": 232,
        "müziksel-ritmik": 75,
        "görsel-uzamsal": 110,
        "sözel-dilbilimsel": 476,
      }],
      [{
        month: "Ocak",
        "matematiksel-mantıksal": 697,
        "dikkat-hafıza": 680,
        "müziksel-ritmik": 101,
        "görsel-uzamsal": 110,
        "sözel-dilbilimsel": 257,
      },
      {
        month: "Şubat",
        "matematiksel-mantıksal": 869,
        "dikkat-hafıza": 664,
        "müziksel-ritmik": 97,
        "görsel-uzamsal": 110,
        "sözel-dilbilimsel": 445,
      },
      {
        month: "Mart",
        "matematiksel-mantıksal": 689,
        "dikkat-hafıza": 648,
        "müziksel-ritmik": 93,
        "görsel-uzamsal": 110,
        "sözel-dilbilimsel": 467,
      },
      {
        month: "Nisan",
        "matematiksel-mantıksal": 869,
        "dikkat-hafıza": 879,
        "müziksel-ritmik": 111,
        "görsel-uzamsal": 110,
        "sözel-dilbilimsel": 346,
      },
      {
        month: "Mayıs",
        "matematiksel-mantıksal": 689,
        "dikkat-hafıza": 633,
        "müziksel-ritmik": 87,
        "görsel-uzamsal": 110,
        "sözel-dilbilimsel": 256,
      },
      {
        month: "Haziran",
        "matematiksel-mantıksal": 789,
        "dikkat-hafıza": 621,
        "müziksel-ritmik": 79,
        "görsel-uzamsal": 110,
        "sözel-dilbilimsel": 986,
      },
      {
        month: "Temmuz",
        "matematiksel-mantıksal": 970,
        "dikkat-hafıza": 210,
        "müziksel-ritmik": 81,
        "görsel-uzamsal": 110,
        "sözel-dilbilimsel": 567,
      },
      {
        month: "Ağustos",
        "matematiksel-mantıksal": 799,
        "dikkat-hafıza": 232,
        "müziksel-ritmik": 75,
        "görsel-uzamsal": 110,
        "sözel-dilbilimsel": 476,
      }],
      [{
        month: "Ocak",
        "matematiksel-mantıksal": 697,
        "dikkat-hafıza": 680,
        "müziksel-ritmik": 101,
        "görsel-uzamsal": 110,
        "sözel-dilbilimsel": 257,
      },
      {
        month: "Şubat",
        "matematiksel-mantıksal": 869,
        "dikkat-hafıza": 664,
        "müziksel-ritmik": 97,
        "görsel-uzamsal": 110,
        "sözel-dilbilimsel": 445,
      },
      {
        month: "Mart",
        "matematiksel-mantıksal": 689,
        "dikkat-hafıza": 648,
        "müziksel-ritmik": 93,
        "görsel-uzamsal": 110,
        "sözel-dilbilimsel": 467,
      },
      {
        month: "Nisan",
        "matematiksel-mantıksal": 869,
        "dikkat-hafıza": 879,
        "müziksel-ritmik": 111,
        "görsel-uzamsal": 110,
        "sözel-dilbilimsel": 346,
      },
      {
        month: "Mayıs",
        "matematiksel-mantıksal": 689,
        "dikkat-hafıza": 633,
        "müziksel-ritmik": 87,
        "görsel-uzamsal": 110,
        "sözel-dilbilimsel": 256,
      },
      {
        month: "Haziran",
        "matematiksel-mantıksal": 789,
        "dikkat-hafıza": 621,
        "müziksel-ritmik": 79,
        "görsel-uzamsal": 110,
        "sözel-dilbilimsel": 986,
      },
      {
        month: "Temmuz",
        "matematiksel-mantıksal": 970,
        "dikkat-hafıza": 210,
        "müziksel-ritmik": 81,
        "görsel-uzamsal": 110,
        "sözel-dilbilimsel": 567,
      },
      {
        month: "Ağustos",
        "matematiksel-mantıksal": 799,
        "dikkat-hafıza": 232,
        "müziksel-ritmik": 75,
        "görsel-uzamsal": 110,
        "sözel-dilbilimsel": 476,
      }],
      [{
        month: "Ocak",
        "matematiksel-mantıksal": 697,
        "dikkat-hafıza": 680,
        "müziksel-ritmik": 101,
        "görsel-uzamsal": 110,
        "sözel-dilbilimsel": 257,
      },
      {
        month: "Şubat",
        "matematiksel-mantıksal": 869,
        "dikkat-hafıza": 664,
        "müziksel-ritmik": 97,
        "görsel-uzamsal": 110,
        "sözel-dilbilimsel": 445,
      },
      {
        month: "Mart",
        "matematiksel-mantıksal": 689,
        "dikkat-hafıza": 648,
        "müziksel-ritmik": 93,
        "görsel-uzamsal": 110,
        "sözel-dilbilimsel": 467,
      },
      {
        month: "Nisan",
        "matematiksel-mantıksal": 869,
        "dikkat-hafıza": 879,
        "müziksel-ritmik": 111,
        "görsel-uzamsal": 110,
        "sözel-dilbilimsel": 346,
      },
      {
        month: "Mayıs",
        "matematiksel-mantıksal": 689,
        "dikkat-hafıza": 633,
        "müziksel-ritmik": 87,
        "görsel-uzamsal": 110,
        "sözel-dilbilimsel": 256,
      },
      {
        month: "Haziran",
        "matematiksel-mantıksal": 789,
        "dikkat-hafıza": 621,
        "müziksel-ritmik": 79,
        "görsel-uzamsal": 110,
        "sözel-dilbilimsel": 986,
      },
      {
        month: "Temmuz",
        "matematiksel-mantıksal": 970,
        "dikkat-hafıza": 210,
        "müziksel-ritmik": 81,
        "görsel-uzamsal": 110,
        "sözel-dilbilimsel": 567,
      },
      {
        month: "Ağustos",
        "matematiksel-mantıksal": 799,
        "dikkat-hafıza": 232,
        "müziksel-ritmik": 75,
        "görsel-uzamsal": 110,
        "sözel-dilbilimsel": 476,
      }],
      [{
        month: "Ocak",
        "matematiksel-mantıksal": 697,
        "dikkat-hafıza": 680,
        "müziksel-ritmik": 101,
        "görsel-uzamsal": 110,
        "sözel-dilbilimsel": 257,
      },
      {
        month: "Şubat",
        "matematiksel-mantıksal": 869,
        "dikkat-hafıza": 664,
        "müziksel-ritmik": 97,
        "görsel-uzamsal": 110,
        "sözel-dilbilimsel": 445,
      },
      {
        month: "Mart",
        "matematiksel-mantıksal": 689,
        "dikkat-hafıza": 648,
        "müziksel-ritmik": 93,
        "görsel-uzamsal": 110,
        "sözel-dilbilimsel": 467,
      },
      {
        month: "Nisan",
        "matematiksel-mantıksal": 869,
        "dikkat-hafıza": 879,
        "müziksel-ritmik": 111,
        "görsel-uzamsal": 110,
        "sözel-dilbilimsel": 346,
      },
      {
        month: "Mayıs",
        "matematiksel-mantıksal": 689,
        "dikkat-hafıza": 633,
        "müziksel-ritmik": 87,
        "görsel-uzamsal": 110,
        "sözel-dilbilimsel": 256,
      },
      {
        month: "Haziran",
        "matematiksel-mantıksal": 789,
        "dikkat-hafıza": 621,
        "müziksel-ritmik": 79,
        "görsel-uzamsal": 110,
        "sözel-dilbilimsel": 986,
      },
      {
        month: "Temmuz",
        "matematiksel-mantıksal": 970,
        "dikkat-hafıza": 210,
        "müziksel-ritmik": 81,
        "görsel-uzamsal": 110,
        "sözel-dilbilimsel": 567,
      },
      {
        month: "Ağustos",
        "matematiksel-mantıksal": 799,
        "dikkat-hafıza": 232,
        "müziksel-ritmik": 75,
        "görsel-uzamsal": 110,
        "sözel-dilbilimsel": 476,
      }]
    ];

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "month",
        startLocation: 0.5,
        endLocation: 0.5,
        renderer: am5xy.AxisRendererX.new(root, {}),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    const userId = getUserId();
      const newData = data[userId - 1]
      console.log(newData)
    xAxis.data.setAll(newData);

    var yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/

    function createSeries(name, field, newData) {
      var series = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: name,
          xAxis: xAxis,
          yAxis: yAxis,
          stacked: true,
          valueYField: field,
          categoryXField: "month",
          tooltip: am5.Tooltip.new(root, {
            pointerOrientation: "horizontal",
            labelText: "[bold]{name}[/]\n{categoryX}: {valueY}",
          }),
        })
      );

      series.fills.template.setAll({
        fillOpacity: 0.5,
        visible: true,
      });

      series.data.setAll(newData);
      series.appear(1000);
    }

    createSeries("Görsel Uzamsal", "görsel-uzamsal", newData);
    createSeries("Matematiksel Mantıksal", "matematiksel-mantıksal", newData);
    createSeries("Sözel Dilbilimsel", "sözel-dilbilimsel", newData);
    createSeries("Dikkat Hafıza", "dikkat-hafıza", newData);
    createSeries("Müziksel Ritmik Zeka", "müziksel-ritmik", newData);

    // Make stuff animate on load
    chart.appear(1000, 100);
  }, []);

  return <div id="chartdiv" style={{ width: "100%", height: "500px" }} />;
};

export default ChartWidget9;
