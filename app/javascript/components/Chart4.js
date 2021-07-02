import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { Chart, registerShape, registerInteraction, registerTheme } from '@antv/g2';

let chart_period = 1000;

class Chart4 extends React.Component {   //page1クラスにReact.Componentを継承する

  render() {                          //画面表示の為のrenderメソッドを定義する
  
  var URL = ''
  
  if (this.props.num == "A") {
    URL = '/assets/dataA.json'
  } else if (this.props.num == "B") {
    URL = '/assets/dataB.json'
  } else if (this.props.num == "C") {
    URL = '/assets/dataC.json'
  } else if (this.props.num == "D") {
    URL = '/assets/dataD.json'
  } else {
    URL = '/assets/dataE.json'
  }
  
  
  fetch(URL)
  .then(res => res.json())
  .then(data => {
  
    // 定义新的交互
    registerInteraction('other-filter', {
      showEnable: [
        { trigger: 'plot:mouseenter', action: 'cursor:crosshair' },
        { trigger: 'mask:mouseenter', action: 'cursor:move' },
        { trigger: 'plot:mouseleave', action: 'cursor:default' },
        { trigger: 'mask:mouseleave', action: 'cursor:crosshair' },
      ],
      start: [
        { trigger: 'plot:mousedown',isEnable(context) {
          return !context.isInShape('mask');
        }, action: ['x-rect-mask:start', 'x-rect-mask:show'] },
        {trigger: 'mask:dragstart', action: 'x-rect-mask:moveStart'}
      ],
      processing: [
        { trigger: 'plot:mousemove', action: 'x-rect-mask:resize' },
        { trigger: 'mask:drag', action: 'x-rect-mask:move'},
        { trigger: 'mask:change', action: 'sibling-x-filter:filter' }
      ],
      end: [
        { trigger: 'plot:mouseup', action: 'x-rect-mask:end' },
        { trigger: 'mask:dragend', action: 'x-rect-mask:moveEnd' }
      ],
      rollback: [
        { trigger: 'dblclick', action: ['x-rect-mask:hide', 'sibling-x-filter:reset']}
      ]
    });
    
    // Step 1: 注册主题
    registerTheme('newTheme', {
      backgroundColor: '#025DF4',
    });
    
    const chart = new Chart({
      container: 'container',
      autoFit: true,
      height: 500,
      width: 700,
      padding: [10, 40, 10, 10],
      limitInPlot: true,
      defaultInteractions:[],
      padding: [16, 50, 64],
    });
    
    chart.scale('time', {
      tickCount: 5,
      range: [0, 1]
    });
    chart.scale('temp', {
          min: 0,
          max: 50
    });
    
    chart.scale('hum', {
                min: 0,
          max: 100
    });
    
    chart.scale('co2', {
      nice: true
    });
    
    chart.scale('sol_rad', {
      nice: true
    });
    
    chart.scale('sat', {
      nice: true
    });


    chart.animate(false);
    chart.data(data);
    
    chart.interaction('tooltip');
    
    chart.option('slider', {
      start: 0.1,
      end: 0.8,
      trendCfg: {
        isArea: false,
      },
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
  
    
    chart.render();
  
  });

  return (
    <div>
      <div id="container" />
    </div>
  );
  }
}

export default Chart4; // ここを修正