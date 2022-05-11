import { Options } from 'highcharts';
import Highcharts from 'highcharts/highcharts.js';
import { CreateLineChartInput } from '../types/models/chart-model';

/**
 * Highchartsで線グラフを描画する
 */
export const createLineChart = (input: CreateLineChartInput): void => {
  Highcharts.chart(input.renderTo, {
    title: {
      text: ''
    },
    xAxis: {
      title: {
        text: input.xAxisTitle,
        align: 'high',
        rotation: 0,
        x: 25,
        y: -18
      }
    },
    yAxis: {
      title: {
        text: input.yAxisTitle,
        align: 'high',
        rotation: 0,
        y: -20,
        offset: -20
      }
    },
    chart: {
      marginTop: 40,
      marginRight: 20
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: input.startYear,
        pointInterval: input.yearInterval
      }
    },
    series: input.data,
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }
      ]
    }
  } as Options);
};

/**
 * 固定値のIDを使用する設定に変更する
 * snapshotテストが自動採番IDで落ちるので追加
 */
export const useTestConfig = () => {
  Highcharts.useSerialIds(true);
};
