import React, { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5radar from '@amcharts/amcharts5/radar';

const ChartWidget10: React.FC = () => {
  useEffect(() => {
    // Create root element
    var root = am5.Root.new("chartdiv");

    // Set themes
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    var chart = root.container.children.push(
      am5radar.RadarChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX",
        innerRadius: am5.percent(20),
        startAngle: -90,
        endAngle: 180,
      })
    );

    // // Add scrollbar
    // chart.set(
    //   "scrollbarX",
    //   am5.Scrollbar.new(root, { orientation: "horizontal" })
    // );


    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/radar-chart/#Cursor
    var cursor = chart.set(
      "cursor",
      am5radar.RadarCursor.new(root, {
        behavior: "zoomX",
      })
    );

    cursor.lineY.set("visible", false);


    // Data
    var data = [
      {
        category: "Okuma becerisi",
        value: 80,
        full: 100,
        columnSettings: {
          fill: am5.color("#4682B4"), 
        },
      },
      {
        category: "Matematiksel-mantıksal",
        value: 80,
        full: 100,
        columnSettings: {
          fill: am5.color("#4169E1"),
        },
      },
      {
        category: "Dikkat-hafıza",
        value: 80,
        full: 100,
        columnSettings: {
          fill: am5.color("#0000FF"), 
        },
      },
      {
        category: "Müziksel-ritmik",
        value: 80,
        full: 100,
        columnSettings: {
          fill: am5.color("#0000CD"), 
        },
      },
      {
        category: "Sözel-dilbilimsel",
        value: 80,
        full: 100,
        columnSettings: {
          fill: am5.color("#00008B"), 
        },
      },
      {
        category: "Görsel-uzamsal",
        value: 80,
        full: 100,
        columnSettings: {
          fill: am5.color("#000080"), 
        },
      },
    ];

    // Create axes and their renderers
// https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_axes
var xRenderer = am5radar.AxisRendererCircular.new(root, {
  //minGridDistance: 50
});

xRenderer.labels.template.setAll({
  radius: 10
});

xRenderer.grid.template.setAll({
  forceHidden: true
});

var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
  renderer: xRenderer,
  min: 0,
  max: 100,
  strictMinMax: true,
  numberFormat: "#'%'",
  tooltip: am5.Tooltip.new(root, {})
}));


var yRenderer = am5radar.AxisRendererRadial.new(root, {
  minGridDistance: 20
});

yRenderer.labels.template.setAll({
  centerX: am5.p100,
  fontWeight: "500",
  fontSize: 18,
  templateField: "columnSettings"
});

yRenderer.grid.template.setAll({
  forceHidden: true
});

var yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
  categoryField: "category",
  renderer: yRenderer
}));

yAxis.data.setAll(data);


  // Create series
// https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_series
var series1 = chart.series.push(am5radar.RadarColumnSeries.new(root, {
  xAxis: xAxis,
  yAxis: yAxis,
  clustered: false,
  valueXField: "full",
  categoryYField: "category",
  fill: root.interfaceColors.get("alternativeBackground")
}));

series1.columns.template.setAll({
  width: am5.p100,
  fillOpacity: 0.08,
  strokeOpacity: 0,
  cornerRadius: 20
});

series1.data.setAll(data);


var series2 = chart.series.push(am5radar.RadarColumnSeries.new(root, {
  xAxis: xAxis,
  yAxis: yAxis,
  clustered: false,
  valueXField: "value",
  categoryYField: "category"
}));

series2.columns.template.setAll({
  width: am5.p100,
  strokeOpacity: 0,
  tooltipText: "{category}: {valueX}%",
  cornerRadius: 20,
  templateField: "columnSettings"
});

series2.data.setAll(data);


    // Make stuff animate on load
    series1.appear(1000);
    series2.appear(1000);
    chart.appear(1000, 100);
  }, []);

  return <div id="chartdiv" style={{ width: "100%", height: "500px" }} />;
};

export default ChartWidget10;
