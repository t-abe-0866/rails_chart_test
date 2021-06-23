import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { Chart, registerShape, registerInteraction } from '@antv/g2';

let chart_period = 1000;

class Chart5 extends React.Component {   //page1クラスにReact.Componentを継承する

  render() {                          //画面表示の為のrenderメソッドを定義する
  
  var URL = ''
  
  if (this.props.num == "A") {
    URL = '/assets/data_2A.json'
  } else if (this.props.num == "B") {
    URL = '/assets/data_2B.json'
  } else if (this.props.num == "C") {
    URL = '/assets/data_2C.json'
  } else if (this.props.num == "D") {
    URL = '/assets/data_2D.json'
  } else {
    URL = '/assets/data_2E.json'
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
    const chart = new Chart({
      container: 'container',
      autoFit: true,
      height: 500,
      defaultInteractions:[]
    });
    
    chart.scale('time', {
      tickCount: 5,
      range: [0, 1]
    });
    chart.scale('time_2', {
      tickCount: 5,
      range: [0, 1]
    });
    chart.scale('temp', {
          min: 0,
          max: 50
    });
    
    chart.scale('temp_2', {
          min: 0,
          max: 50
    });
    

    chart.tooltip({
      showCrosshairs: true
    });
    chart.removeInteraction('tooltip');

    const view1 = chart.createView({
      region: {
        start: {
          x: 0,
          y: 0
        },
        end: {
          x: 1,
          y: 0.4
        }
      },
      padding: [10, 10, 40, 60]
    });
    view1.animate(false);
    view1.data(data);
    
    view1.interaction('tooltip');
    view1.interaction('sibling-tooltip');
    
    view1.line().position('time*temp').style({
      lineWidth: 1,
    }).color('#FF4500').shape('circle');
    
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
    
    const view2 = chart.createView({
      region: {
        start: {
          x: 0,
          y: 0.4
        },
        end: {
          x: 1,
          y: 0.8
        }
      },
      padding: [10, 10, 40, 60]
    });
    view2.animate(false);
    view2.data(data);
    
    view2.interaction('tooltip');
    view2.interaction('sibling-tooltip');
    
    view2.line().position('time_2*temp_2').style({
      lineWidth: 1,
    }).color('#9E3DFF').shape('circle');

    
  
    view2.tooltip({
      showCrosshairs: true,
      shared: true,
    });
    
    view2.axis('temp_2', {
      label: {
        formatter: (val) => {
          return val + ' °C';
        },
      },
    });
  
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
    view3.axis(false);
    
    view3.line().position('time*temp').style({
      lineWidth: 1,
    }).color('#FF4500').shape('circle');
    view3.line().position('time_2*temp_2').style({
      lineWidth: 1,
    }).color('#9E3DFF').shape('circle');
    
    chart.render();
  
  });

  return (
    <div>
      <div id="container" />
    </div>
  );
  }
}

export default Chart5; // ここを修正