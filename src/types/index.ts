export type MockedData = {
  [index: string]:
    | {
        CREATED_DATE: string;
        DATE: string;
        ID: number;
        PRICE?: number;
        name?: string;
      }[]
    | undefined;
};
