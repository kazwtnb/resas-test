export interface ChartData {
  name: string;
  data: number[];
}

export interface CreateLineChartInput {
  renderTo: string | HTMLDivElement;
  xAxisTitle: string;
  yAxisTitle: string;
  startYear: number;
  yearInterval: number;
  data: ChartData[];
}
