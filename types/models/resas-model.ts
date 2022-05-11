export interface Prefecture {
  prefCode: number;
  prefName: string;
}

export interface Population extends Prefecture {
  data: number[];
}
