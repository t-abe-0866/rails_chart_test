import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { Chart, registerShape, registerInteraction, registerTheme } from '@antv/g2';

let chart_period = 1000;

class Chart11 extends React.Component {   //page1クラスにReact.Componentを継承する

  render() {                          //画面表示の為のrenderメソッドを定義する
  
  var URL = ''
  
  if (this.props.num == "A") {
    URL = '/assets/output.json'
  } else if (this.props.num == "B") {
    URL = '/assets/output.json'
  } else if (this.props.num == "C") {
    URL = '/assets/output.json'
  } else if (this.props.num == "D") {
    URL = '/assets/output.json'
  } else {
    URL = '/assets/output.json'
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
      padding: [16, 50, 150],// 上，右，下，左
    });
    
    chart.scale('a', {
      tickCount: 5,
      range: [0, 1]
    });
    chart.scale('1', {
          min: 0,
          max: 50
    });
    
    chart.scale('2', {
                min: 0,
          max: 100
    });
    chart.scale('3', {nice: true});
    chart.scale('4', {nice: true});
    chart.scale('5', {nice: true});
    chart.scale('6', {nice: true});
    chart.scale('7', {nice: true});
    chart.scale('8', {nice: true});
    chart.scale('9', {nice: true});
    chart.scale('10', {nice: true});
    chart.scale('11', {nice: true});
    chart.scale('12', {nice: true});
    chart.scale('13', {nice: true});
    chart.scale('14', {nice: true});
    chart.scale('15', {nice: true});
    chart.scale('16', {nice: true});
    chart.scale('17', {nice: true});
    chart.scale('18', {nice: true});
    chart.scale('19', {nice: true});
    chart.scale('20', {nice: true});
    chart.scale('21', {nice: true});
    chart.scale('22', {nice: true});
    chart.scale('23', {nice: true});
    chart.scale('24', {nice: true});
    chart.scale('25', {nice: true});
    chart.scale('26', {nice: true});
    chart.scale('27', {nice: true});
    chart.scale('28', {nice: true});
    chart.scale('29', {nice: true});
    chart.scale('30', {nice: true});
    chart.scale('31', {nice: true});
    chart.scale('32', {nice: true});
    chart.scale('33', {nice: true});
    chart.scale('34', {nice: true});
    chart.scale('35', {nice: true});
    chart.scale('36', {nice: true});
    chart.scale('37', {nice: true});
    chart.scale('38', {nice: true});
    chart.scale('39', {nice: true});
    chart.scale('40', {nice: true});
    chart.scale('41', {nice: true});
    chart.scale('42', {nice: true});
    chart.scale('43', {nice: true});
    chart.scale('44', {nice: true});
    chart.scale('45', {nice: true});
    chart.scale('46', {nice: true});
    chart.scale('47', {nice: true});
    chart.scale('48', {nice: true});


    chart.animate(false);
    chart.data(data);
    
    chart.interaction('tooltip');
    
    chart.option('slider', {
      start: 0.1,
      end: 0.8,
      trendCfg: {
        isArea: false,
      },
      height: 80,
    });
    

