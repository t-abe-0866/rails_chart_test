import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { Chart, registerShape, registerInteraction } from '@antv/g2';

const Chart3 = (props) => {
  
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
        temp: {
          min: 0,
          max: 50
        },
        hum: {
          min: 0,
          max: 100
        },
        co2: {
          min: 0,
          max: 1000
        },
        sol_rad: {
          min: 0,
          max: 1500
        },
        sat: {
          min: 0,
          max: 40
        }
      });
      
      chart.line().position('time*temp').style({
        stroke: '#cc3300',
        lineDash: [0.2, 0.2]
      })
      chart.line().position('time*hum').style({
        stroke: '#ccff33',
        lineDash: [0.2, 0.2]
      })
      chart.line().position('time*co2').style({
        stroke: '#009933',
        lineDash: [0.2, 0.2]
      })
      chart.line().position('time*sol_rad').style({
        stroke: '#3399cc',
        lineDash: [0.2, 0.2]
      })
      chart.line().position('time*sat').style({
        stroke: '#9966ff',
        lineDash: [0.2, 0.2]
      })
      
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
};

Chart3.propTypes = {
  name: PropTypes.string.isRequired, // this is passed from the Rails view
};

export default props => <Chart3 {...props} />; // ここを修正