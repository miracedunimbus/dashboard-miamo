import React, { useEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

const ChartWidget9: React.FC = () => {
  useEffect(() => {
    // Create root element
    const root = am5.Root.new('chartdiv');

    // Set themes
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: 'panX',
        wheelY: 'zoomX',
        pinchZoomX: true,
      })
    );

    // Rest of the code...

    // Add scrollbar
    chart.set('scrollbarX', am5.Scrollbar.new(root, { orientation: 'horizontal' }));
// Add cursor
// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
    behavior: "none"
  }));
  cursor.lineY.set("visible", false);
  
  
  // The data
  var data = [ {
    "month": "Ocak",
    "okuma-beceri": 1298,
    "matematiksel-mantıksal": 697,
    "dikkat-hafıza": 680,
    "müziksel-ritmik": 101,
    "görsel-uzamsal":110,
    "sözel-dilbilimsel":257,
  }, {
    "month": "Şubat",
    "okuma-beceri": 1275,
    "matematiksel-mantıksal": 869,
    "dikkat-hafıza": 664,
    "müziksel-ritmik": 97,
    "görsel-uzamsal":110,
    "sözel-dilbilimsel":445,
  }, {
    "month": "Mart",
    "okuma-beceri": 1246,
    "matematiksel-mantıksal": 689,
    "dikkat-hafıza": 648,
    "müziksel-ritmik": 93,
    "görsel-uzamsal":110,
    "sözel-dilbilimsel":467,
  }, {
    "month": "Nisan",
    "okuma-beceri": 1318,
    "matematiksel-mantıksal": 869,
    "dikkat-hafıza": 879,
    "müziksel-ritmik": 111,
    "görsel-uzamsal":110,
    "sözel-dilbilimsel":346,
  }, {
    "month": "Mayıs",
    "okuma-beceri": 1213,
    "matematiksel-mantıksal": 689,
    "dikkat-hafıza": 633,
    "müziksel-ritmik": 87,
    "görsel-uzamsal":110,
    "sözel-dilbilimsel":256,
  }, {
    "month": "Haziran",
    "okuma-beceri": 1199,
    "matematiksel-mantıksal": 789,
    "dikkat-hafıza": 621,
    "müziksel-ritmik": 79,
    "görsel-uzamsal":110,
    "sözel-dilbilimsel":986,
  }, {
    "month": "Temmuz",
    "okuma-beceri": 1110,
    "matematiksel-mantıksal": 970,
    "dikkat-hafıza": 210,
    "müziksel-ritmik": 81,
    "görsel-uzamsal":110,
    "sözel-dilbilimsel":567,
  }, {
    "month": "Ağustos",
    "okuma-beceri": 1165,
    "matematiksel-mantıksal": 799,
    "dikkat-hafıza": 232,
    "müziksel-ritmik": 75,
    "görsel-uzamsal":110,
    "sözel-dilbilimsel":476,
  }, {
    "month": "Eylül",
    "okuma-beceri": 1145,
    "matematiksel-mantıksal": 797,
    "dikkat-hafıza": 219,
    "müziksel-ritmik": 88,
    "görsel-uzamsal":110,
    "sözel-dilbilimsel":486,
  }, {
    "month": "Ekim",
    "okuma-beceri": 1163,
    "matematiksel-mantıksal": 455,
    "dikkat-hafıza": 201,
    "müziksel-ritmik": 82,
    "görsel-uzamsal":110,
    "sözel-dilbilimsel":478,
  }, {
    "month": "Kasım",
    "okuma-beceri": 1180,
    "matematiksel-mantıksal": 456,
    "dikkat-hafıza": 285,
    "müziksel-ritmik": 87,
    "görsel-uzamsal":110,
    "sözel-dilbilimsel":365,
  }, {
    "month": "Aralık",
    "okuma-beceri": 1159,
    "matematiksel-mantıksal": 786,
    "dikkat-hafıza": 277,
    "müziksel-ritmik": 71,
    "görsel-uzamsal":110,
    "sözel-dilbilimsel":235,
  }];
  
  
  // Create axes
  // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
  var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
    categoryField: "month",
    startLocation: 0.5,
    endLocation: 0.5,
    renderer: am5xy.AxisRendererX.new(root, {}),
    tooltip: am5.Tooltip.new(root, {})
  }));
  
  xAxis.data.setAll(data);
  
  var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    renderer: am5xy.AxisRendererY.new(root, {})
  }));
  
  // Add series
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  
  function createSeries(name, field) {
    var series = chart.series.push(am5xy.LineSeries.new(root, {
      name: name,
      xAxis: xAxis,
      yAxis: yAxis,
      stacked:true,
      valueYField: field,
      categoryXField: "month",
      tooltip: am5.Tooltip.new(root, {
        pointerOrientation: "horizontal",
        labelText: "[bold]{name}[/]\n{categoryX}: {valueY}"
      })
    }));
  
    series.fills.template.setAll({
      fillOpacity: 0.5,
      visible: true
    });
  
    series.data.setAll(data);
    series.appear(1000);
  }
  
createSeries("Görsel Uzamsal", "görsel-uzamsal");
createSeries("Okuma Becerileri", "okuma-beceri");
createSeries("Matematiksel Mantıksal", "matematiksel-mantıksal");
createSeries("Sözel Dilbilimsel", "sözel-dilbilimsel");
 createSeries("Dikkat Hafıza", "dikkat-hafıza");
createSeries("Müziksel Ritmik Zeka", "müziksel-ritmik");
  

    // Make stuff animate on load
    chart.appear(1000, 100);
  }, []);

  return <div id="chartdiv" style={{ width: '100%', height: '500px' }} />;
};

export default ChartWidget9;
