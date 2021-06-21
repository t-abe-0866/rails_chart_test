import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { Chart, registerShape, registerInteraction } from '@antv/g2';

let chart_period = 1000;


 function fan_chart(chart_period1) {

  fetch('/assets/data.json')
    .then(res => res.json())
    .then(data => {
      const chart = new Chart({
        container: 'container',
        autoFit: true,
        height: 500,
      });
      chart.data(data);
      
      chart.scale({
        time: {
          min: 0,
          max: chart_period1
        },
        temp: {
          min: 0,
          max: 50
        },
        hum: {
          min: 0,
          max: 100
        },
        co2: {
          nice: true,
        },
        sol_rad: {
         nice: true,
        },
        sat: {
          nice: true,
        }
      });
      
      chart.line().position('time*temp').style({
        lineWidth: 1,
      }).color('#FF4500').shape('circle');
      chart.line().position('time*hum').style({
        lineWidth: 1,
      }).color('#9E3DFF').shape('circle');
      chart.line().position('time*co2').style({
        lineWidth: 1,
      }).color('#FF9E3D').shape('circle');
      chart.line().position('time*sol_rad').style({
        lineWidth: 1,
      }).color('#9AD681').shape('circle');
      chart.line().position('time*sat').style({
        lineWidth: 1,
      }).color('#4FAAEB').shape('circle');
      
      chart.tooltip({
        showCrosshairs: true,
        shared: true,
      });
      
      chart.axis('temp', {
        label: {
          formatter: (val) => {
            return val + ' °C';
          },
        },
      });
      
      chart.axis('hum', {
        label: {
          formatter: (val) => {
            return val + ' %';
          },
        },
      });
      
      chart.axis('co2', false);
      chart.axis('sol_rad', false);
      chart.axis('sat', false);
      
      chart.theme({ "styleSheet": { "brandColor": "#FF4500", "paletteQualitative10": ["#FF4500", "#1AAF8B", "#406C85", "#F6BD16", "#B40F0F", "#2FB8FC", "#4435FF", "#FF5CA2", "#BBE800", "#FE8A26"], "paletteQualitative20": ["#FF4500", "#1AAF8B", "#406C85", "#F6BD16", "#B40F0F", "#2FB8FC", "#4435FF", "#FF5CA2", "#BBE800", "#FE8A26", "#946DFF", "#6C3E00", "#6193FF", "#FF988E", "#36BCCB", "#004988", "#FFCF9D", "#CCDC8A", "#8D00A1", "#1CC25E"] } });
    
      chart.render();
    });
  }

class Chart3 extends React.Component {   //page1クラスにReact.Componentを継承する

 handleClick1() {
    chart_period = 360
    fan_chart(chart_period);
  }
  
   handleClick2() {
    chart_period = 720
    fan_chart(chart_period);
  }
  
   handleClick3() {
    chart_period = 1440
    fan_chart(chart_period);
  }
  
   handleClick4() {
    chart_period = 4320
    fan_chart(chart_period);
  }
  
   handleClick5() {
    chart_period = 7000
    fan_chart(chart_period);
  }
 
  render() {                          //画面表示の為のrenderメソッドを定義する

  return (
        <div>
          <div data-part="item">
            <div data-component="toolbar-group">
              <div data-component="toolbar">
                <label>表示範囲</label>
                <ul data-component="segmented-button" data-dev-behaviour="exclusive">
                  <li>
                    <button data-state="active"  onClick={this.handleClick1}>6時間</button>
                  </li>
                  <li>
                    <button  onClick={this.handleClick2} value="2">12時間</button>
                  </li>
                  <li>
                    <button  onClick={this.handleClick3} value="3">24時間</button>
                  </li>
                  <li>
                    <button  onClick={this.handleClick4} value="4">3日</button>
                  </li>
                  <li>
                    <button onClick={this.handleClick5}>5日</button>
                  </li>
                </ul>
              </div>
              <div data-component="toolbar">
                <label>スパン</label>
                <ul data-component="segmented-button" data-dev-behaviour="exclusive">
                  <li>
                    <button data-state="active">フル</button>
                  </li>
                  <li>
                    <button>24時間</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        <div id="container" />
    </div>
  );
  }
}

export default Chart3; // ここを修正