export interface ResasResponse<T> {
  message: string | null;
  result: T;
}

export type PopulationDataSetName =
  | '総人口'
  | '年少人口'
  | '生産年齢人口'
  | '老年人口';

export interface YearlyPopulationItem {
  year: number;
  value: number;
}

export interface PopulationDataSet {
  label: PopulationDataSetName;
  data: YearlyPopulationItem[];
}

export interface PopulationResult {
  boundaryYear: number;
  data: PopulationDataSet[];
}
