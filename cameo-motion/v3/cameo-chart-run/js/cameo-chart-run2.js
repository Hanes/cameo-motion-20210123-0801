'use strict';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import Tabulator from 'tabulator-tables';
import "./tabulator.min.css";
import {fetch_dic, fetch_transpose, hi} from "../../cameo-core/js/cameo-clean";

import {CameoAmElement} from "../../cameo-core/js/cameo-am-element";
// class CameoAmElement extends HTMLElement {
//   connectedCallback() {
//     // super.connectedCallback();
//     hi();
//     this.str_random_id = "id_" + Math.random().toString(36).substr(2, 9);
//     console.log("cameo_debug, random id: " + this.str_random_id);
//     this.innerHTML = `<div id="${this.str_random_id}"
//                       style="width: 100%; height: 600px;"></div>`;
//     this.chart_render();
//   }
//
//   // connectedCallback() {
//   //   console.log("CameoAmElement 0131 aaa");
//   // this.str_random_id = "id_" + Math.random().toString(36).substr(2, 9);
//   // this.innerHTML = `<div class="cameo-am-element" id="${this.str_random_id}"
//   //                   style="width: 100%; height: 600px;"></div>`;
//   // console.log("CameoAmElement 0131 bbb")
//   // this.chart_render();
//   // console.log("CameoAmElement 0131 ccc")
//   // }
// }

class CameoDebug extends CameoAmElement {

  chart_render() {
//define data
    var tabledata = [
      {id: 1, name: "in this.chart_render 這是CI CD 測試 123中文Billy Bob", age: 12, gender: "male", height: 95, col: "red", dob: "14/05/2010"},
      {id: 2, name: "就算編譯也可以直接跑Jenny Jane", age: 42, gender: "female", height: 142, col: "blue", dob: "30/07/1954"},
      {id: 3, name: "Steve McAlistaire", age: 35, gender: "male", height: 176, col: "green", dob: "04/11/1982"}
    ];

//define table
    var table = new Tabulator("#example-table", {
      data: tabledata,
      autoColumns: true
    });

// Create chart instance
    let chart = am4core.create("chartdiv", am4charts.PieChart);

// Create pie series
    let series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "litres";
    series.dataFields.category = "country";

// Add data
    chart.data = [{
      "country": "Lithuania中文",
      "litres": 501.9
    }, {
      "country": "Czech Republic",
      "litres": 301.9
    }, {
      "country": "Ireland",
      "litres": 201.1
    }, {
      "country": "Germany",
      "litres": 165.8
    }, {
      "country": "Australia",
      "litres": 139.9
    }, {
      "country": "Austria",
      "litres": 128.3
    }, {
      "country": "英國UK",
      "litres": 99
    }, {
      "country": "Belgium",
      "litres": 60
    }, {
      "country": "The Netherlands",
      "litres": 50
    }];

// And, for a good measure, let's add a legend
    chart.legend = new am4charts.Legend();
  }
}

console.log("debug 0131 2216 001");
customElements.define("cameo-debug", CameoDebug);
console.log("debug 0131 2216 002");

