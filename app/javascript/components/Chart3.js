import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { Chart, registerShape, registerInteraction } from '@antv/g2';

let chart_period = 1000;

class Chart3 extends React.Component {   //page1クラスにReact.Componentを継承する

  render() {                          //画面表示の為のrenderメソッドを定義する
  console.log(this.props.num) 
  fetch('/assets/data.json')
    .then(res => res.json())
    .then(data => {
      if (chart) {
        chart.clear();
      }
      const chart = new Chart({
        container: 'container',
        autoFit: true,
        height: 500,
        width: 700,
      });
      chart.data(data);
      
      chart.scale({
        time: {
          min: 0,
          max: this.props.num
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

  return (
    <div>
      <div id="container" />
    </div>
  );
  }
}

export default Chart3; // ここを修正