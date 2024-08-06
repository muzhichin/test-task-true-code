import {IFullRealTimePrice, SortRealTimePrice} from "../config/types.ts";

self.onmessage = async function (e: MessageEvent<{ data: Array<IFullRealTimePrice>, sort: SortRealTimePrice | null }>) {
    const {data, sort} = e.data;
    let sortedByPriceAsc

    switch (sort!.replace(/^-/, '')) {
        case "bidPrice":
            sortedByPriceAsc = data.slice()
                .sort((a, b) => a.bidPrice - b.bidPrice);
            break
        case "lastUpdated":
            sortedByPriceAsc = data.slice()
                .sort((a, b) => a.lastUpdated - b.lastUpdated);
            break
        default:
            sortedByPriceAsc = data;
            break
    }

    const sortedData = sort!.startsWith('-') ?
        sortedByPriceAsc.reverse() : sortedByPriceAsc

    self.postMessage(sortedData);
};