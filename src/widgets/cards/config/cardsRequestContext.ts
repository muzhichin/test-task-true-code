import {createContext} from "react";
import {IFullRealTimePrice, SortRealTimePrice} from "./types.ts";
import {CONST_LIMIT} from "./constants.ts";

export const ctxCardsRequest = createContext<{
    pages: null | number,
    currentPage: number,
    sort: null | SortRealTimePrice,
    loading: boolean,
    data: null | Array<IFullRealTimePrice>
    limit: number,
    setPage: (page: number) => void,
    setSort: (value: SortRealTimePrice) => void
}>({
    pages: null,
    currentPage: 1,
    sort: null,
    loading: false,
    data: null,
    limit: CONST_LIMIT,
    setPage: () => null,
    setSort: () => null
});