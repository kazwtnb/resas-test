export interface ChartData {
  name: string;
  data: number[];
}

export interface CreateLineChartInput {
  id: string;
  xAxisTitle: string;
  yAxisTitle: string;
  startYear: number;
  yearInterval: number;
  data: ChartData[];
}
