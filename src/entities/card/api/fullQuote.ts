import axios, {AxiosResponse} from "axios";
import {IFullQuote} from "./types.ts";

const getUrlRequest = (symbol: string) => {
    return `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${window.API_KEY}`
}


export const apiFullQuote = async (symbol: string, controller: AbortController) => {
    const response: AxiosResponse<Array<IFullQuote>> = await axios.get(getUrlRequest(symbol), {signal: controller.signal});
    return response.data
}