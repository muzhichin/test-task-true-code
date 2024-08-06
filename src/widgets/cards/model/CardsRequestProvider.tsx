import {ReactNode, useState, useEffect} from "react";
import {ctxCardsRequest} from "../config/cardsRequestContext.ts";
import SortingFinancialModelWorker from './workerSortingFullPrice.ts?worker';
import {apiStockFullRealTimePrice} from "../api/stockRealTimePrice.ts";
import {IFullRealTimePrice, SortRealTimePrice} from "../config/types.ts";
// import stub from "../api/stub.ts";
import {CONST_LIMIT} from "../config/constants.ts";

export function CardsRequestProvider({children}: { children: ReactNode }) {

    const [data, setData] =
        useState<null | Array<IFullRealTimePrice>>(null);

    const [sort, setSort] =
        useState<SortRealTimePrice | null>(null);

    const [loading, setLoading] =
        useState<boolean>(false);

    const [page, setPage] =
        useState(1)

    useEffect(() => {

        (async () => {
            const data = await apiStockFullRealTimePrice()
            // const data = stub
            setData(data)
        })()

    }, [])

    useEffect(() => {

        const worker = new SortingFinancialModelWorker();

        if (sort !== null) {
            setLoading(true)
            worker.postMessage({data, sort});
            worker.onmessage = (e) => {
                setPage(1)
                setData(e.data)
                setLoading(false)
            };
        }

        return () => {
            worker.terminate();
        };
    }, [sort])


    const pages = data !== null ?
        Math.ceil(data.length / CONST_LIMIT) : null;

    return <ctxCardsRequest.Provider value={
        {
            pages,
            currentPage: page,
            sort: null,
            loading,
            data: data?.slice(CONST_LIMIT * (page - 1), CONST_LIMIT + CONST_LIMIT * (page - 1)) || null,
            limit: CONST_LIMIT,
            setPage,
            setSort
        }
    }>{children}</ctxCardsRequest.Provider>
}
