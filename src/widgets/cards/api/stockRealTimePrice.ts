import axios, {AxiosResponse} from "axios";
import {IFullRealTimePrice} from "../config/types.ts";

const getUrlRequest = () => `https://financialmodelingprep.com/api/v3/stock/full/real-time-price?apikey=${window.API_KEY}`


export const apiStockFullRealTimePrice = async () => {
    const response: AxiosResponse<Array<IFullRealTimePrice>> = await axios.get(getUrlRequest());
    return response.data
}