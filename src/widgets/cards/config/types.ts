export interface IFullRealTimePrice {
    bidSize: number;
    askPrice: number;
    volume: number;
    askSize: number;
    bidPrice: number;
    lastSalePrice: number;
    lastSaleSize: number;
    lastSaleTime: number;
    fmpLast: number;
    lastUpdated: number;
    symbol: string;
}

export type SortRealTimePrice = "bidPrice" | "lastUpdated" | "-bidPrice" | "-lastUpdated"