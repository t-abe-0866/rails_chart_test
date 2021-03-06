import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { Chart, registerShape, registerInteraction, registerTheme } from '@antv/g2';

let chart_period = 1000;

class Chart8 extends React.Component {   //page1クラスにReact.Componentを継承する

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
      padding: [10, 40, 10, 10],
      limitInPlot: true,
      defaultInteractions:[]
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

    const view1 = chart.createView({
      region: {
        start: {
          x: 0,
          y: 0
        },
        end: {
          x: 1,
          y: 0.7
        }
      },
      padding: [10, 10, 40, 60]
    });
    view1.animate(false);
    view1.data(data);
    
    view1.interaction('tooltip');
    

    
    view1.line().position('time*temp').style({
      lineWidth: 1,
    }).color('#FF4500').shape('circle');
    view1.line().position('time*hum').style({
      lineWidth: 1,
    }).color('#9E3DFF').shape('circle');
    view1.line().position('time*co2').style({
      lineWidth: 1,
    }).color('#FF9E3D').shape('circle');
    view1.line().position('time*sol_rad').style({
      lineWidth: 1,
    }).color('#9AD681').shape('circle');
    view1.line().position('time*sat').style({
      lineWidth: 1,
    }).color('#4FAAEB').shape('circle');
    
  
    view1.tooltip({
      showCrosshairs: true,
      shared: true,
    });
    
    view1.axis('temp', {
      label: {
        formatter: (val) => {
          return val + ' °C';
        },
      },
    });
    
    view1.axis('hum', {
      label: {
        formatter: (val) => {
          return val + ' %';
        },
      },
    });
    
    view1.axis('co2', false);
    view1.axis('sol_rad', false);
    view1.axis('sat', false);
  
  
    const view3 = chart.createView({
      region: {
        start: {
          x: 0,
          y: 0.8
        },
        end: {
          x: 1,
          y: 1
        }
      },
      padding: [0, 10, 20, 60]
    });
    
    view3.interaction('other-filter');
    view3.data(data);
    view3.tooltip(false);

    view3.axis('temp', false);
    view3.axis('hum', false);
    view3.axis('co2', false);
    view3.axis('sol_rad', false);
    view3.axis('sat', false);
    
    view3.line().position('time*temp').style({
      lineWidth: 1,
    }).color('l(100) 0:#a50f15 1:#fee5d9').shape('circle');
    view3.line().position('time*hum').style({
      lineWidth: 1,
    }).color('#9E3DFF').shape('circle');
    view3.line().position('time*co2').style({
      lineWidth: 1,
    }).color('#FF9E3D').shape('circle');
    view3.line().position('time*sol_rad').style({
      lineWidth: 1,
    }).color('#9AD681').shape('circle');
    view3.line().position('time*sat').style({
      lineWidth: 1,
    }).color('#4FAAEB').shape('circle');
    
    chart.render();
  
  });

  return (
    <div>
      <div id="container" />
    </div>
  );
  }
}

export default Chart8; // ここを修正