    let color1 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color2 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color3 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color4 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color5 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color6 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color7 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color8 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color9 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color10 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color11 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color12 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color13 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color14 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color15 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color16 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color17 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color18 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color19 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color20 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color21 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color22 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color23 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color24 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color25 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color26 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color27 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color28 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color29 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color30 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color31 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color32 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color33 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color34 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color35 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color36 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color37 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color38 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color39 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color40 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color41 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color42 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color43 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color44 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color45 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color46 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color47 = '#'+Math.floor(Math.random()*16777215).toString(16);
    let color48 = '#'+Math.floor(Math.random()*16777215).toString(16);

    
    chart.line().position('a*1').style({lineWidth: 1,}).color(color1).shape('circle');
    chart.line().position('a*2').style({lineWidth: 1,}).color(color2).shape('circle');
    chart.line().position('a*3').style({lineWidth: 1,}).color(color3).shape('circle');
    chart.line().position('a*4').style({lineWidth: 1,}).color(color4).shape('circle');
    chart.line().position('a*5').style({lineWidth: 1,}).color(color5).shape('circle');
    chart.line().position('a*6').style({lineWidth: 1,}).color(color6).shape('circle');
    chart.line().position('a*7').style({lineWidth: 1,}).color(color7).shape('circle');
    chart.line().position('a*8').style({lineWidth: 1,}).color(color8).shape('circle');
    chart.line().position('a*9').style({lineWidth: 1,}).color(color9).shape('circle');
    chart.line().position('a*10').style({lineWidth: 1,}).color(color10).shape('circle');
    chart.line().position('a*11').style({lineWidth: 1,}).color(color11).shape('circle');
    chart.line().position('a*12').style({lineWidth: 1,}).color(color12).shape('circle');
    chart.line().position('a*13').style({lineWidth: 1,}).color(color13).shape('circle');
    chart.line().position('a*14').style({lineWidth: 1,}).color(color14).shape('circle');
    chart.line().position('a*15').style({lineWidth: 1,}).color(color15).shape('circle');
    chart.line().position('a*16').style({lineWidth: 1,}).color(color16).shape('circle');
    chart.line().position('a*17').style({lineWidth: 1,}).color(color17).shape('circle');
    chart.line().position('a*18').style({lineWidth: 1,}).color(color18).shape('circle');
    chart.line().position('a*19').style({lineWidth: 1,}).color(color19).shape('circle');
    chart.line().position('a*20').style({lineWidth: 1,}).color(color20).shape('circle');
    chart.line().position('a*21').style({lineWidth: 1,}).color(color21).shape('circle');
    chart.line().position('a*22').style({lineWidth: 1,}).color(color22).shape('circle');
    chart.line().position('a*23').style({lineWidth: 1,}).color(color23).shape('circle');
    chart.line().position('a*24').style({lineWidth: 1,}).color(color24).shape('circle');
    chart.line().position('a*25').style({lineWidth: 1,}).color(color25).shape('circle');
    chart.line().position('a*26').style({lineWidth: 1,}).color(color26).shape('circle');
    chart.line().position('a*27').style({lineWidth: 1,}).color(color27).shape('circle');
    chart.line().position('a*28').style({lineWidth: 1,}).color(color28).shape('circle');
    chart.line().position('a*29').style({lineWidth: 1,}).color(color29).shape('circle');
    chart.line().position('a*30').style({lineWidth: 1,}).color(color30).shape('circle');
    chart.line().position('a*31').style({lineWidth: 1,}).color(color31).shape('circle');
    chart.line().position('a*32').style({lineWidth: 1,}).color(color32).shape('circle');
    chart.line().position('a*33').style({lineWidth: 1,}).color(color33).shape('circle');
    chart.line().position('a*34').style({lineWidth: 1,}).color(color34).shape('circle');
    chart.line().position('a*35').style({lineWidth: 1,}).color(color35).shape('circle');
    chart.line().position('a*36').style({lineWidth: 1,}).color(color36).shape('circle');
    chart.line().position('a*37').style({lineWidth: 1,}).color(color37).shape('circle');
    chart.line().position('a*38').style({lineWidth: 1,}).color(color38).shape('circle');
    chart.line().position('a*39').style({lineWidth: 1,}).color(color39).shape('circle');
    chart.line().position('a*40').style({lineWidth: 1,}).color(color40).shape('circle');
    chart.line().position('a*41').style({lineWidth: 1,}).color(color41).shape('circle');
    chart.line().position('a*42').style({lineWidth: 1,}).color(color42).shape('circle');
    chart.line().position('a*43').style({lineWidth: 1,}).color(color43).shape('circle');
    chart.line().position('a*44').style({lineWidth: 1,}).color(color44).shape('circle');
    chart.line().position('a*45').style({lineWidth: 1,}).color(color45).shape('circle');
    chart.line().position('a*46').style({lineWidth: 1,}).color(color46).shape('circle');
    chart.line().position('a*47').style({lineWidth: 1,}).color(color47).shape('circle');
    chart.line().position('a*48').style({lineWidth: 1,}).color(color48).shape('circle');
    
  
    chart.tooltip({
      showCrosshairs: true,
      shared: true,
    });
    
    
    chart.axis('1', {
      label: {
        formatter: (val) => {
          return val + ' °C';
        },
      },
    });
    
    chart.axis('2', {
      label: {
        formatter: (val) => {
          return val + ' %';
        },
      },
    });
    
    chart.axis('3', false);
    chart.axis('4', false);
    chart.axis('5', false);
    chart.axis('6', false);
    chart.axis('7', false);
    chart.axis('8', false);
    chart.axis('9', false);
    chart.axis('10', false);
    chart.axis('11', false);
    chart.axis('12', false);
    chart.axis('13', false);
    chart.axis('14', false);
    chart.axis('15', false);
    chart.axis('16', false);
    chart.axis('17', false);
    chart.axis('18', false);
    chart.axis('19', false);
    chart.axis('20', false);
    chart.axis('21', false);
    chart.axis('22', false);
    chart.axis('23', false);
    chart.axis('24', false);
    chart.axis('25', false);
    chart.axis('26', false);
    chart.axis('27', false);
    chart.axis('28', false);
    chart.axis('29', false);
    chart.axis('30', false);
    chart.axis('31', false);
    chart.axis('32', false);
    chart.axis('33', false);
    chart.axis('34', false);
    chart.axis('35', false);
    chart.axis('36', false);
    chart.axis('37', false);
    chart.axis('38', false);
    chart.axis('39', false);
    chart.axis('40', false);
    chart.axis('41', false);
    chart.axis('42', false);
    chart.axis('43', false);
    chart.axis('44', false);
    chart.axis('45', false);
    chart.axis('46', false);
    chart.axis('47', false);
    chart.axis('48', false);
    

    
    chart.annotation().line({
      top: true,
      start: ['2020/3/2 19:00',0],
      end: ['2020/3/2 19:00', 100],
      text: {
        fontSize: '5px',
        content: '日の入',
      },
      style: {
        lineWidth: 10,
      },
    },
    {
      start: ['2020/3/2 5:00',0],
      end: ['2020/3/2 5:00', 100],
      text: {
        fontSize: '5px',
        content: '日の出',
      },
      style: {
        Width: 1,
      }
    });
  
    
    chart.render();
  
  });

  return (
    <div>
      <div id="container" />
    </div>
  );
  }
}

export default Chart11; // ここを修正